import React, { useEffect, useState } from 'react'
import Layout2 from '@/components/layout/layout2'
import Carousel from '@/components/carousel'
import styles from '@/styles/coachDetail.module.css'

export default function Detail() {
  return (
    <>
      <Layout2 title="教練列表" pageName="coaches">
        <div className={styles.content}>
          <div className={styles.coach}>
            <div className={styles.imgContainer}>
              <img src="/coach4.jpg" className={styles.img} />
            </div>
            <div className={styles.coachText}>
              <div className={styles.coachInfo}>
                <div className={styles.coachName}> 李安妮 教練</div>
                <div className={styles.coachGym}>地點：黑皮健身房</div>
              </div>
              <div className={styles.desc}>
                <div className={styles.descTitle}>教練描述</div>
                <p className={styles.coachDesc}>
                  我們的專業教練李安妮專精於心肺功能訓練和增肌運動，特別針對銀髮族設計課程。安妮教練擁有多年經驗，致力於幫助長者提升體能和增強肌肉力量。她溫柔細心，善於調整訓練計劃，確保每位長者都能在安全的環境中運動。加入我們，與安妮教練一起，享受健康活力的生活！
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout2>
    </>
  )
}
