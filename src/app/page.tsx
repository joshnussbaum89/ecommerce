import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

export default function HomePage() {
  return (
    <div className={styles.hero}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p>new product</p>
          <h2>xx99 mark ii headphones</h2>
          <p>
            Experience natural, lifelike audio and exceptional build quality made for the passionate
            music enthusiast.
          </p>
          <Link href="/">see product</Link>
        </div>
        <Image
          src={`/mark-II-headphones.png`}
          alt="xx99 mark ii headphones"
          width={1000}
          height={1000}
          quality={100}
          className={styles.image}
        />
      </div>
    </div>
  )
}
