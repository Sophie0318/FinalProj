import React, { useEffect, useState } from 'react'
import Layout2 from '@/components/layout/layout2'
import Carousel from '@/components/carousel'
import styles from '@/styles/lessonDetail.module.css'

export default function Detail() {
  return (
    <>
      <Layout2 title="課程列表" pageName="lessons">
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
            </div>
          </div>
        </div>
      </Layout2>
    </>
  )
}
