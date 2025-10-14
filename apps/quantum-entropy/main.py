import base64, math
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="quantum-entropy")

class Samples(BaseModel):
    source: str
    bits: str  # base64

@app.post("/v1/entropy/samples")
def ingest(samples: Samples):
    data = base64.b64decode(samples.bits)
    n = len(data)*8
    ones = sum(bin(b).count("1") for b in data)
    p = ones/n if n else 0.5
    z = (ones - n/2)/math.sqrt(n/4) if n else 0
    return {"n_bits": n, "ones": ones, "p_est": p, "z": z}

@app.get("/v1/entropy/health")
def health():
    return {"ok": True}
