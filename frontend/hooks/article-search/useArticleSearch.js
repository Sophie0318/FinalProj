import { useState } from 'react'
import { useRouter } from 'next/router'

export default function useArticleSearch() {
  const [keyword, setKeyword] = useState('')
  const router = useRouter()
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && keyword) {
      router.push({
        pathname: '/articles/search',
        query: { keyword: keyword },
      })
    }
  }
  return { keyword, setKeyword, handleKeyDown }
}
