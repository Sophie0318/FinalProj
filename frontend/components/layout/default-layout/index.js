// import './default_layout.css'
import Navbar from './navbar'
import Footer from './footer'
import PageTitle from './page-title'

export default function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      <PageTitle />
      {children}
      <Footer />
    </>
  )
}
