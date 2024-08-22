import React from 'react'
import { render, screen } from '@testing-library/react'
import CategoryItem from '../categories/category-item/CategoryItem'
import { CategoryItemData } from '../../types/CategoryTypes'

describe('CategoryItem', () => {
  const stubCategoryItemData: CategoryItemData = {
    id: 1, name: 'Food', color: '#ff0000', totalAmount: 150
  }

  test('renders category color correctly', () => {
    render(<CategoryItem categoryData={stubCategoryItemData} />)

    const colorElement = screen.getByTestId('category-color')
    expect(colorElement).toHaveStyle(`background-color: ${stubCategoryItemData.color}`)
  })

  test('renders category name', () => {
    render(<CategoryItem categoryData={stubCategoryItemData} />)

    const nameElement = screen.getByTestId('category-name')
    expect(nameElement).toHaveTextContent('Food')
  })

  test('renders category total amount', () => {
    render(<CategoryItem categoryData={stubCategoryItemData} />)

    const amountElement = screen.getByTestId('category-amount')
    expect(amountElement).toHaveTextContent('150€')
  })

})
