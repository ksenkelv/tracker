import axios from 'axios'
import { API_URL } from '../config'
import { CategoryType } from '../types/CategoryTypes'

const api = axios.create({
  baseURL: API_URL,
})

export const getCategories = async (): Promise<CategoryType[]> => {
  const response = await api.get('/categories')
  return response.data
}