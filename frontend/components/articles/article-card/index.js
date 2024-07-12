import React from 'react'
import styles from './article-card.module.css'

const ArticleCard = ({ title, category, update_at, imgSrc }) => {
  return (
    <div className={styles.articleCard}>
      <a
        href="/"
        style={{ height: '100%', width: '100%', margin: '0', padding: '0' }}
      >
        <img
          src={`/articles-img/${imgSrc}`}
          alt="描述圖片內容"
          className={styles.cardImg}
        />
        <div className={styles.cardInfo1}>
          <div className={styles.cardTitle}>{title}</div>
        </div>
        <div className={styles.cardInfo2}>
          <div>{category}</div>
          <div>{update_at}</div>
        </div>
      </a>
    </div>
  )
}

export default ArticleCard
