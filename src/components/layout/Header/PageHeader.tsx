import styles from './PageHeader.module.css'

export default function PageHeader({ title }: { title: string }) {
  return (
    <div className={styles.header}>
      <h1>{title}</h1>
    </div>
  )
}
