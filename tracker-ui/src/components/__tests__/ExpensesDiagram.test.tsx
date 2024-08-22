import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ExpensesDiagram from '../diagram/ExpensesDiagram'
import { ExpenseType } from '../../types/ExpenseTypes'
import { CategoryType } from '../../types/CategoryTypes'

describe('ExpensesDiagram', () => {

  const stubExpenses: ExpenseType[] = [
    { id: 1, amount: 400, categoryId: 1 },
    { id: 2, amount: 250, categoryId: 2 }
  ]

  const stubCategories: CategoryType[] = [
    { id: 1, name: 'Food', color: 'red' },
    { id: 2, name: 'Entertainment', color: 'blue' }
  ]

  test('renders total expenses', () => {
    render(<ExpensesDiagram expenses={ stubExpenses } categories={ stubCategories }/>)

    const totalExpensesElement = screen.getByTestId('total-expenses')
    expect(totalExpensesElement).toHaveTextContent('650€')
  })

  test('renders correctly with no expenses', () => {
    render(<ExpensesDiagram expenses={ [] } categories={ stubCategories }/>)

    const totalExpensesElement = screen.getByTestId('total-expenses')
    expect(totalExpensesElement).toHaveTextContent('0€')
  })

  test('renders correctly with edge case amounts', () => {
    const edgeCaseExpenses: ExpenseType[] = [
      { id: 1, amount: 0, categoryId: 1 },
      { id: 2, amount: 999999, categoryId: 2 },
    ]

    render(<ExpensesDiagram expenses={ edgeCaseExpenses } categories={ stubCategories }/>)
    const totalExpensesElement = screen.getByTestId('total-expenses')
    expect(totalExpensesElement).toHaveTextContent('999999€')
  })
})
