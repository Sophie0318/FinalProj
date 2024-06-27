import React, { useEffect, useState } from 'react'
import Layout2 from '@/components/layout/layout2'
import Carousel from '@/components/carousel'
import styles from '@/styles/lesson.module.css'

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
            <div class="searchIcon">
              <ion-icon name="search" class="search_icon"></ion-icon>
            </div>
            <input type="text" name="search" class="search_input" />
          </div>
        </div>
      </Layout2>
    </>
  )
}
