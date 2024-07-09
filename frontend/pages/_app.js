import { useEffect } from 'react'
import '@/styles/globals.scss'
import AuthContext, { AuthContextProvider } from '@/context/auth-context'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // 要document物件出現後才能導入bootstrap的js函式庫
    import('bootstrap/dist/js/bootstrap')
  }, [])

  // 使用自訂在頁面層級的版面(layout)
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <AuthContextProvider>
      {getLayout(<Component {...pageProps} />)}
    </AuthContextProvider>
  )
}
