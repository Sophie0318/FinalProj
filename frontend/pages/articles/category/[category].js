import React from 'react'
import Layout3 from '@/components/layout/layout3'
import SearchBar from '@/components/common/searchbar/searchbar'
import styles from '../type.module.css'

const articleList = Array(12).fill(1)

export default function ArticleType() {
  return (
    <>
      <Layout3 title="體能鍛鍊" pageName="articles">
        <section className={styles.padding80}>
          <div className="container-fluid p-0">
            <div className="row px-0 mx-0">
              <div
                className={`${styles.titleRow} col-12 d-flex justify-content-between align-items-center`}
              >
                <h4 className="text-primary">體能鍛鍊</h4>
                {/* TODO: NEXT searchbar RWD  */}
                <SearchBar maxWidth="351px" className={styles.searchbarPC} />
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
                      <a href="/articles/1">{v}</a>
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
