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
          <div className={styles.filter}>
            <p className={styles.select}>請選擇類別 ｜</p>
            <div class={styles.checkboxes}>
              <input
                type="checkbox"
                id="male"
                name="sex"
                className={styles.checkbox}
              />
              <label htmlFor="male">男性</label>
            </div>

            <div class={styles.checkboxes}>
              <input
                type="checkbox"
                id="female"
                name="female"
                className={styles.checkbox}
              />
              <label htmlFor="female">女性</label>
            </div>

            <div class={styles.checkboxes}>
              <input
                type="checkbox"
                id="homo"
                name="homo"
                className={styles.checkbox}
              />
              <label htmlFor="homo">同性</label>
            </div>

            <div class={styles.checkboxes}>
              <input
                type="checkbox"
                id="other"
                name="other"
                className={styles.checkbox}
              />
              <label htmlFor="other">其他</label>
            </div>
          </div>
          <div className={styles.result}>
            <p className={styles.result_title}>篩選結果</p>
            <div className={styles.cards}>
              <div className={styles.lessonCard}>
                <img
                  src="/course4.jpg"
                  alt="描述圖片內容"
                  className={styles.img}
                />
                <div className={styles.lessonName}>
                  <div className={styles.lessonTitle}>阿罵武術</div>
                  <div className={styles.lessonTitle}>NT.900</div>
                </div>
                <div className={styles.lessonInfo}>
                  <div>有氧/伸展</div>
                  <div>超派健身房</div>
                </div>
              </div>
              <div className={styles.lessonCard}>
                <img
                  src="/course4.jpg"
                  alt="描述圖片內容"
                  className={styles.img}
                />
                <div className={styles.lessonName}>
                  <div className={styles.lessonTitle}>阿罵武術</div>
                  <div className={styles.lessonTitle}>NT.900</div>
                </div>
                <div className={styles.lessonInfo}>
                  <div>有氧/伸展</div>
                  <div>超派健身房</div>
                </div>
              </div>{' '}
              <div className={styles.lessonCard}>
                <img
                  src="/course4.jpg"
                  alt="描述圖片內容"
                  className={styles.img}
                />
                <div className={styles.lessonName}>
                  <div className={styles.lessonTitle}>阿罵武術</div>
                  <div className={styles.lessonTitle}>NT.900</div>
                </div>
                <div className={styles.lessonInfo}>
                  <div>有氧/伸展</div>
                  <div>超派健身房</div>
                </div>
              </div>{' '}
              <div className={styles.lessonCard}>
                <img
                  src="/course4.jpg"
                  alt="描述圖片內容"
                  className={styles.img}
                />
                <div className={styles.lessonName}>
                  <div className={styles.lessonTitle}>阿罵武術</div>
                  <div className={styles.lessonTitle}>NT.900</div>
                </div>
                <div className={styles.lessonInfo}>
                  <div>有氧/伸展</div>
                  <div>超派健身房</div>
                </div>
              </div>{' '}
              <div className={styles.lessonCard}>
                <img
                  src="/course4.jpg"
                  alt="描述圖片內容"
                  className={styles.img}
                />
                <div className={styles.lessonName}>
                  <div className={styles.lessonTitle}>阿罵武術</div>
                  <div className={styles.lessonTitle}>NT.900</div>
                </div>
                <div className={styles.lessonInfo}>
                  <div>有氧/伸展</div>
                  <div>超派健身房</div>
                </div>
              </div>{' '}
              <div className={styles.lessonCard}>
                <img
                  src="/course4.jpg"
                  alt="描述圖片內容"
                  className={styles.img}
                />
                <div className={styles.lessonName}>
                  <div className={styles.lessonTitle}>阿罵武術</div>
                  <div className={styles.lessonTitle}>NT.900</div>
                </div>
                <div className={styles.lessonInfo}>
                  <div>有氧/伸展</div>
                  <div>超派健身房</div>
                </div>
              </div>{' '}
              <div className={styles.lessonCard}>
                <img
                  src="/course4.jpg"
                  alt="描述圖片內容"
                  className={styles.img}
                />
                <div className={styles.lessonName}>
                  <div className={styles.lessonTitle}>阿罵武術</div>
                  <div className={styles.lessonTitle}>NT.900</div>
                </div>
                <div className={styles.lessonInfo}>
                  <div>有氧/伸展</div>
                  <div>超派健身房</div>
                </div>
              </div>
              <div className={styles.lessonCard}>
                <img
                  src="/course4.jpg"
                  alt="描述圖片內容"
                  className={styles.img}
                />
                <div className={styles.lessonName}>
                  <div className={styles.lessonTitle}>阿罵武術</div>
                  <div className={styles.lessonTitle}>NT.900</div>
                </div>
                <div className={styles.lessonInfo}>
                  <div>有氧/伸展</div>
                  <div>超派健身房</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout2>
    </>
  )
}
