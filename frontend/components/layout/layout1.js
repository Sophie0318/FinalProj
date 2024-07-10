import React from 'react'
import Navbar from '../common/navbar'
import Footer from '../common/footer/'
import Head from 'next/head'
import BackToTop from '../common/buttons/back-to-top'

export default function Layout1({ children, title = '' }) {
  return (
    <>
      <Head>
        <title>{title ? title : ''}</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
      <BackToTop />
    </>
  )
}
