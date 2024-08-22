import styles from './categoryItem.module.scss'
import { CategoryItemData } from '../../../types/CategoryTypes'

type PropsType = {
  categoryData: CategoryItemData
}

export default function CategoryItem({ categoryData }: PropsType) {

  return (
    <div className={ styles.categoryItem }>
      <div data-testid='category-color' className={ styles.categoryColor } style={ { backgroundColor: categoryData.color } }></div>
      <h3 data-testid='category-name' className={ styles.categoryName }>{ categoryData.name }</h3>
      <p data-testid='category-amount' className={ styles.categoryTotal }>-{ categoryData.totalAmount }€</p>
    </div>
  )
}
