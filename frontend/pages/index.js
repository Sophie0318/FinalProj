// 功能類
import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'

// 樣式 or 元件類
import Layout1 from '@/components/layout/layout1'
import Btn from '@/components/articles/buttons_test'
import JoinMember from '@/components/joinMember'
import IndexCarousel from '@/components/swiperCarousel/indexCarousel'
import useRenderCards from '@/hooks/cards/cards'
import styles from '@/styles/home.module.css'

// 測試用data
import ArticleData from '@/data/FakeArticles.json'
// import LessonData from '@/data/FavLessons.json'
import LessonCard from '@/components/lessons/lessonCard'
import CoachCard from '@/components/coaches/coachCard'
// import CoachData from '@/data/FavCoaches.json'

import axios from 'axios'
import { useAuth } from '@/context/auth-context'
import { useRouter } from 'next/router'
// TODO: carousel 的 separater 的右邊緣要對其 joinMember card
// TODO: 之後來優化 keyVisualPC 的結構

export default function Home() {
  const [articleData, setArticleData] = useState([])
  const [hotLesson, setHotLesson] = useState([])
  const [hotCoach, setHotCoach] = useState([])
  const [favoriteCoach, setFavoriteCoach] = useState([])
  const { auth } = useAuth()
  const router = useRouter()
  const renderArticleCard = useRenderCards('articles')
  // const renderCoachCard = useRenderCards('coaches')
  // const renderLessonCard = useRenderCards('lessons')
  const [hasScrolled, setHasScrolled] = useState(false)
  const [hideHero, setHideHero] = useState(false)
  const [slideOne, setSlideOne] = useState('0')
  const [slideTwo, setSlideTwo] = useState('0')
  const pageWrapRef = useRef(null)

  const renderLessonCard = (lesson) => {
    return (
      <Link href={`/lessons/${lesson.lesson_id}`}>
        <LessonCard
          title={lesson.lesson_name}
          price={`NT$ ${lesson.lesson_price}`}
          gym={lesson.gym_name}
          category={lesson.categories}
          imgSrc={lesson.lesson_img || '/defaultImg.png'}
        />
      </Link>
    )
  }
  const fetchFavorites = async () => {
    if (auth.token) {
      try {
        const response = await axios.get(
          `http://localhost:3001/users/favorites/${auth.id}`,
          {
            headers: { Authorization: `Bearer ${auth.token}` },
          }
        )
        if (response.data.success) {
          setFavoriteCoach(
            response.data.favorites.map((coach) => coach.coach_id)
          )
        }
      } catch (error) {
        console.error('Error fetching favorites:', error)
      }
    }
  }

  const handleFavoriteToggle = async (coachId) => {
    if (!auth.token) {
      router.push('/users/sign_in')
      return
    }

    try {
      if (favoriteCoach.includes(coachId)) {
        await axios.delete('http://localhost:3001/users/remove-favorite', {
          data: { member_id: auth.id, coach_id: coachId },
          headers: { Authorization: `Bearer ${auth.token}` },
        })
        setFavoriteCoach(favoriteCoach.filter((id) => id !== coachId))
      } else {
        await axios.post(
          'http://localhost:3001/users/add-favorite',
          { member_id: auth.id, coach_id: coachId },
          { headers: { Authorization: `Bearer ${auth.token}` } }
        )
        setFavoriteCoach([...favoriteCoach, coachId])
      }
    } catch (error) {
      console.error('Error toggling favorite:', error)
    }
  }

  const renderCoachCard = (coach) => {
    return (
      <Link href={`/coaches/${coach.coach_id}`}>
        <CoachCard
          name={coach.coach_name}
          skill={coach.skills}
          imgSrc={coach.coach_img || '/defaultImg.png'}
          isLiked={favoriteCoach.includes(coach.coach_id)}
          onHeartClick={() => handleFavoriteToggle(coach.coach_id)}
        />
      </Link>
    )
  }

  useEffect(() => {
    setArticleData(ArticleData)
    const fetchHotLessons = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3001/lessons/api/hotLessons'
        )
        if (response.data.success) {
          setHotLesson(response.data.hotLessons)
        }
      } catch (error) {
        console.error('Error fetching hot lessons:', error)
      }
    }

    fetchHotLessons()

    const fetchHotCoaches = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3001/coaches/api/hotCoach'
        )
        if (response.data.success) {
          setHotCoach(response.data.hotCoaches)
        }
      } catch (error) {
        console.error('Error fetching hot coaches:', error)
      }
    }
    fetchHotCoaches()

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    }

    const observer = new IntersectionObserver(([entry]) => {
      setHideHero(entry.isIntersecting)
    }, options)
    if (pageWrapRef.current) {
      observer.observe(pageWrapRef.current)
    }

    const handleScroll = () => {
      if (!hasScrolled) {
        setHasScrolled(true)
      } else return

      const userScroll = window.scrollY
      const slideParamOne = -0.04
      const slideParamTwo = 0.06

      setSlideOne(String(Math.ceil(slideParamOne * userScroll)))
      setSlideTwo(String(Math.ceil(slideParamTwo * userScroll)))
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      if (pageWrapRef.current) {
        observer.unobserve(pageWrapRef.current)
      }
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Layout1 hideLogo={true}>
        <Head>
          <title>活力啟點</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main>
          <section className={`${styles.keyVisualPC}`}>
            <div className={styles.logoPC}>
              <Link href="/">
                <img src="/logo.png" />
              </Link>
            </div>
            <div className={`${styles.hero}`}>
              <div className={`${styles.heroContainer} container-fluid p-0`}>
                <div className="row g-0 position-relative">
                  <div className={`${styles.heroText} col-md-8 col-10`}>
                    <img
                      src="/index-img/heroBig.png"
                      className={styles.heroImgBig}
                    />
                    <img
                      src="/index-img/heroMid.png"
                      className={styles.heroImgMid}
                    />
                  </div>
                  <div
                    className={`${styles.heroImage} col-12 d-flex justify-content-end`}
                  >
                    <img src="/index-img/hero-img.svg" />
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.cta1} bg-secondary`}>
              <div className="container fixed-960 p-0">
                <div className="row g-0 justify-content-md-between justify-content-center mx-3">
                  <div className={`${styles.cta1Img} col-md-5 col-6`}>
                    <img src="/index-img/marisa-howenstine-nFsOlSE9Mn8-unsplash.jpg" />
                  </div>
                  <div className="col-md-7 col-5 ps-4">
                    <h3>活力無限，擁抱健康</h3>
                    <p>
                      運動是保持健康的關鍵，活力啟點幫您找到最佳運動場所。立即搜尋，讓健康和活力成為生活常態！
                      <br />
                      讓我們活到老，動到老！
                    </p>
                    <Btn
                      size="lg"
                      bgColor="midnightgreen"
                      btnOrLink="link"
                      hrefURL="/gyms"
                      maxWidth="312px"
                    >
                      找場館
                    </Btn>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={`${styles.keyVisualSP}`}>
            <div
              className={`${styles.heroImageContainer} ${
                hideHero ? styles.hideHero : ''
              }`}
            >
              <div className={styles.logoSP}>
                <Link href="/">
                  <img src="/logo.png" />
                </Link>
              </div>
              <img
                src="/index-img/hero-img-mobile.svg"
                className={`${styles.heroImage}`}
              />
            </div>

            <div className={`${styles.cta1}`}>
              <div className="container">
                <div className="row g-0 px-0 mx-0">
                  <div style={{ marginBottom: `${slideOne}px` }}>
                    <h1>
                      {`[健康]`}
                      <br />
                      人生第一財富
                    </h1>
                    <ul className="d-flex flex-wrap">
                      <li className="h5-font me-2">啟動活力 |</li>
                      <li className="h5-font me-2">永續生活 |</li>
                      <li className="h5-font me-2">幸福起點 |</li>
                    </ul>
                  </div>
                  <div className={`${styles.cta1Img} col-lg-4`}>
                    <img
                      style={{ bottom: `${slideTwo}px` }}
                      src="/index-img/marisa-howenstine-nFsOlSE9Mn8-unsplash.jpg"
                    />
                  </div>
                  <div className={`${styles.cta1Mask} col-lg-4`}>
                    <img src="/index-img/hero-mobile-mask.svg" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div ref={pageWrapRef} className={`${styles.pageWrap}`}>
            <section className={`${styles.cta2}`}>
              <div
                className={`${styles.ctaMobile} container-fluid px-3 px-sm-0`}
              >
                <div className="row p-0 m-0 justify-content-center">
                  <h3>活力無限，擁抱健康</h3>
                  <p>
                    運動是保持健康的關鍵，活力啟點幫您找到最佳運動場所。立即搜尋，讓健康和活力成為生活常態！
                    <br />
                    讓我們活到老，動到老！
                  </p>
                </div>
                <div className="row">
                  <div className="col d-flex justify-content-end">
                    <Btn
                      size="thin2"
                      bgColor="midnightgreen"
                      btnOrLink="link"
                      hrefURL="/gyms"
                      width="100%"
                      maxWidth="210px"
                      borderRadius="50px 0 0 50px"
                      marginRight="-24px"
                    >
                      找場館
                    </Btn>
                  </div>
                </div>
              </div>

              <div className={`container-fluid mx-0`}>
                <div className={`row m-0 justify-content-center`}>
                  <h3 className={`${styles.cta2ListTitlePC}`}>
                    你是不是有這些困擾呢？
                  </h3>
                  <h3 className={`${styles.cta2ListTitleMobile}`}>你也是嗎?</h3>
                  <p>
                    運動是保持健康的關鍵，活力啟點幫您找到最佳運動場所。立即搜尋，讓健康和活力成為生活常態！
                    <br />
                    讓我們活到老，動到老！
                  </p>
                </div>
                <div
                  className={`${styles.cta2List} row justify-content-center mx-3`}
                >
                  <div
                    className={`${styles.knee} d-flex flex-column justify-content-start align-items-center bg-secondary`}
                  >
                    <h4 className={`${styles.numTitle}`}>
                      {'['}01{']'}
                    </h4>
                    <h5>你會膝蓋痛嗎？</h5>
                    <img src="/index-img/knee.svg" className="d-block" />
                    <p>
                      膝蓋痛是否讓你很困擾？為何不試著透過運動來緩解呢？快快來加入我們吧！
                    </p>
                  </div>
                  <div
                    className={`${styles.bored} d-flex flex-column justify-content-start align-items-center bg-white`}
                  >
                    <h4 className={`${styles.numTitle}`}>
                      {'['}02{']'}
                    </h4>
                    <h5>生活很無聊嗎？</h5>
                    <img src="/index-img/bored.svg" className="d-block" />
                    <p>
                      運動是改善心情的最佳良方！從今天開始，每天花點時間運動，身心煥然一新。
                    </p>
                  </div>
                  <div
                    className={`${styles.sleepy} d-flex flex-column justify-content-start align-items-center bg-secondary`}
                  >
                    <h4 className={`${styles.numTitle}`}>
                      {'['}03{']'}
                    </h4>
                    <h5>常常想睡嗎？</h5>
                    <img src="/index-img/sleepy.svg" className="d-block" />
                    <p>
                      想開始運動卻不知道能去哪裡嗎？點選下方按鈕，輸入您的地址來尋找場館吧！
                    </p>
                  </div>
                </div>
                <div className={`row`}>
                  <div className={`${styles.cta2BtnPC}`}>
                    <Btn
                      size="lg"
                      bgColor="midnightgreen"
                      btnOrLink="link"
                      hrefURL="/gyms"
                      maxWidth="312px"
                    >
                      找解答
                    </Btn>
                  </div>
                  <div className={`${styles.cta2BtnSP}`}>
                    <Btn
                      size="thin2"
                      bgColor="midnightgreen"
                      btnOrLink="link"
                      hrefURL="/gyms"
                      maxWidth="210px"
                      borderRadius="50px 0 0 50px"
                      marginRight="-20px"
                    >
                      找解答
                    </Btn>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.popular}>
              <IndexCarousel
                title="熱門課程"
                data={hotLesson}
                renderItem={renderLessonCard}
              />
            </section>

            <section className={styles.popular}>
              <IndexCarousel
                title="熱門教練"
                data={hotCoach}
                renderItem={renderCoachCard}
              />
            </section>

            <section className={styles.popular}>
              <IndexCarousel
                title="熱門文章"
                data={ArticleData}
                renderItem={renderArticleCard}
                cardMaxWidth="350px"
              />
            </section>

            <JoinMember />
          </div>
        </main>
      </Layout1>
    </>
  )
}
