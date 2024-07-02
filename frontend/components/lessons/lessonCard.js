import React from 'react'
import styles from '@/styles/lesson.module.css'

const LessonCard = ({ title, price, category, gym, imgSrc }) => {
  return (
    <div className={styles.lessonCard}>
      <img src={imgSrc} alt="描述圖片內容" className={styles.img} />
      <div className={styles.lessonName}>
        <div className={styles.lessonTitle}>{title}</div>
        <div className={styles.lessonTitle}>{price}</div>
      </div>
      <div className={styles.lessonInfo}>
        <div>{category}</div>
        <div>{gym}</div>
      </div>
    </div>
  )
}

export default LessonCard
