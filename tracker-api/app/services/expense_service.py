from typing import List
from app.models import Expense

expenses_data = [
    Expense(id=1, amount=400, categoryId=1),
    Expense(id=2, amount=250, categoryId=2),
    Expense(id=3, amount=150, categoryId=3),
    Expense(id=4, amount=50, categoryId=2),
    Expense(id=5, amount=20, categoryId=3),
    Expense(id=6, amount=600, categoryId=1),
    Expense(id=7, amount=800, categoryId=4),
    Expense(id=8, amount=300, categoryId=5),
    Expense(id=9, amount=50, categoryId=6),
]


def get_expenses() -> List[Expense]:
    return expenses_data
