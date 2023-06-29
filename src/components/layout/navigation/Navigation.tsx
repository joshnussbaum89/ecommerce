import Mobile from './Mobile/Mobile'
import Desktop from './Desktop/Desktop'
import styles from './Navigation.module.css'

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Mobile />
      <Desktop />
    </nav>
  )
}
