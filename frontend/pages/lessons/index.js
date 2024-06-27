import React, { useEffect, useState } from 'react'
import Layout2 from '@/components/layout/layout2'

export default function Index() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/articles/api')
      .then((r) => r.json())
      .then((data) => {
        setArticles(data.rows)
      })
  }, [])
  return (
    <>
      <Layout2 title="課程列表" pageName="lessons">
        123
      </Layout2>
    </>
  )
}
