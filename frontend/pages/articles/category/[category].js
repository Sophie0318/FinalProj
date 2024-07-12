import React from 'react'
import ArticleCard from '@/components/articles/article-card'
import Layout3 from '@/components/layout/layout3'
import SearchBar from '@/components/common/searchbar/searchbar'
import SearchSection from '@/components/articles/search-section'
import styles from '../type.module.css'

// 測試用資料
import data from '@/data/FakeArticles.json'

const renderCard = (item) => {
  return (
    <ArticleCard
      title={item.article_title}
      category={item.article_subtype}
      update_at={item.update_at}
      imgSrc={item.articleImg_name}
    />
  )
}

export default function ArticleType() {
  const articleList = data || Array(12).fill(1)

  return (
    <>
      <Layout3 title="體能鍛鍊" pageName="articles" section="whiteSection">
        <section className={styles.padding80}>
          <div className="container-fluid p-0 overflow-visible">
            <div className="row px-0 mx-0">
              <div
                className={`${styles.titleRow} col-12 d-flex justify-content-between align-items-center`}
              >
                <h4 className="text-primary">體能鍛鍊</h4>
                <div className={styles.searchbarPC}>
                  <SearchBar maxWidth="351px" />
                </div>
              </div>
              {articleList.map((v, i) => {
                return (
                  <div
                    className={`${styles.card} col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12`}
                    key={i}
                  >
                    {renderCard(v)}
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

        <section className={styles.searchbarSP}>
          <SearchSection />
        </section>
      </Layout3>
    </>
  )
}
