import styles from './categoriesList.module.scss'
import { ExpenseType } from '../../types/ExpenseTypes'
import CategoryItem from './category-item/CategoryItem'
import { CategoryType } from '../../types/CategoryTypes'

type PropsType = {
  expenses: ExpenseType[]
  categories: CategoryType[]
}

export default function CategoriesList({ expenses, categories }: PropsType) {

  const categoriesData = categories.map((category) => {

    const totalAmount = expenses
      .filter((expense) => expense.categoryId === category.id)
      .reduce((sum, expense) => sum + expense.amount, 0)

    return {
      id: category.id,
      name: category.name,
      color: category.color,
      totalAmount,
    }
  })

  return (
    <div className={ styles.listContainer }>
      { categoriesData.map((categoryData) => (
          <CategoryItem key={ categoryData.id } categoryData={ categoryData }/>
      )) }
    </div>
  )
}
