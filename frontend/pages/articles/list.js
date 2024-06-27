import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout2 from '@/components/layout/layout2'
import Link from 'next/link'
import styles from './articles.module.css'

export default function AbList() {
  const router = useRouter()
  const [articles, setArticles] = useState({
    success: false,
    rows: [],
  })

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    fetch(
      `http://localhost:3001/articles/api?${new URLSearchParams(router.query)}`,
      { signal }
    )
      .then((r) => r.json())
      .then((data) => {
        setArticles(data)
      })
      .catch((ex) => {
        console.log(`fetch-ex: ${ex}`)
      })
    return () => {
      controller.abort() // 取消未完成的 ajax, 這樣有延遲且使用者急著點其他頁面時會取消之前的AJAX,並執行新的AJAX
    }
  }, [router])

  if (!router.isReady || !articles.success) return null
  return (
    <>
      <Layout2 title="文章列表" pageName="articles">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <Link href={`?page=${articles.page - 1}`} className="page-link">
                Previous
              </Link>
            </li>

            {Array(11)
              .fill(1)
              .map((v, i) => {
                const p = articles.page - 5 + i
                if (p < 1 || p > articles.totalPages) return null
                return (
                  <li
                    key={p}
                    className={
                      articles.page === p ? `page-item active` : `page-item`
                    }
                  >
                    <Link href={`?page=${p}`} className="page-link">
                      {p}
                    </Link>
                  </li>
                )
              })}

            <li className="page-item">
              <Link href={`?page=${articles.page + 1}`} className="page-link">
                Next
              </Link>
            </li>
          </ul>
        </nav>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">title</th>
              <th scope="col">Category</th>
              <th scope="col">Last update</th>
            </tr>
          </thead>
          <tbody>
            {articles.rows.map((v, i) => {
              return (
                <tr key={v.article_id}>
                  <td>{v.article_id}</td>
                  <td className="row">
                    <div className="col-2">
                      <img
                        className={styles.cardImg}
                        src={`http://localhost:3001/${v.articleimg_name}`}
                      />
                    </div>
                    <div className="col-10">{v.article_title}</div>
                  </td>
                  <td>{v.subtype}</td>
                  <td>{v.update_at}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Layout2>
    </>
  )
}
