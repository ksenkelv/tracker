import { DiagramItemData } from '../../../types/CategoryTypes'
import styles from './diagramItem.module.scss'

type PropsType = {
  category: DiagramItemData
}

export default function DiagramItem({ category }: PropsType) {

  return (
    <div
      key={ category.id }
      className={ styles.bar }
      data-testid='diagram-bar'
      style={ {
        backgroundColor: category.color,
        width: `${ category.percentage }%`,
      } }
    >
      { category.percentage > 2 && (
        <span data-testid='bar-percentage' className={ styles.barPercentage }>{ category.percentage }%</span>
      )}
    </div>
  )
}
