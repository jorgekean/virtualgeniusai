import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import News from '@/components/News'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>All about AI</title>
        <meta name="description" content="Artificial Intelligence" />
        <meta name="description" content="AI News" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <News></News>
      </main>
    </>
  )
}
