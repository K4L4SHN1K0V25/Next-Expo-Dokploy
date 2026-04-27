from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/productos")
async def get_productos():
    # Eliminamos el modelo por un momento para probar
    return [
        {"id": 1, "nombre": "Coca Cola", "precio": 18.5, "stock": 10, "categoria": "Bebidas"},
        {"id": 2, "nombre": "Papas", "precio": 17.0, "stock": 5, "categoria": "Botanas"}
    ]