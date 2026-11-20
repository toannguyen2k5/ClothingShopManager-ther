
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
from app.embedding_model import EmbeddingModel

app = FastAPI(
    title="Fashion Embedding Service",
    version="1.0.0"
)

embedding_model = EmbeddingModel()


class EmbeddingRequest(BaseModel):
    texts: list[str] = Field(min_length=1)


class EmbeddingResponse(BaseModel):
    model: str
    dimension: int
    embeddings: list[list[float]]


@app.get("/health")
def health():
    return {
        "status": "UP"
    }


@app.post("/embed", response_model=EmbeddingResponse)
def create_embeddings(request: EmbeddingRequest):

    try:
        embeddings = embedding_model.encode(
            request.texts
        )

        return EmbeddingResponse(
            model="BAAI/bge-m3",
            dimension=1024,
            embeddings=embeddings
        )

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )
