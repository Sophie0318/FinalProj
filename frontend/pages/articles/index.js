import React, { useEffect, useState } from 'react'
import Layout3 from '@/components/layout/layout3'
import SearchSection from '@/components/articles/search-section'
import SwiperCarousel from '@/components/swiperCarousel'
import Link from 'next/link'
import styles from './articles.module.css'

export default function Articles() {
  const [articles, setArticles] = useState([])

  // useEffect(() => {
  //   fetch('http://localhost:3001/articles/api')
  //     .then((r) => r.json())
  //     .then((data) => {
  //       setArticles(data.rows)
  //     })
  // }, [])

  return (
    <>
      <Layout3
        title="文章列表"
        pageName="articles"
        height="179px"
        section="flatSection"
      >
        <section>
          <div className={`${styles.articleTypes}`}>
            <div className={`${styles.typeGrid}`}>
              <Link href="/articles/category/fitness">
                <h3>體能鍛鍊</h3>
              </Link>
            </div>
            <div className={`${styles.typeGrid}`}>
              <Link href="/articles/category/healthy_diet">
                <h3>健康飲食</h3>
              </Link>
            </div>
            <div className={`${styles.typeGrid}`}>
              <Link href="/articles/category/medical_care">
                <h3>醫療保健</h3>
              </Link>
            </div>
            <div className={`${styles.typeGrid}`}>
              <Link href="/articles/category/mental_wellness">
                <h3>心靈健康</h3>
              </Link>
            </div>
            <div className={`${styles.typeGrid}`}>
              <Link href="/articles/category/happy_learning">
                <h3>熟齡學習</h3>
              </Link>
            </div>
          </div>
        </section>

        <section className={`${styles.latest}`}>
          <div className="row px-0 mx-0 g-0">
            <div className="col-md-3 d-flex justify-content-md-end justify-content-center align-items-center">
              <h3 className="my-0">最新文章</h3>
            </div>
            <div className="col-md-9 ps-3">
              <SwiperCarousel />
            </div>
          </div>
        </section>

        <section className={`${styles.popular}`}>
          <div className="row px-0 mx-0 g-0">
            <div className="col-md-3 d-flex justify-content-md-end justify-content-center align-items-center">
              <h3 className="my-0">熱門文章</h3>
            </div>
            <div className="col-md-9 ps-3">
              <SwiperCarousel />
            </div>
          </div>
        </section>

        <SearchSection />
      </Layout3>
    </>
  )
}
