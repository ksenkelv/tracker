import React, { useEffect, useState } from 'react'
import './App.css'
import ExpenseOverview from './components/ExpenseOverview'
import { ExpenseType } from './types/ExpenseTypes'
import { CategoryType } from './types/CategoryTypes'
import { getCategories } from './services/categoriesService'
import { getExpenses } from './services/expensesService'

function App() {
  const [expenses, setExpenses] = useState<ExpenseType[]>([])
  const [categories, setCategories] = useState<CategoryType[]>([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getCategories()
        setCategories(categoriesData)
      } catch (error) {
        console.error('Failed to fetch categories', error)
      }
    }

    const fetchExpenses = async () => {
      try {
        const expensesData = await getExpenses()
        setExpenses(expensesData)
      } catch (error) {
        console.error('Failed to fetch expenses', error)
      }
    }

    fetchCategories()
    fetchExpenses()
  }, [])

  return (
    <div style={ { width: '100%' } }>
      <ExpenseOverview expenses={ expenses } categories={ categories }/>
    </div>
  )
}

export default App
