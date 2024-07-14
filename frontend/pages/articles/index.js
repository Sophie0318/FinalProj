import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Layout3 from '@/components/layout/layout3'
import SearchSection from '@/components/articles/search-section'
import CardCarousel from '@/components/swiperCarousel/cardCarousel'
import IndexCarousel from '@/components/swiperCarousel/indexCarousel'
import ArticleCard from '@/components/articles/article-card'
import styles from './articles.module.css'

export default function Articles() {
  const router = useRouter()
  const [latest, setLatest] = useState([])
  const [hottest, setHottest] = useState([])

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

  useEffect(() => {
    console.log(router.isReady)
    if (router.isReady) {
      fetch('http://localhost:3001/articles/api/articleIndex')
        .then((r) => r.json())
        .then((data) => {
          if (data.latestList) {
            setLatest(data.latestList)
          }
          if (data.hotList) {
            setHottest(data.hotList)
          }
          console.log(data.success)
        })
        .catch((ex) => console.log(ex))
    }
  }, [router.isReady])

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

        <section className={styles.latest}>
          <IndexCarousel
            title="最新文章"
            data={latest}
            renderItem={renderCard}
            cardMaxWidth="350px"
            showBtn={false}
          />
        </section>

        <section className={styles.popular}>
          <IndexCarousel
            title="熱門文章"
            data={hottest}
            renderItem={renderCard}
            cardMaxWidth="350px"
            showBtn={false}
          />
        </section>

        <SearchSection />
      </Layout3>
    </>
  )
}
