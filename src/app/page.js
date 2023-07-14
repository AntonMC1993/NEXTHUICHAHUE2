import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/Header'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
     <h1>HELLO WORD !</h1>
    </main>
  )
}
