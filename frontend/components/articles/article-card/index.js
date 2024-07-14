import { useState } from 'react'
import Link from 'next/link'
import { IoHeart } from 'react-icons/io5'
import styles from './article-card.module.css'

const ArticleCard = ({
  title = '',
  category = '',
  update_at = '',
  imgSrc = '/defaultImg.png',
  hrefURL = '/',
}) => {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsClicked(!isClicked)
    console.log('heart clicked')
  }

  return (
    <div className={styles.articleCard}>
      <Link href={hrefURL}>
        <div className={styles.cardMainInfo}>
          <div className={styles.cardImgContainer}>
            <img
              src={`/articles-img/${imgSrc}`}
              alt="描述圖片內容"
              className={styles.cardImg}
            />
            <button className={`${styles.heart}`} onClick={handleClick}>
              <IoHeart
                className={`${styles.heartIcon} ${
                  isClicked ? styles.clicked : ''
                }`}
              />
            </button>
          </div>
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
