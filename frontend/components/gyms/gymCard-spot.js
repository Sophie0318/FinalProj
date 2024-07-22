import React, { useEffect, useState } from 'react'
import styles from './gymCard-spot.module.css'
import { IoHeart } from 'react-icons/io5'

const GymCardSpot = ({ data }) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }
  useEffect(() => {
    console.log(data)
  }, [])
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {data.images.length > 0 && (
          <img
            src={`/${data.images[0]}`}
            alt="場館圖片"
            className={styles.image}
            loading="lazy"
          />
        )}

        <div
          className={`${styles.heart} ${isClicked ? styles.clicked : ''}`}
          onClick={handleClick}
        >
          <IoHeart />
        </div>
      </div>
      <div className={styles.textBtn}>
        <div className={styles.content}>
          <h6 className={styles.title}>{data.name}</h6>
          <div className="cardInfo">
            <p className={styles.smallFont}>{data.address}</p>
            <p className={styles.smallFont}>營業時間 | {data.businessHours}</p>
            <div className={styles.badgeRow}>
              {data.features.map((feature, i) => (
                <span key={i} className={styles.badge}>
                  {feature}
                </span>
              ))}

              {/* <span className={styles.badge}>500公尺</span> */}
            </div>
          </div>
        </div>
        {/* <a href="#" className={styles.bookButton}>
          <IoCall />
          預約
        </a> */}
      </div>
    </div>
  )
}

export default GymCardSpot
