from dataclasses import dataclass


@dataclass
class Expense:
    id: int
    amount: float
    categoryId: int


@dataclass
class Category:
    id: int
    name: str
    color: str
