import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useArticleSearch from '@/hooks/article-search/useArticleSearch'

import Layout3 from '@/components/layout/layout3'
import useRenderCards from '@/hooks/cards/cards'
import SearchBar from '@/components/common/searchbar/searchbar'
import SearchSection from '@/components/articles/search-section'
import BS5Pagination from '@/components/product/Pagination/bs5-pagination'
import styles from './type.module.css'

// const articleList = Array(12).fill(1)

export default function ArticleType() {
  const renderCard = useRenderCards('articles')
  const [articleList, setArticleList] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const { keyword, setKeyword, handleKeyDown } = useArticleSearch()
  const router = useRouter()

  const onPageChange = (e) => {
    const pageNum = e.selected + 1
    router.push({ query: { ...router.query, page: pageNum } }, undefined, {
      scroll: false,
    })
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
    }
  }, [router])
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
                <div className={styles.searchbarPC}>
                  <SearchBar
                    maxWidth="351px"
                    placeholder="輸入關鍵字搜尋文章..."
                    searchTerm={keyword}
                    setSearchTerm={setKeyword}
                    handleKeyDown={handleKeyDown}
                    handleSearch={() => {}}
                  />
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
                  className={`${styles.page} col-12 d-flex justify-content-center`}
                >
                  <BS5Pagination
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                  />
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
