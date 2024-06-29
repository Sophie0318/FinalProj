import React from 'react'
import Link from 'next/link'
import { IoPersonAdd, IoCart } from 'react-icons/io5'
import styles from './layout.module.css'

export default function PCIndex() {
  return (
    <>
      <section className={`${styles.keyVisualPC}`}>
        <div className={`${styles.hero}`}>
          <div className={`${styles.heroContainer} container-fluid p-0`}>
            <div className="row g-0">
              <div className={`${styles.heroText} col-md-8`}>
                <h1 className="text-primary pe-1">
                  愛默生曾經說過健康是人生第一財富。
                </h1>
                <Link href="/#">
                  <h3 className={`${styles.startAction}`}>{`[ Start ]`}</h3>
                </Link>
              </div>
              <div className={`${styles.heroImage} col-md-4`}>
                <img src="/hero-img.png" />
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.cta1} bg-secondary`}>
          <div className="container fixed-960 p-0">
            <div className="row g-0 justify-content-between mx-3">
              <div className={`${styles.cta1Img} col-md-4`}>
                <img src="/marisa-howenstine-nFsOlSE9Mn8-unsplash.jpg" />
              </div>
              <div className="col-md-7">
                <h3>活力無限，擁抱健康</h3>
                <p>
                  運動是保持健康的關鍵，活力啟點幫您找到最佳運動場所。立即搜尋，讓健康和活力成為生活常態！
                  <br />
                  讓我們活到老，動到老！
                </p>
                <BtnLg>找場館</BtnLg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
