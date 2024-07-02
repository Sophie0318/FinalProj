import React from 'react'
import Link from 'next/link'
import { BtnLg } from '@/components/common/buttons'
import Layout3 from '@/components/layout/layout3'
import Carousel from '@/components/carousel'
import styles from './articleId.module.css'

export default function ArticlePage() {
  return (
    <>
      <Layout3 title="文章頁面" pageName="articles">
        <main>
          <article className="container fixed-960">
            <aside className="sidebar"></aside>
            <div className="row articleInfo">
              <h3>49歲騎單車減18公斤！台大醫師：健康中年生活享受無比</h3>
              <div className="col-6 p-font">作者：林芳如</div>
              <div className="col-6 p-font">最後更新：2024.03.08</div>
              <div className="col-12">
                <p>
                  編按：靠著騎單車，台大醫院麻醉部疼痛治療科主任林至芃減重18公斤，不僅消除三高，體力也變得更好。和台大EMBA同學一起外出騎單車時，他還能幫忙調整同學的姿勢，成為有餘力照顧別人的人。「成為一個健康的中年人很享受！」但他也坦言，時間對他而言最為珍貴。工作、生活忙碌，如何找出時間有效率地騎車，且找到持續的動力？（本文出自《50+週刊》）
                </p>
              </div>
              <div className="col-12">
                <img src="/defaultImg.png" />
              </div>
            </div>

            <div className="row articleContent">
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
              <figure>
                <img src="defaultImg.png" />
                <figcpation>
                  沒時間外出騎車，林至芃就邊踩訓練台邊開線上會議。
                </figcpation>
              </figure>
              <p>
                也因為騎腳踏車，到了2022年6月，約一年左右，他的體重從82公斤下降至64公斤，減少18公斤，糖化血色素、高密度膽固醇等數值也回歸正常。後來，因為體重持續下降，變得太瘦，出門騎車耐力不足，林至芃有計畫地增重，目前體重穩定維持在65～67公斤之間。
              </p>
              <p>
                「成為一個健康的中年人很享受，當大家呼朋引伴要外出騎車時，良好的體力，使自己成為那個照顧別人的人！」（
                <a href="/">
                  相關閱讀：
                  <span>
                    工作高薪卻高壓，同行猝逝讓他決定提早退休轉行！曾煥昌：55歲當單車領隊，服務他人兼運動更快樂
                  </span>
                </a>
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
                <h3>關於作者 - Ola 喬教練</h3>
                <p>
                  小時候成績最爛科目是體育，現在卻成為健身教練。服務的客群多是想要減重塑身的女性，也透過肌力訓練、功能性訓練，幫助了不少人解決身體長期疼痛的問題。
                </p>
                <BtnLg>了解更多</BtnLg>
              </div>
            </div>
          </div>
        </section>

        <section>
          <Carousel carouselTitle="延伸閱讀" />
        </section>

        <section>
          <div className="container">
            <div className="row comment">
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
                <BtnLg>
                  <Link href="/" className="text-white">
                    前往地圖
                  </Link>
                </BtnLg>
                <BtnLg>
                  <Link href="/" className="text-white">
                    文章首頁
                  </Link>
                </BtnLg>
              </div>
            </div>
          </div>
        </section>
      </Layout3>
    </>
  )
}
