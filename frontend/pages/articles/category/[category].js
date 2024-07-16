import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useRenderCards from '@/hooks/cards/cards'
import Layout3 from '@/components/layout/layout3'
import SearchBar from '@/components/common/searchbar/searchbar'
import SearchSection from '@/components/articles/search-section'
import BS5Pagination from '@/components/product/Pagination/bs5-pagination'
import styles from '../type.module.css'

export default function ArticleType() {
  const [articleList, setArticleList] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [pageCategory, setPageCategory] = useState('文章列表')
  const renderCard = useRenderCards('articles')
  const router = useRouter()
  const categoryMap = {
    fitness: '體能鍛鍊',
    healthy_diet: '健康飲食',
    medical_care: '醫療保健',
    mental_wellness: '心靈健康',
    happy_learning: '熟齡學習',
  }

  const onPageChange = (e) => {
    const pageNum = e.selected + 1
    router.push({ query: { ...router.query, page: pageNum } })
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
    } else {
      console.log(resData.success)
    }
    setArticleList(resData.rows)
    setTotalPages(resData.totalPages)
  }

  useEffect(() => {
    if (router.isReady) {
      const baseURL = 'http://localhost:3001/articles/api/listData?'
      const query = new URLSearchParams(router.query)

      const url = `${baseURL}${query}`
      getList(url)
      setPageCategory(categoryMap[router.query.category])
    }
  }, [router])

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
                <BS5Pagination
                  totalPages={totalPages}
                  onPageChange={onPageChange}
                />
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
