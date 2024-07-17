// 功能類
import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

// 元件 + 樣式
import Layout3 from '@/components/layout/layout3'
import Btn from '@/components/articles/buttons_test'
import ArticleSidebar from '@/components/articles/article-sidebar'
import useRenderCards from '@/hooks/cards/cards'
import IndexCarousel from '@/components/swiperCarousel/indexCarousel'
import Comment from '@/components/articles/comment/comment'
import styles from './articleId.module.css'

export default function ArticlePage() {
  const router = useRouter()
  const [showSidebar, setShowSidebar] = useState(false)
  const [content, setContent] = useState({})
  const [articles, setArticles] = useState([])
  const [author, setAuthor] = useState({})
  const articleRef = useRef(null)

  const renderCard = useRenderCards('articles')

  const getArticle = async () => {
    const baseURL = 'http://localhost:3001/articles/api/'
    const param = router.query.article_id
    try {
      // get individual article
      const res = await fetch(`${baseURL}entry/${param}`)
      const resData = await res.json()
      setContent(resData.result)
      setAuthor(resData.authorInfo)
      setArticles(resData.furtherReading)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (router.isReady) {
      getArticle()
    }

    // 設定手機sidebar, 讓他可以依照視窗滑到哪就顯示或隱藏
    const options = {
      root: null,
      threshold: 0,
      rootMargin: '-650px 0px 0px 0px',
    }
    const observer = new IntersectionObserver(([entry]) => {
      setShowSidebar(entry.isIntersecting)
    }, options)
    if (articleRef.current) {
      observer.observe(articleRef.current)
    }
    return () => {
      if (articleRef.current) {
        observer.unobserve(articleRef.current)
      }
    }
  }, [router])
  return (
    <>
      <Layout3
        title={content ? `找知識 - ${content.article_title}` : '文章頁面'}
        pageName="articles"
      >
        <main ref={articleRef} className={`${styles.article} container`}>
          <aside className={styles.sidebarTrack}>
            <ArticleSidebar
              showSidebar={showSidebar}
              pageLoaded={router.isReady}
            />
          </aside>
          <article className="row mx-0">
            <div className="d-flex flex-column mx-0">
              <h3 className={`${styles.articleTitle} text-primary`}>
                {content.article_title}
              </h3>
              <div className={styles.articleInfo}>
                <div className={`${styles.articleAuthor} w-md-50 w-100`}>
                  作者：{author.author_name}
                </div>
                <div className={`${styles.articleUpdateAt} w-md-50 w-100`}>
                  最後更新：{content.update_at}
                </div>
              </div>
              <div className={`${styles.articleDesc}`}>
                <p>編按：{content.article_desc}</p>
              </div>
              <div className={`${styles.articleCover} col-12`}>
                <img src={`/articles-img/${content.article_cover}`} />
              </div>
            </div>

            <div className={`${styles.articleContent}`}>
              <p>
                大學時期，林至芃是台大醫學院網球隊一員。即使到了30幾歲，他仍保持運動習慣。但2012年從美國進修回台灣之後，他成了「忙於工作的人」，因此疏於運動，10年之間胖到82公斤，三高也伴隨而來。
              </p>
              <p>
                不過，每天光是工作就忙碌不已，他如何找到時間運動，並且持續下去不放棄？
              </p>
              <h4>沒時間運動？把握零碎時間，開會也可以做訓練</h4>
              <p>
                對林至芃而言，時間是最貴的成本。所以，他希望能夠更有效率地訓練自己，以爬升為主要考量。
              </p>
              <p>
                「從台北騎到大溪老街，來回100公里，不會很累。我更喜歡在1～2個小時內，以爬升500～1,000公尺為目標。」2022年一整年，他共爬升8萬8,000公尺，換算後是10座聖母峰的高度。
              </p>
              <p>
                有時間的時候，林至芃就外出騎車；沒時間的話，他就踩訓練台，甚至經常一邊開會一邊騎，邊運動邊工作。「開會的時候，如果不是我發言，氣喘吁吁沒有關係。那個強度是一下訓練台，會發現全身都濕了。」
              </p>
              <figure className={styles.articleImg}>
                <img src="/articles-img/julia-zyablova-S1v7hVUiCg0-unsplash.jpg" />
                <figcaption className={styles.articleImgText}>
                  沒時間外出騎車，林至芃就邊踩訓練台邊開線上會議。
                </figcaption>
              </figure>
              <p>
                也因為騎腳踏車，到了2022年6月，約一年左右，他的體重從82公斤下降至64公斤，減少18公斤，糖化血色素、高密度膽固醇等數值也回歸正常。後來，因為體重持續下降，變得太瘦，出門騎車耐力不足，林至芃有計畫地增重，目前體重穩定維持在65～67公斤之間。
              </p>
              <p>
                「成為一個健康的中年人很享受，當大家呼朋引伴要外出騎車時，良好的體力，使自己成為那個照顧別人的人！」（
                <Link href="/">
                  相關閱讀：
                  <span>
                    工作高薪卻高壓，同行猝逝讓他決定提早退休轉行！曾煥昌：55歲當單車領隊，服務他人兼運動更快樂
                  </span>
                </Link>
                {')'}
              </p>
            </div>
          </article>
        </main>

        <section className={`${styles.author} bg-secondary`}>
          <div className="container fixed-960 p-0">
            <div className="row g-0 justify-content-md-between justify-content-center mx-3">
              <div className={`${styles.authorImg} col-md-5 col-12`}>
                <img src={author.author_image} />
              </div>
              <div className="col-md-7 col-12 ps-4">
                <h3>關於作者 - {author.author_name}</h3>
                <p>
                  小時候成績最爛科目是體育，現在卻成為健身教練。服務的客群多是想要減重塑身的女性，也透過肌力訓練、功能性訓練，幫助了不少人解決身體長期疼痛的問題。
                </p>
                <div className="row g-0 justify-content-md-start justify-content-center">
                  <Btn
                    className={styles.authorBtnPC}
                    size="lg"
                    bgColor="midnightgreen"
                    width="100%"
                    maxWidth="312px"
                    btnOrLink="link"
                    hrefURL={
                      author.author_id
                        ? `/coaches/${author.author_id}`
                        : `${author.author_href}`
                    }
                  >
                    了解更多
                  </Btn>
                  <Btn
                    className={styles.authorBtnSP}
                    size="thin"
                    bgColor="midnightgreen"
                    width="100%"
                    maxWidth="173px"
                    btnOrLink={author.author_id ? 'link' : 'button'}
                    hrefURL={
                      author.author_id
                        ? `/coaches/${author.author_id}`
                        : `${author.author_href}`
                    }
                  >
                    了解更多
                  </Btn>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.moreArticles}>
          <IndexCarousel
            title="延伸閱讀"
            renderItem={renderCard}
            data={articles}
            cardMaxWidth="350px"
            showBtn={false}
          />
        </section>

        <section className={styles.commentSect}>
          <div className={`${styles.comment} container`}>
            <div className={`row`}>
              <h3>看看留言</h3>
              <div>
                <Comment />
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.cta}`}>
          <div className="container fixed-960 py-0 px-3">
            <div className="row flex-column align-items-center p-0 m-0">
              <div
                className={`${styles.ctaCard} d-flex flex-column justify-content-center align-items-center bg-secondary`}
              >
                <h3>想要去動一動嗎?</h3>
                <p>
                  保持活力，永不嫌晚！閱讀完文章後，立即找到附近的健身房，開始您的健身之旅吧！
                </p>
                <div
                  className={`${styles.ctaBtnPC} justify-content-between w-100`}
                >
                  <Btn
                    size="lg"
                    bgColor="midnightgreen"
                    btnOrLink="link"
                    hrefURL="/articles"
                    width="100%"
                    maxWidth="270px"
                  >
                    前往地圖
                  </Btn>
                  <Btn
                    size="lg"
                    bgColor="midnightgreen"
                    btnOrLink="link"
                    hrefURL="/articles"
                    width="100%"
                    maxWidth="270px"
                  >
                    文章首頁
                  </Btn>
                </div>
                <div
                  className={`${styles.ctaBtnSP} justify-content-between w-100`}
                >
                  <Btn
                    size="thin"
                    bgColor="midnightgreen"
                    btnOrLink="link"
                    hrefURL="/gyms"
                    width="100%"
                    maxWidth="100%"
                  >
                    前往地圖
                  </Btn>
                  <Btn
                    size="thin"
                    bgColor="midnightgreen"
                    btnOrLink="link"
                    hrefURL="/gyms"
                    width="100%"
                    maxWidth="100%"
                  >
                    文章首頁
                  </Btn>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout3>
    </>
  )
}
