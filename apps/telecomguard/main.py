from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="telecomguard")

class Ingest(BaseModel):
    values: list[float]

@app.post("/v1/analyze")
def analyze(d: Ingest):
    if not d.values:
        return {"anomaly_score": 0.0}
    mean = sum(d.values)/len(d.values)
    var = sum((x-mean)**2 for x in d.values)/len(d.values)
    score = min(1.0, var/(mean*mean+1e-6))
    return {"anomaly_score": score, "mean": mean, "var": var}

@app.get("/v1/dash/cards")
def cards():
    return {"entropy_quality": 0.92, "vault_items": 3, "active_egress": 1, "anomalies_24h": 2}
