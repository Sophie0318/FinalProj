import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth } from '@/context/auth-context'

import Layout3 from '@/components/layout/layout3'
import SearchSection from '@/components/articles/search-section'
import IndexCarousel from '@/components/swiperCarousel/indexCarousel'
import useRenderCards from '@/hooks/cards/cards'
import styles from './articles.module.css'

export default function Articles() {
  const router = useRouter()
  const { auth } = useAuth()
  const [latest, setLatest] = useState([])
  const [hottest, setHottest] = useState([])
  const renderCard = useRenderCards('articles', auth)

  const getIndexList = async (url, token) => {
    let res = ''
    let resData = ''
    try {
      if (token) {
        res = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` },
        })
        resData = await res.json()
      } else {
        res = await fetch(url)
        resData = await res.json()
      }
    } catch (error) {
      console.log('database fetch data error: ', error)
    }
    if (resData.latestList) {
      setLatest(resData.latestList)
    }
    if (resData.hotList) {
      setHottest(resData.hotList)
    }
    if (!resData.success) {
      console.log('database fetch error')
    }
  }

  // TODO: solve 2 useEffect contained in article index page, affects carousel data and insert favarticle
  useEffect(() => {
    if (router.isReady) {
      const url = 'http://localhost:3001/articles/api/articleIndex'
      const token = localStorage.getItem('suan-auth')
        ? JSON.parse(localStorage.getItem('suan-auth')).token
        : ''
      getIndexList(url, token)
    }
  }, [router])

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
