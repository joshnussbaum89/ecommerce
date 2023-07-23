import Hamburger from '@/components/icons/Hamburger'
import SiteLogo from '@/components/global/SiteLogo/SiteLogo'
import Cart from '@/components/shop/Cart/Cart'
import styles from './Mobile.module.css'

export default function Mobile() {
  return (
    <div className={styles.wrapper}>
      <Hamburger />
      <SiteLogo />
      <Cart />
    </div>
  )
}
