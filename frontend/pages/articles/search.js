import React from 'react'
import Layout3 from '@/components/layout/layout3'
import styles from './type.module.css'

const articleList = Array(12).fill(1)

export default function ArticleType() {
  return (
    <>
      <Layout3 title="搜尋文章" pageName="articles">
        <section className={styles.padding80}>
          <div className="container-fluid p-0">
            <div className="row px-0 mx-0">
              <div
                className={`${styles.titleRow} col-12 d-flex justify-content-between align-items-center`}
              >
                <h4 className="text-primary">關於“搜尋結果”的文章...</h4>
                <div
                  style={{
                    backgroundColor: '#bbb',
                    height: '60px',
                    width: '351px',
                    borderRadius: '50px',
                  }}
                >
                  searchbar
                </div>
              </div>
              {articleList.map((v, i) => {
                return (
                  <div
                    className={`${styles.card} col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12`}
                    key={i}
                  >
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        backgroundColor: '#bbb',
                        height: '392px',
                        width: '100%',
                        borderRadius: '40px',
                      }}
                    >
                      {v}
                    </div>
                  </div>
                )
              })}
              <div
                className={`${styles.page} col-12 d-flex justify-content-center`}
              >
                <div
                  style={{
                    backgroundColor: '#bbb',
                    height: '50px',
                    width: '370px',
                  }}
                >
                  pagination
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout3>
    </>
  )
}
