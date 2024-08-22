import React from 'react'
import { render, screen } from '@testing-library/react'
import DiagramItem from '../diagram/diagram-item/DiagramItem'
import { DiagramItemData } from '../../types/CategoryTypes'

describe('DiagramItem', () => {
  const stubDiagramItemData: DiagramItemData = {
    id: 1, name: 'Food', color: '#ff0000', percentage: 50
  }

  test('renders diagram item with correct width and color', () => {
    render(<DiagramItem category={ stubDiagramItemData }/>)

    const barElement = screen.getByTestId('diagram-bar')
    expect(barElement).toHaveStyle(`background-color: ${ stubDiagramItemData.color }`)
    expect(barElement).toHaveStyle(`width: ${ stubDiagramItemData.percentage }%`)
  })

  test('renders percentage when greater than 2%', () => {
    render(<DiagramItem category={ stubDiagramItemData }/>)

    const barPercentage = screen.getByTestId('bar-percentage')
    expect(barPercentage).toHaveTextContent('50%')
  })

  test('does not render percentage when less than or equal to 2%', () => {
    render(<DiagramItem category={ { ...stubDiagramItemData, percentage: 2 } }/>)

    const barPercentage = screen.queryByTestId('bar-percentage')
    expect(barPercentage).toBeNull()
  })
})
