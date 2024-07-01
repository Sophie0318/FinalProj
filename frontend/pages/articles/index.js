import React, { useEffect, useState } from 'react'
import Layout2 from '@/components/layout/layout2'
import Carousel from '@/components/carousel'
import Link from 'next/link'
import styles from './articles.module.css'

export default function Articles() {
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
        <section>
          <div className={`${styles.articleTypes}`}>
            <div className={`${styles.typeGrid}`}>
              <Link href="/">
                <h3>體能鍛鍊</h3>
              </Link>
            </div>
            <div className={`${styles.typeGrid}`}>
              <Link href="/">
                <h3>健康飲食</h3>
              </Link>
            </div>
            <div className={`${styles.typeGrid}`}>
              <Link href="/">
                <h3>醫療保健</h3>
              </Link>
            </div>
            <div className={`${styles.typeGrid}`}>
              <Link href="/">
                <h3>心靈健康</h3>
              </Link>
            </div>
            <div className={`${styles.typeGrid}`}>
              <Link href="/">
                <h3>熟齡學習</h3>
              </Link>
            </div>
          </div>
        </section>

        <section className={`${styles.latest}`}>
          <Carousel carouselTitle="最新文章" />
        </section>

        <section className={`${styles.popular}`}>
          <Carousel carouselTitle="熱門文章" />
        </section>

        <section className={`${styles.search}`}>
          <div className="container fixed-960">
            <div className="row flex-column justify-content-center align-items-center px-0 mx-0">
              <h4>找其他文章</h4>
              <div
                style={{
                  backgroundColor: '#bbb',
                  borderRadius: '50px',
                  maxWidth: '960px',
                  height: '60px',
                  marginBottom: '16px',
                }}
              >
                searchbar placeholder
              </div>
            </div>
          </div>
        </section>
      </Layout2>
    </>
  )
}
