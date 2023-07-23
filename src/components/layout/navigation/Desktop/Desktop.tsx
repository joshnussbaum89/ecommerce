import Link from 'next/link'
import SiteLogo from '@/components/global/SiteLogo/SiteLogo'
import Cart from '@/components/shop/Cart/Cart'
import styles from './Desktop.module.css'

export default function Desktop() {
  return (
    <div className={styles.wrapper}>
      <SiteLogo />
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
  )
}
