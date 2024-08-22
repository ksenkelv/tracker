import axios from 'axios'
import { API_URL } from '../config'
import { ExpenseType } from '../types/ExpenseTypes'

const api = axios.create({
  baseURL: API_URL,
})

export const getExpenses = async (): Promise<ExpenseType[]> => {
  const response = await api.get('/expenses')
  return response.data
}