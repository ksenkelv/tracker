from typing import List
from app.models import Category

categories_data = [
    Category(id=1, name='Groceries', color='#55ffc0'),
    Category(id=2, name='Restaurant', color='#ff66cd'),
    Category(id=3, name='Cafe', color='#f5ae62'),
    Category(id=4, name='Travelling', color='#698cff'),
    Category(id=5, name='Apartment', color='#c873ff'),
    Category(id=6, name='Other', color='#c5c5c5'),
]


def get_categories() -> List[Category]:
    return categories_data
