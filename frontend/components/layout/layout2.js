import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../common/navbar'
import Footer from '../common/footer'
import PageTitle from '../common/page-title'
import Head from 'next/head'
import BackToTop from '../common/buttons/back-to-top'

// 副標題要依照每個分支改的話可以輸入pageName
// index -> 首頁(預設)
// gyms -> 場館
// coaches -> 教練
// lessons -> 課程
// products -> 商城
// articles -> 文章
// users -> 會員

export default function Layout2({
  children,
  title = '',
  pageName = 'index',
  height = '',
}) {
  // 給 BackToTop 按鈕用的
  const router = useRouter()
  const [showBtn, setShowBtn] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  // 監聽頁面滾動, 距離top>100px就顯示BacktoTop
  useEffect(() => {
    if (router.isReady) {
      const handleScroll = () => {
        if (!hasScrolled) {
          setHasScrolled(true)
        }
        if (window.scrollY > 100) {
          setShowBtn(true)
        } else {
          setShowBtn(false)
        }
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [router.isReady, hasScrolled])

  return (
    <>
      <Head>
        <title>{title ? title : ''}</title>
      </Head>
      <Navbar />
      <PageTitle pageName={pageName} height={height} />
      {children}
      <Footer />
      <BackToTop showBtn={showBtn} hasScrolled={hasScrolled} />
    </>
  )
}
