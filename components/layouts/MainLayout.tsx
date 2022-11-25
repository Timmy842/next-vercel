import Head from 'next/head'
import { FC } from 'react'

import styles from './MainLayouts.module.css'
import { Navbar } from '../Navbar'

type Props = {
  children: React.ReactNode
}

export const MainLayout: FC <Props> = ({ children }) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Home - Carlos</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar />
    
          <main className={styles.main}>
    
            { children }
    
          </main>
        </div>
      )
}
