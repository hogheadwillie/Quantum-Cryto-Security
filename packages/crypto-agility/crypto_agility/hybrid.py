from dataclasses import dataclass
import base64


def _b64(x: bytes) -> str:
    return base64.b64encode(x).decode()


@dataclass
class Suite:
    kem: str = "x25519+ml-kem768"
    aead: str = "aes-256-gcm"
    sig: str = "ml-dsa-65"
    version: str = "hybrid-v1"


def hybrid_wrap(pubkey_classical: bytes, pubkey_pqc: bytes, dek: bytes) -> dict:
    # Placeholder envelope for MWS; replace with real libs later
    return {
        "alg": Suite().version,
        "kem": Suite().kem,
        "aead": Suite().aead,
        "wraps": {"x25519": _b64(b"encap1"), "ml-kem": _b64(b"encap2")},
        "ct": _b64(b"ciphertext"),
        "key_version": 1,
    }
