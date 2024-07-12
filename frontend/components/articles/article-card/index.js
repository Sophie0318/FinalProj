import React from 'react'
import Link from 'next/link'
import styles from './article-card.module.css'

const ArticleCard = ({
  title = '',
  category = '',
  update_at = '',
  imgSrc = '/defaultImg.png',
  hrefURL = '/',
}) => {
  return (
    <div className={styles.articleCard}>
      <Link href={hrefURL}>
        <div className={styles.cardMainInfo}>
          <img
            src={`/articles-img/${imgSrc}`}
            alt="描述圖片內容"
            className={styles.cardImg}
          />
          <div className={styles.cardInfo1}>
            <div className={styles.cardTitle}>{title}</div>
          </div>
        </div>
        <div className={styles.cardInfo2}>
          <div>{category}</div>
          <div>{update_at}</div>
        </div>
      </Link>
    </div>
  )
}

export default ArticleCard
