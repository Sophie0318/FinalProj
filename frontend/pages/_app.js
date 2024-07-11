import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import '@/styles/globals.scss'

const BootstrapClient = dynamic(() => import('@/components/bootstrap-client'), {
  ssr: false,
})

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // 要document物件出現後才能導入bootstrap的js函式庫
    import('bootstrap/dist/js/bootstrap')
  }, [])

  // 使用自訂在頁面層級的版面(layout)
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <>
      <BootstrapClient />
      <Component {...pageProps} />
    </>
  )
}
