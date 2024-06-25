// import './default_layout.css'
import Navbar from '../common/navbar'
import Footer from '../common/footer'
import PageTitle from '../common/page-title'
import Head from 'next/head'

export default function Layout2({ children, title = '', pageName = 'index' }) {
  return (
    <>
      <Head>
        <title>{title ? title : ''}</title>
      </Head>
      <Navbar />
      <PageTitle pageName={pageName} />
      {children}
      <Footer />
    </>
  )
}
