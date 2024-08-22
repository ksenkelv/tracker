import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ExpenseOverview from '../ExpenseOverview'
import { ExpenseType } from '../../types/ExpenseTypes'
import { CategoryType } from '../../types/CategoryTypes'

jest.mock('../categories/CategoriesList', () => () => <div data-testid='categories-list'></div>)
jest.mock('../diagram/ExpensesDiagram', () => () => <div data-testid='expenses-diagram'></div>)

describe('ExpenseOverview component', () => {

  const stubCategories: CategoryType[] = []

  const stubExpenses: ExpenseType[] = []

  test('renders CategoriesList component', () => {
    render(<ExpenseOverview expenses={stubExpenses} categories={stubCategories} />)

    const diagramElement = screen.getByTestId('categories-list')
    expect(diagramElement).toBeInTheDocument()
  })

  test('renders ExpensesDiagram component', () => {
    render(<ExpenseOverview expenses={stubExpenses} categories={stubCategories} />)

    const diagramElement = screen.getByTestId('expenses-diagram')
    expect(diagramElement).toBeInTheDocument()
  })
})
