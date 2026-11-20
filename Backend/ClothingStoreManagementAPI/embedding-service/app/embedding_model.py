
from sentence_transformers import SentenceTransformer


class EmbeddingModel:

    def __init__(self):
        self.model_name = "BAAI/bge-m3"

        print(f"Loading embedding model: {self.model_name}")

        self.model = SentenceTransformer(
            self.model_name
        )

        print("Embedding model loaded successfully!")

    def encode(self, texts: list[str]) -> list[list[float]]:

        if not texts:
            return []

        embeddings = self.model.encode(
            texts,
            normalize_embeddings=True,
            convert_to_numpy=True
        )

        return embeddings.tolist()
