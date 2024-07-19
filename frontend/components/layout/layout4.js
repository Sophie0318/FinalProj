import React from 'react'
import Navbar from '../common/navbar'
import Footer from '../common/footer'
import PageTitle from '../common/page-title'
import Head from 'next/head'
import BackToTop from '../common/buttons/back-to-top'
import styles from './layout3.module.css'

// 副標題要依照每個分支改的話可以輸入pageName
// index -> 首頁(預設)
// gyms -> 場館
// coaches -> 教練
// lessons -> 課程
// products -> 商城
// articles -> 文章
// users -> 會員

export default function Layout4({
  children,
  title = '',
  pageName = 'index',
  height = '229px',
  section = 'whiteSection',
}) {
  const sectionMap = {
    whiteSection: 'whiteSection',
    flatSection: 'flatSection',
  }

  const sectionResult = styles[sectionMap[section]] || styles.whiteSection

  return (
    <>
      <Head>
        <title>{title ? title : ''}</title>
      </Head>

      <div className={`d-flex flex-column`}>
        <div
          style={{
            height: '340px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ width: '100%', position: 'fixed', zIndex: '-1' }}>
            <Navbar />
            <PageTitle pageName={pageName} height={height} />
          </div>
        </div>

        <section className={sectionResult}>{children}</section>
      </div>
      <Footer />
      <BackToTop />
    </>
  )
}
