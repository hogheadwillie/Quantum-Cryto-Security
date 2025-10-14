import os
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from sqlalchemy import create_engine, Column, String, DateTime, JSON
from sqlalchemy.orm import sessionmaker, declarative_base
from datetime import datetime
from uuid import uuid4
from crypto_agility import hybrid_wrap

DATABASE_URL = os.getenv("DATABASE_URL", "postgresql+psycopg2://postgres:postgres@db:5432/postgres")
engine = create_engine(DATABASE_URL, future=True)
SessionLocal = sessionmaker(engine, autoflush=False, autocommit=False)
Base = declarative_base()

class Secret(Base):
    __tablename__ = "secrets"
    id = Column(String, primary_key=True, default=lambda: str(uuid4()))
    tenant_id = Column(String)
    name = Column(String)
    envelope = Column(JSON)
    policy = Column(JSON, default=dict)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow)

Base.metadata.create_all(bind=engine)

class CreateSecretReq(BaseModel):
    tenant_id: str
    name: str
    plaintext: str

app = FastAPI(title="qsvault")

@app.post("/v1/secrets")
def create_secret(req: CreateSecretReq):
    dek = req.plaintext.encode()[:32].ljust(32, b"\x00")
    env = hybrid_wrap(b"pub1", b"pub2", dek)
    db = SessionLocal(); s = Secret(tenant_id=req.tenant_id, name=req.name, envelope=env, policy={"rotation_days":90})
    db.add(s); db.commit()
    return {"id": s.id, "envelope": s.envelope}

@app.get("/v1/secrets/{sid}")
def get_secret(sid: str):
    db = SessionLocal(); s = db.get(Secret, sid)
    if not s: raise HTTPException(404, "not found")
    return {"id": s.id, "name": s.name, "envelope": s.envelope}

@app.get("/v1/secrets")
def list_secrets():
    db = SessionLocal();
    rows = db.query(Secret).all()
    return [{"id": r.id, "name": r.name, "created_at": r.created_at.isoformat()} for r in rows]
