import styles from './expensesDiagram.module.scss'
import { ExpenseType } from '../../types/ExpenseTypes'
import { CategoryType } from '../../types/CategoryTypes'
import DiagramItem from './diagram-item/DiagramItem'

type PropsType = {
  expenses: ExpenseType[]
  categories: CategoryType[]
}

export default function ExpensesDiagram({ expenses, categories }: PropsType) {

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0)

  const categoryData = categories.map((category) => {
    const categoryExpenses = expenses
      .filter(expense => expense.categoryId === category.id)
      .reduce((sum, expense) => sum + expense.amount, 0)

    const percentage = Math.round((categoryExpenses / totalExpenses) * 100)

    return {
      id: category.id,
      name: category.name,
      color: category.color,
      percentage: percentage,
    }
  })

  const filteredCategoryData = categoryData.filter(category => category.percentage > 0)

  return (
    <div className={ styles.diagramContainer }>
      <span data-testid='total-expenses' className={ styles.title }>Total Expenses: { totalExpenses }€</span>
      <div className={ styles.barContainer }>
        { filteredCategoryData.map((category) => (
          <DiagramItem key={ category.id } category={ category }/>
        )) }
      </div>
    </div>
  )
}
