import React, { useEffect, useState } from 'react'
import Layout2 from '@/components/layout/layout2'

export default function AbList() {
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
      <Layout2 title="文章列表" pageName="articles">
        {articles.map((v, i) => {
          return (
            <div key={v.article_id} className="card" style={{ width: '18rem' }}>
              <img
                src={'http://localhost:3001/' + v.articleimg_name}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title">{v.article_title}</h3>
                <p className="card-text d-flex justify-content-between">
                  <span>{v.subtype}</span>
                  <span>{v.update_at}</span>
                </p>
              </div>
            </div>
          )
        })}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">title</th>
              <th scope="col">Category</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((v, i) => {
              return (
                <tr key={v.article_id}>
                  <td>{v.article_id}</td>
                  <td>{v.article_title}</td>
                  <td>{v.article_subtype}</td>
                  <td>{v.update_at}</td>
                  <td>{v.article_desc}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Layout2>
    </>
  )
}
