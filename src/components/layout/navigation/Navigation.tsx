import Link from 'next/link'
import Cart from '@/components/shop/cart/Cart'
import styles from './Navigation.module.css'

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.wrapper}>
        <h1>
          <Link href="/">audiophile</Link>
        </h1>
        <ul>
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/headphones">headphones</Link>
          </li>
          <li>
            <Link href="/speakers">speakers</Link>
          </li>
          <li>
            <Link href="/earphones">earphones</Link>
          </li>
        </ul>
        <Cart />
      </div>
    </nav>
  )
}
