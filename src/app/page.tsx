'use client'

import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.no}>No.</h1>
      <h2 className={styles.part}>Monorail v1 Imports: {monorailv1}</h2>
      <h2 className={styles.part}>Monorail v2 Imports: {monorailv2}</h2>
      <h2 className={styles.part}>Monoblocks Imports: {monoblocks}</h2>
      <h2 className={styles.part}>Monorail v3 Imports: {monorailv3}</h2>
      <h3 className={styles.total}>
        Total 🚀
        <pre>{(percentage * 100).toFixed(2)} %</pre>
      </h3>
    </main>
  )
}

const monorailv1 = 2639
const monorailv2 = 1242
const monoblocks = 592
const monorailv3 = 328

const percentage =
  monorailv3 / (monorailv1 + monorailv2 + monoblocks + monorailv3)
