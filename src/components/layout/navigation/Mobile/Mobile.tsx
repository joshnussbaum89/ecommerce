import Hamburger from '@/components/Icons/Hamburger'
import SiteLogo from '@/components/Global/SiteLogo/SiteLogo'
import Cart from '@/components/Shop/Cart/Cart'
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
