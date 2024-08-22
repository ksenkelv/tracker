from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.controllers import expenses, categories

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(expenses.router)
app.include_router(categories.router)
