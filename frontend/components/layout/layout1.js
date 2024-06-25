// import './default_layout.css'
import Navbar from '../common/navbar'
import Footer from '../common/footer'
import Head from 'next/head'

export default function Layout1({ children, title = '' }) {
  return (
    <>
      <Head>
        <title>{title ? title : ''}</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
