import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/mantertius-logo (4)/vector/default-monochrome-white.svg'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>mantertius</title>
        <meta name="description" content="My first website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <a className={'justify-items-center'} href='http://github.com/mantertius'>
      
      <Image src={logo} alt={'logo'} className={'flex justify-items-center h-screen'} style={{ width:'50vw', height:'100vw'}}
      /></a>

      <footer className={styles.footer}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch out! Site under construction 🚧👷🏻‍♂️
          <span className={styles.logo}>

          </span>
        </a>
      </footer>
    </div>
  )
}
