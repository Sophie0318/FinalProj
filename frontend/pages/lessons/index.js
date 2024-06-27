import React, { useEffect, useState } from 'react'
import Layout2 from '@/components/layout/layout2'
import Carousel from '@/components/carousel'
import styles from '@/styles/lesson.module.css'
import { IoSearch } from 'react-icons/io5'

export default function Index() {
  // const [articles, setArticles] = useState([])

  // useEffect(() => {
  //   fetch('http://localhost:3001/articles/api')
  //     .then((r) => r.json())
  //     .then((data) => {
  //       setArticles(data.rows)
  //     })
  // }, [])
  return (
    <>
      <Layout2 title="課程列表" pageName="lessons">
        <div className={styles.content}>
          <div className={styles.popularCard}>
            <section className="popular lessons">
              <div className="row">
                <Carousel carouselTitle="熱門課程" />
              </div>
              <div className="row">
                <div className="col d-flex justify-content-center">
                  <button className="btn btn-lg btn-primary text-white h4-font rounded-pill">
                    找課程
                  </button>
                </div>
              </div>
            </section>
          </div>
          <div className={styles.search}>
            <div className={styles.searchIcon}>
              <IoSearch />
            </div>
            <input
              type="text"
              name="search_input"
              className={styles.search_input}
              placeholder="請輸入地址搜尋..."
            />
          </div>
        </div>
      </Layout2>
    </>
  )
}
