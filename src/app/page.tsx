'use client'

import { MonorailChart } from '@/components/Chart'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.no}>No.</h1>
      <MonorailChart />
    </main>
  )
}
