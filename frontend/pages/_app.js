import { useEffect } from 'react'
import '@/styles/globals.scss'
import { CartProvider } from '@/hooks/product/use-cart'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // 要document物件出現後才能導入bootstrap的js函式庫
    import('bootstrap/dist/js/bootstrap')
  }, [])

  // 使用自訂在頁面層級的版面(layout)
  const getLayout = Component.getLayout || ((page) => page)

  return <CartProvider> {getLayout(<Component {...pageProps} />)}</CartProvider>
}
