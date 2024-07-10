import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../common/navbar'
import Footer from '../common/footer/'
import Head from 'next/head'
import BackToTop from '../common/buttons/back-to-top'

export default function Layout1({ children, title = '' }) {
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
      {children}
      <Footer />
      <BackToTop showBtn={showBtn} hasScrolled={hasScrolled} />
    </>
  )
}
