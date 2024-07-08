import React from 'react'
import Link from 'next/link'
import Layout3 from '@/components/layout/layout3'
import Btn from '@/components/articles/buttons_test'
import ArticleSidebar from '@/components/articles/article-sidebar'
import SwiperCarousel from '@/components/swiperCarousel'
import styles from './articleId.module.css'

export default function ArticlePage() {
  return (
    <>
      <Layout3 title="文章頁面" pageName="articles">
        <main className={`${styles.article} container`}>
          <aside className={styles.sidebarTrack}>
            <ArticleSidebar />
          </aside>
          <article className="row mx-0">
            <div className="d-flex flex-column mx-0">
              <h3 className={`${styles.articleTitle} text-primary`}>
                49歲騎單車減18公斤！台大醫師：健康中年生活享受無比
              </h3>
              <div className="d-flex">
                <div className={`${styles.articleAuthor} w-50`}>
                  作者：林芳如
                </div>
                <div className={`${styles.articleUpdateAt} w-50`}>
                  最後更新：2024.03.08
                </div>
              </div>
              <div className={`${styles.articleDesc}`}>
                <p>
                  編按：靠著騎單車，台大醫院麻醉部疼痛治療科主任林至芃減重18公斤，不僅消除三高，體力也變得更好。和台大EMBA同學一起外出騎單車時，他還能幫忙調整同學的姿勢，成為有餘力照顧別人的人。「成為一個健康的中年人很享受！」但他也坦言，時間對他而言最為珍貴。工作、生活忙碌，如何找出時間有效率地騎車，且找到持續的動力？（本文出自《50+週刊》）
                </p>
              </div>
              <div className={`${styles.articleCover} col-12`}>
                <img src="/articles-img/julia-zyablova-S1v7hVUiCg0-unsplash.jpg" />
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
            <div className="row g-0 justify-content-between mx-3">
              <div className={`${styles.authorImg} col-lg-5 col-5`}>
                <img src="/marisa-howenstine-nFsOlSE9Mn8-unsplash.jpg" />
              </div>
              <div className="col-lg-7 col-6">
                <div className="row px-0">
                  <h3>關於作者 - Ola 喬教練</h3>
                  <p>
                    小時候成績最爛科目是體育，現在卻成為健身教練。服務的客群多是想要減重塑身的女性，也透過肌力訓練、功能性訓練，幫助了不少人解決身體長期疼痛的問題。
                  </p>
                  <div className="col">
                    <Btn
                      size="lg"
                      bgColor="midnightgreen"
                      style={{ width: '100%', maxWidth: '312px' }}
                    >
                      了解更多
                    </Btn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.moreArticles}>
          <div className="row px-0 mx-0 g-0">
            <div className="col-md-3 d-flex justify-content-md-end justify-content-center align-items-center">
              <h3 className="my-0">延伸閱讀</h3>
            </div>
            <div className="col-md-9 ps-3">
              <SwiperCarousel />
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className={`${styles.comment} row`}>
              <h3>看看留言</h3>
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
                <div className="d-flex justify-content-between w-100">
                  <Btn
                    size="lg"
                    bgColor="midnightgreen"
                    btnOrLink="link"
                    hrefURL="/"
                    style={{ width: '100%', maxWidth: '278px' }}
                  >
                    前往地圖
                  </Btn>
                  <Btn
                    size="lg"
                    bgColor="midnightgreen"
                    btnOrLink="link"
                    hrefURL="/"
                    style={{ width: '100%', maxWidth: '278px' }}
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
