import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useAuth } from '@/context/auth-context'
import useArticleFav from '@/hooks/article-fav/useArticleFav'
import { IoHeart } from 'react-icons/io5'
import styles from './article-card.module.css'

const ArticleCard = ({
  title = '',
  category = '',
  update_at = '',
  imgSrc = '/defaultImg.png',
  idURL = '',
  member_id = '',
}) => {
  const router = useRouter()
  const { auth } = useAuth()
  const [isClicked, setIsClicked] = useState(member_id === auth.id)
  const { toggleArticleFav } = useArticleFav(
    auth,
    idURL,
    isClicked,
    setIsClicked
  )

  useEffect(() => {
    setIsClicked(member_id === auth.id)
  }, [router])

  return (
    <Link href={`/articles/${idURL}`} className={styles.articleCard}>
      <div className={styles.cardMainInfo}>
        <div className={styles.cardImgContainer}>
          <img
            src={`/articles-img/${imgSrc}`}
            alt="描述圖片內容"
            className={styles.cardImg}
          />
          <button className={`${styles.heart}`} onClick={toggleArticleFav}>
            <IoHeart
              className={`${styles.heartIcon} ${isClicked ? styles.clicked : ''
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
  )
}

export default ArticleCard
