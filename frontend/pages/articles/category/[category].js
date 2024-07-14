import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ArticleCard from '@/components/articles/article-card'
import Layout3 from '@/components/layout/layout3'
import SearchBar from '@/components/common/searchbar/searchbar'
import SearchSection from '@/components/articles/search-section'
import styles from '../type.module.css'

// 測試用資料
import data from '@/data/FakeArticles.json'

// 寫 useEffect 抓後端資料的時候記得檢查有沒有redirect(page>total / page<1防呆用)
const renderCard = (item) => {
  return (
    <ArticleCard
      title={item.article_title}
      category={item.code_desc}
      update_at={item.update_at}
      imgSrc={item.article_cover}
    />
  )
}

export default function ArticleType() {
  const [articleList, setArticleList] = useState(data)
  const [pageCategory, setPageCategory] = useState('文章列表')
  const router = useRouter()
  const categoryMap = {
    fitness: '體能鍛鍊',
    healthy_diet: '健康飲食',
    medical_care: '醫療保健',
    mental_wellness: '心靈健康',
    happy_learning: '熟齡學習',
  }

  const getList = async (url) => {
    let res = ''
    let resData = ''
    try {
      res = await fetch(url)
      resData = await res.json()
    } catch (error) {
      console.log('database fetch data error: ', error)
    }
    if (resData.success) {
      if (resData.redirect) {
        console.log(resData.redirect)
        router.push(
          {
            pathname: router.pathname,
            query: { ...router.query, ...resData.redirect },
          },
          undefined,
          { shallow: true }
        )
        console.log(router.query)
      }
      setArticleList(resData)
    }
  }

  useEffect(() => {
    if (router.isReady) {
      const baseURL = 'http://localhost:3001/articles/api/listData?'
      const query = new URLSearchParams(router.query)

      const url = `${baseURL}${query}`
      getList(url)
      setPageCategory(categoryMap[router.query.category])
    }
  }, [router.isReady, articleList.success])

  if (!router.isReady || !articleList.success) return null
  return (
    <>
      <Layout3 title="體能鍛鍊" pageName="articles" section="whiteSection">
        <section className={styles.padding80}>
          <div className="container-fluid p-0 overflow-visible">
            <div className="row px-0 mx-0">
              <div
                className={`${styles.titleRow} col-12 d-flex justify-content-between align-items-center`}
              >
                <h4 className="text-primary">{pageCategory}</h4>
                <div className={styles.searchbarPC}>
                  <SearchBar maxWidth="351px" />
                </div>
              </div>
              {articleList.rows.map((v, i) => {
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
