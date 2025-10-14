import random
from fastapi import FastAPI
from pydantic import BaseModel
from uuid import uuid4

POOL = ["34.101.12.10","35.88.1.22","3.91.55.77"]

app = FastAPI(title="ip-rotation-qkd")

class SessionReq(BaseModel):
    tenant_id: str

@app.post("/v1/egress/session")
def session(req: SessionReq):
    ip = random.choice(POOL)
    return {"session_id": str(uuid4()), "current_ip": ip, "rotate_after_seconds": 300}

@app.post("/v1/egress/rotate")
def rotate():
    return {"current_ip": random.choice(POOL)}

@app.get("/v1/qkd/status")
def qkd_status():
    return {"provider": "stub", "last_key_index": 0, "health": "degraded"}
