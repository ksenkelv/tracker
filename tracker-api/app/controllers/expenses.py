from fastapi import APIRouter
from typing import List
from app.services.expense_service import get_expenses
from app.models import Expense

router = APIRouter()


@router.get("/expenses", response_model=List[Expense])
def read_expenses():
    return get_expenses()