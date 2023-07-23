'use client'

import CartIcon from '@/components/icons/Cart'
import styles from './Cart.module.css'

export default function Cart() {
  const openCart = () => alert('open cart')

  return (
    <button className={styles.button} aria-label="Open cart" onClick={openCart}>
      <CartIcon />
    </button>
  )
}
