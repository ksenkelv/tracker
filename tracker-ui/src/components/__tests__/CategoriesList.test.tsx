import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CategoriesList from '../categories/CategoriesList'
import { ExpenseType } from '../../types/ExpenseTypes'
import { CategoryType } from '../../types/CategoryTypes'

jest.mock('../categories/category-item/CategoryItem', () => ({ categoryData }: any) => (
  <div data-testid={ `category-item-${ categoryData.id }` }></div>
))

describe('CategoriesList component', () => {

  const stubExpenses: ExpenseType[] = [
    { id: 1, amount: 400, categoryId: 1 },
    { id: 2, amount: 250, categoryId: 2 }
  ]

  const stubCategories: CategoryType[] = [
    { id: 1, name: 'Food', color: 'red' },
    { id: 2, name: 'Entertainment', color: 'blue' }
  ]

  test('renders correct number of items', () => {
    render(<CategoriesList expenses={ stubExpenses } categories={ stubCategories }/>)

    stubCategories.forEach(category => {
      const itemElement = screen.getByTestId(`category-item-${ category.id }`)
      expect(itemElement).toBeInTheDocument()
    })
  })
})
