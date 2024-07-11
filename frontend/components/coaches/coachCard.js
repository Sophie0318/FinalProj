import React, { useState } from 'react'
import styles from '@/styles/coachCard.module.css'
import { IoHeart } from 'react-icons/io5'

const CoachCard = ({ name, skill, imgSrc, onHeartClick }) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsClicked(!isClicked)
    if (onHeartClick) {
      onHeartClick(name, isClicked)
    }
  }

  console.log('CoachCard props:', { name, skill, imgSrc }) // 添加這行用於調試

  return (
    <div className={styles.coachCard}>
      <img src={imgSrc} alt={`${name}的照片`} className={styles.img} />
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
        <div className={styles.coachSkill}>
          {Array.isArray(skill) ? skill.join(', ') : skill}
        </div>
      </div>
    </div>
  )
}

export default CoachCard
