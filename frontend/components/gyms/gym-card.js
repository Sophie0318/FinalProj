import React from 'react'
import styles from './gymCard.module.css'
import Link from 'next/link'
import { IoCall } from 'react-icons/io5'
import Image from 'next/image'

const GymCard = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {data.images.map((src, i) => {
          return (
            <Image
              key={i}
              src={src}
              alt={`場館圖片${i + 1}`}
              width={150}
              height={150}
              className={styles.image}
              loading="lazy"
            />
          )
        })}
      </div>
      <div className={styles.textBtn}>
        <div className={styles.content}>
          <h5 className={styles.title}>{data.name}</h5>
          <div className="cardInfo">
            <p className={styles.smallFont}>{data.address}</p>
            <p className={styles.smallFont}>營業時間 | {data.businessHours}</p>
            <div className={styles.badgeRow}>
              {data.features.map((feature, i) => (
                <span key={i} className={styles.badge}>
                  {feature}
                </span>
              ))}

              <span className={styles.badge}>500公尺</span>
            </div>
          </div>
        </div>
        <a href="#" className={styles.bookButton}>
          <IoCall />
          預約
        </a>
      </div>
    </div>
  )
}

const ResultCards = ({ gyms }) => {
  if (!gyms) {
    return <div>Loading...</div>
  }
  return (
    <div className={styles.resultCards}>
      {Array.isArray(gyms) && gyms.length > 0 ? (
        gyms.map((gym, i) => <GymCard key={i} data={gym} />)
      ) : (
        <p>沒有接收到gyms資料，檢查是不是陣列</p>
      )}
    </div>
  )
}
export { GymCard }
export default ResultCards
