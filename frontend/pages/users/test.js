import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function ProductList() {
  const router = useRouter()
  const [data, setData] = useState({
    success: false,
    rows: [],
  })

  const [page, setPage] = useState(1) // 目前第幾頁
  const [perPage, setPerPage] = useState(10) // 每頁幾筆資料

  //用useEffect去抓(fetch)後端的資料
  useEffect(() => {
    // const pathname = router.pathname
    // const pathParts = pathname.split('/')

    console.log(router)

    fetch('http://localhost:3001/users')
      .then((r) => r.json())
      .then((myData) => {
        console.log(myData)
        setData({ success: true, rows: myData })
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [router])

  return (
    <div>
      <h1>test</h1>
      {data.success ? (
        <ul>
          {data.rows.map((row) => (
            <li key={row.id}>{row.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
