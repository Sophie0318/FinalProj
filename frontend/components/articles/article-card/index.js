import React from 'react'
import styles from './article-card.module.css'

const ArticleCard = ({ title, category, update_at, imgSrc }) => {
  return (
    <div className={styles.articleCard}>
      <img src={imgSrc} alt="描述圖片內容" className={styles.cardImg} />
      <div className={styles.cardInfo1}>
        <div className={styles.cardTitle}>{title}</div>
      </div>
      <div className={styles.cardInfo2}>
        <div>{category}</div>
        <div>{update_at}</div>
      </div>
    </div>
  )
}

export default ArticleCard
