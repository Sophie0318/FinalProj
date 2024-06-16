import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'

export default function DefaultLayout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React Practice Project</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
