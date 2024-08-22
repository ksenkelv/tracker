import { ExpenseType } from '../types/ExpenseTypes'
import styles from './expenseOverview.module.scss'
import ExpensesDiagram from './diagram/ExpensesDiagram'
import CategoriesList from './categories/CategoriesList'
import { CategoryType } from '../types/CategoryTypes'

type PropsType = {
  expenses: ExpenseType[]
  categories: CategoryType[]
}

export default function ExpenseOverview({ expenses, categories }: PropsType) {

  return (
    <div className={ styles.overview }>

      <div className={ styles.listSection }>
        <CategoriesList categories={ categories } expenses={ expenses }/>
      </div>

      <div className={ styles.diagramSection }>
        <ExpensesDiagram categories={ categories } expenses={ expenses }/>
      </div>

    </div>
  )
}
