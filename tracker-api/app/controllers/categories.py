from fastapi import APIRouter
from typing import List
from app.services.category_service import get_categories
from app.models import Category

router = APIRouter()


@router.get("/categories", response_model=List[Category])
def read_categories():
    return get_categories()
