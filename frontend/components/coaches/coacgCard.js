import React, { useState } from 'react'
import styles from '@/styles/coachCard.module.css'
import { IoHeart } from 'react-icons/io5'

const CoachCard = ({ name, skill, imgSrc }) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <div className={styles.coachCard}>
      <img src={imgSrc} alt="描述圖片內容" className={styles.img} />
      <div className={styles.overlay}>
        <div className={styles.coach}>
          <div className={styles.coachName}>{name}</div>
          <div
            className={`${styles.heart} ${isClicked ? styles.clicked : ''}`}
            onClick={handleClick}
          >
            <IoHeart />
          </div>
        </div>
        <div className={styles.coachSkill}>{skill}</div>
      </div>
    </div>
  )
}

export default CoachCard
