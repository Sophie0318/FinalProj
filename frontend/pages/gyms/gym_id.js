import React from 'react'
import Layout3 from '@/components/layout/layout3'
import styles from './gym_id.module.css'
import { IoCall, IoHeart } from 'react-icons/io5'
import Badges from '@/components/gyms/badges'

const gymsData = [
  {
    id: 1,
    name: '原力覺醒健身房',
    subtitle: '友善的設備，專業的教練',
    address: '台北市中正區杭州南路二段308號',
    businessHours: '上午9:00 - 下午11:00',
    features: ['重量訓練', '有氧運動', '瑜伽課程'],
    distance: 500,
    images: [
      '/gym1.jpg',
      '/gym1.jpg',
      '/gym1.jpg',
      '/gym1.jpg',
      '/gym1.jpg',
      '/gym1.jpg',
    ],
    phoneNumber: '02-1234-5678',
  },
]
export default function GymDetail({ gymId }) {
  // 假設 gymId 是從 1 開始的，我們需要減 1 來獲取正確的索引
  const gym = gymsData[gymId - 1] || gymsData[0];


  return (
    <div>
      <Layout3>
        <div title="title-box" className={styles.container}>
          <h3> {gym.name} </h3>
          <h6>subtitle</h6>
        </div>

        <div className={styles.imgContainer}>
          {/* map第一張 */}
          <img src="/gym1.jpg" alt="場館內部" className={styles.coverImg} />

          <div className={styles.imgGroup}>
            {/* 使用map第二張到最後 */}
            <img src="/gym1.jpg" alt="場館內部" className={styles.otherImg} />
            <img src="/gym1.jpg" alt="場館內部" className={styles.otherImg} />
          </div>
        </div>

        <div className="container">
          <h6>{gym.address}</h6>
          <h6>{gym.phoneNumber}</h6>
          <Badges />

          <div className={styles.btn}>
            <button className={`${styles.btnLike}`}>
              <span className={`${styles.icon} `}>
                <IoHeart />
              </span>
              <span>收藏</span>
            </button>
            <button className={styles.btnReserve}>
              <IoCall /> 預約
            </button>
          </div>

          <div className={styles.details}>
            <h5>場館介紹</h5>
            <p>
              力量源練身館座落於北投市中心，是一間專業健身、體能訓練所在於其中一個的活化空間場館。我們科技力光合有機研發耳機系統，令大家在選擇的時候品質無需擔心。更新科技化新式健身器材設施讓您操作時更為輕鬆......
            </p>

            <h5>收費</h5>
            <ul>
              <li>月卡會員: NT$ 1,900/月</li>
              <li>季卡會員: NT$ 4,000/月 (每月約1,333)</li>
              <li>半年卡會員: NT$ 6,000/月 (每月約1,167)</li>
              <li>單次體驗: NT$ 300/次</li>
            </ul>
            <p>特別優惠: 新客體驗課程買一送一，詳情請洽詢專人。</p>

            <h5>場館設備</h5>
            <ol>
              <li>有氧運動區：配備多部跑步機、橢圓機、單車等</li>
              <li>力量訓練區：提供完整的肌力訓練器材</li>
              <li>團體課教室：舉辦各種團體有氧課程</li>
              <li>個人訓練區：可進行一對一的個人訓練</li>
              <li>更衣室和淋浴設施：提供舒適的更衣和盥洗空間</li>
            </ol>
          </div>
        </div>
      </Layout3>
    </div>
  )
}
