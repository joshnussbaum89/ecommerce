import Link from 'next/link'
import Logo from '@/components/icons/Logo'
import styles from './SiteLogo.module.css'

export default function SiteLogo() {
  return (
    <Link className={styles.logo} href="/">
      <Logo />
    </Link>
  )
}
