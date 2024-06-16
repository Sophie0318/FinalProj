import { useEffect } from 'react'
import '@/styles/globals.scss'
import DefaultLayout from '@/components/layout/default-layout'

export default function MyApp({ Component, pageProps }) {
  // document物件出現後才使用bootstrap js
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])

  // 使用自訂在頁面層級的版面(layout)
  const getLayout =
    Component.getLayout || ((page) => <DefaultLayout>page</DefaultLayout>)

  return getLayout(<Component {...pageProps} />)
}
