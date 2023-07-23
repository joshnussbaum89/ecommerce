import CollectionCard from '@/components/layout/cards/Collection/Collection'
import styles from './Collection.module.css'

// TODO: finish styling + content rendering logic
export default function CollectionContainer() {
  return (
    <div className={styles.collection}>
      <CollectionCard src="/mark-II-headphones.png" />
      <CollectionCard src="/mark-II-headphones.png" />
      <CollectionCard src="/mark-II-headphones.png" />
    </div>
  )
}
