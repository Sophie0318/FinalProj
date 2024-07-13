// 功能類
import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'

// 樣式 or 元件類
import Layout1 from '@/components/layout/layout1'
import Btn from '@/components/articles/buttons_test'
import JoinMember from '@/components/joinMember'
import CardCarousel from '@/components/swiperCarousel/cardCarousel'
import LessonCard from '@/components/lessons/lessonCard'
import CoachCard from '@/components/coaches/coachCard'
import ArticleCard from '@/components/articles/article-card'
import styles from '@/styles/home.module.css'

// 測試用data
import ArticleData from '@/data/FakeArticles.json'
import LessonData from '@/data/FavLessons.json'
import CoachData from '@/data/FavCoaches.json'

// TODO: carousel 的 separater 的右邊緣要對其 joinMember card
// TODO: 首頁keyVisual_SP滑動動畫優化, 參考 kacco
// TODO: 之後來優化 keyVisualPC 的結構

export default function Home() {
  const [articleData, setArticleData] = useState([])
  const [lessonData, setLessonData] = useState([])
  const [coachData, setCoachData] = useState([])
  const [hasScrolled, setHasScrolled] = useState(false)
  const [hideHero, setHideHero] = useState(false)
  const [slideOne, setSlideOne] = useState('0')
  const [slideTwo, setSlideTwo] = useState('0')

  const pageWrapRef = useRef(null)

  const renderArticleCard = (data = {}) => {
    return (
      <ArticleCard
        title={data.article_title}
        update_at={data.update_at}
        category={data.article_subtype}
        imgSrc="/defaultImg.png"
      />
    )
  }

  const renderLessonCard = (data = {}) => {
    return (
      <LessonCard
        title={data.title}
        price={data.price}
        gym={data.gym}
        category={data.category}
        imgSrc="/defaultImg.png"
      />
    )
  }

  const renderCoachCard = (data = {}) => {
    return (
      <CoachCard name={data.name} skill={data.skill} imgSrc="/defaultImg.png" />
    )
  }

  useEffect(() => {
    setArticleData(ArticleData)
    setLessonData(LessonData)
    setCoachData(CoachData)

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
      const slideParamTwo = 0.1

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
                    <h1 className="text-primary pe-1">
                      愛默生曾經說過健康是人生第一財富。
                    </h1>
                    <Link href="/#">
                      <h3 className={`${styles.startAction}`}>{`[ Start ]`}</h3>
                    </Link>
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
                <div className={`${styles.cta2Btn} row`}>
                  <div className="col d-flex justify-content-center">
                    <Btn
                      size="thin2"
                      bgColor="midnightgreen"
                      btnOrLink="link"
                      hrefURL="/gyms"
                      width="100%"
                      maxWidth="210px"
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
                    >
                      找解答
                    </Btn>
                  </div>
                </div>
              </div>
            </section>

            <section className={`${styles.popular}`}>
              <div className="row px-0 mx-0 g-0">
                <div className="col-md-3 d-flex justify-content-md-end justify-content-center align-items-center">
                  <h3 className="my-0">熱門課程</h3>
                </div>
                <div className="col-md-9 ps-3 py-5 overflow-hidden">
                  <CardCarousel
                    cardMaxWidth="fit-content"
                    data={LessonData}
                    renderItem={renderLessonCard}
                  />
                </div>
              </div>
              <div className="row px-0 mx-0 g-0">
                <div className={`${styles.carouselBtnPC}`}>
                  <Btn
                    size="lg"
                    bgColor="midnightgreen"
                    btnOrLink="link"
                    hrefURL="/lessons"
                    maxWidth="312px"
                  >
                    找課程
                  </Btn>
                </div>
                <div className={`${styles.carouselBtnSP}`}>
                  <Btn
                    size="thin2"
                    bgColor="midnightgreen"
                    btnOrLink="link"
                    hrefURL="/lessons"
                    maxWidth="210px"
                  >
                    找課程
                  </Btn>
                </div>
              </div>
            </section>

            <section className={`${styles.popular}`}>
              <div className="row px-0 mx-0 g-0">
                <div className="col-md-3 d-flex justify-content-md-end justify-content-center align-items-center">
                  <h3 className="my-0">熱門教練</h3>
                </div>
                <div className="col-md-9 ps-3 py-5 overflow-hidden">
                  <CardCarousel
                    cardMaxWidth="fit-content"
                    data={CoachData}
                    renderItem={renderCoachCard}
                  />
                </div>
              </div>
              <div className="row px-0 mx-0 g-0">
                <div className={`${styles.carouselBtnPC}`}>
                  <Btn
                    size="lg"
                    bgColor="midnightgreen"
                    btnOrLink="link"
                    hrefURL="/lessons"
                    maxWidth="312px"
                  >
                    找教練
                  </Btn>
                </div>
                <div className={`${styles.carouselBtnSP}`}>
                  <Btn
                    size="thin2"
                    bgColor="midnightgreen"
                    btnOrLink="link"
                    hrefURL="/lessons"
                    maxWidth="210px"
                  >
                    找教練
                  </Btn>
                </div>
              </div>
            </section>

            <section className={`${styles.popular}`}>
              <div className="row px-0 mx-0 g-0">
                <div className="col-md-3 d-flex justify-content-md-end justify-content-center align-items-center">
                  <h3 className="my-0">熱門文章</h3>
                </div>
                <div className="col-md-9 ps-3 py-5 overflow-hidden">
                  <CardCarousel
                    cardMaxWidth="350px"
                    data={ArticleData}
                    renderItem={renderArticleCard}
                  />
                </div>
              </div>
              <div className="row px-0 mx-0 g-0">
                <div className={`${styles.carouselBtnPC}`}>
                  <Btn
                    size="lg"
                    bgColor="midnightgreen"
                    btnOrLink="link"
                    hrefURL="/lessons"
                    maxWidth="312px"
                  >
                    找文章
                  </Btn>
                </div>
                <div className={`${styles.carouselBtnSP}`}>
                  <Btn
                    size="thin2"
                    bgColor="midnightgreen"
                    btnOrLink="link"
                    hrefURL="/lessons"
                    maxWidth="210px"
                  >
                    找文章
                  </Btn>
                </div>
              </div>
            </section>

            <JoinMember />
          </div>
        </main>
      </Layout1>
    </>
  )
}
