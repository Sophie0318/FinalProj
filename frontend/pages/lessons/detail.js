import React, { useEffect, useState } from 'react'
import Layout3 from '@/components/layout/layout3'
import Carousel from '@/components/carousel'
import styles from '@/styles/lessonDetail.module.css'
import { IoCart, IoHeart } from 'react-icons/io5'

export default function Detail() {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <>
      <Layout3 title="課程列表" pageName="lessons">
        <div className={styles.content}>
          <div className={styles.lessson}>
            <div className={styles.imgContainer}>
              <img src="/course1.jpg" className={styles.img} />
            </div>
            <div className={styles.lessonText}>
              <div className={styles.lessonInfo}>
                <div className={styles.lessonName}> 活力瑜珈 NT.900</div>
                <div className={styles.lessonCoach}>教練：李安妮 教練</div>
                <div className={styles.lessonGym}>地點：黑皮健身房</div>
                <div className={styles.lessonDate}>時間：2024/05/24 13:00</div>
              </div>
              <div className={styles.desc}>
                <div className={styles.descTitle}>課程描述</div>
                <p className={styles.lessonDesc}>
                  歡迎加入我們的長青活力瑜伽課！這是一個專為
                  銀髮族設計的瑜伽課程，旨在提升您的柔韌性、
                  平衡感和整體健康。無論您是初學者還是有經驗
                  的瑜伽愛好者，我們的專業教練將根據您的需求
                  和能力，為您量身打造合適的動作。
                </p>
              </div>
              <div className={styles.btn}>
                <button className={`${styles.btnLike}`} onClick={handleClick}>
                  <span
                    className={`${styles.icon} ${
                      isClicked ? styles.clicked : ''
                    }`}
                  >
                    <IoHeart />
                  </span>
                  <span>收藏</span>
                </button>
                <button className={styles.btnReserve}>
                  <IoCart /> 購買
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout3>
    </>
  )
}
