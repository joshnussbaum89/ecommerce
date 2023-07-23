import Image from 'next/image'
import Link from 'next/link'
import ArrowRight from '@/components/icons/ArrowRight'
import styles from './Collection.module.css'

export default function CollectionCard({ src }: { src: string }) {
  return (
    <article className={styles.collection}>
      <Image src={src} alt="an image" width={150} height={150} />
      <div className={styles.info}>
        <h3>Headphones</h3>
        <Link href="/">
          Shop <ArrowRight />
        </Link>
      </div>
    </article>
  )
}
