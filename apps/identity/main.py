import os, base64, time
from datetime import datetime
from typing import Optional
from fastapi import FastAPI, HTTPException, Depends
from fastapi.security import OAuth2PasswordRequestForm
from pydantic import BaseModel
from passlib.hash import bcrypt
import jwt
import pyotp
from sqlalchemy import create_engine, Column, String, DateTime
from sqlalchemy.orm import sessionmaker, declarative_base
from uuid import uuid4

JWT_SECRET = os.getenv("JWT_SECRET", "dev_secret_change_me")
DATABASE_URL = os.getenv("DATABASE_URL", "postgresql+psycopg2://postgres:postgres@db:5432/postgres")
ISSUER = os.getenv("JWT_ISSUER", "qst-identity")
ACCESS_TTL_MIN = int(os.getenv("ACCESS_TTL_MIN", "30"))

engine = create_engine(DATABASE_URL, future=True)
SessionLocal = sessionmaker(engine, autoflush=False, autocommit=False)
Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    id = Column(String, primary_key=True, default=lambda: str(uuid4()))
    tenant_id = Column(String)
    email = Column(String, unique=True, nullable=False)
    password_hash = Column(String, nullable=False)
    role = Column(String, default="user")
    mfa_totp_secret = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

Base.metadata.create_all(bind=engine)

app = FastAPI(title="identity")

class SignupReq(BaseModel):
    email: str
    password: str
    tenant_name: Optional[str] = None

class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"
    refresh_token: Optional[str] = None
    mfa_required: bool = False

@app.post("/v1/auth/signup", response_model=Token)
def signup(req: SignupReq):
    db = SessionLocal()
    if db.query(User).filter(User.email==req.email).first():
        raise HTTPException(400, "email already registered")
    u = User(email=req.email, password_hash=bcrypt.hash(req.password), role="owner")
    db.add(u); db.commit()
    return _issue_tokens(u, mfa_required=True)

@app.post("/v1/auth/login", response_model=Token)
def login(form_data: OAuth2PasswordRequestForm = Depends()):
    db = SessionLocal()
    u: User = db.query(User).filter(User.email==form_data.username).first()
    if not u or not bcrypt.verify(form_data.password, u.password_hash):
        raise HTTPException(401, "bad credentials")
    mfa_required = u.mfa_totp_secret is not None
    return _issue_tokens(u, mfa_required=mfa_required)

class TOTPSetupRes(BaseModel):
    otpauth_uri: str
    qr_png_base64: str

@app.post("/v1/auth/totp/setup", response_model=TOTPSetupRes)
def totp_setup(email: str):
    db = SessionLocal()
    u: User = db.query(User).filter(User.email==email).first()
    if not u:
        raise HTTPException(404, "user not found")
    secret = pyotp.random_base32()
    u.mfa_totp_secret = secret
    db.add(u); db.commit()
    otp = pyotp.totp.TOTP(secret)
    uri = otp.provisioning_uri(name=email, issuer_name="QST")
    try:
        import qrcode
        from io import BytesIO
        buf = BytesIO(); qrcode.make(uri).save(buf, format="PNG")
        b64 = base64.b64encode(buf.getvalue()).decode()
    except Exception:
        b64 = ""
    return TOTPSetupRes(otpauth_uri=uri, qr_png_base64=b64)

class TOTPVerifyReq(BaseModel):
    email: str
    code: str

@app.post("/v1/auth/totp/verify", response_model=Token)
def totp_verify(req: TOTPVerifyReq):
    db = SessionLocal()
    u: User = db.query(User).filter(User.email==req.email).first()
    if not u or not u.mfa_totp_secret:
        raise HTTPException(400, "TOTP not set up")
    if not pyotp.TOTP(u.mfa_totp_secret).verify(req.code, valid_window=1):
        raise HTTPException(401, "invalid code")
    return _issue_tokens(u, mfa_required=False)


def _issue_tokens(u: User, mfa_required: bool) -> Token:
    now = int(time.time())
    access = jwt.encode({"sub": u.id, "email": u.email, "role": u.role, "iss": ISSUER, "iat": now, "exp": now + 60*ACCESS_TTL_MIN}, JWT_SECRET, algorithm="HS256")
    refresh = jwt.encode({"sub": u.id, "typ": "refresh", "iss": ISSUER, "iat": now, "exp": now + 60*60*24*30}, JWT_SECRET, algorithm="HS256")
    return Token(access_token=access, refresh_token=refresh, mfa_required=mfa_required)
