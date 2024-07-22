import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import LoginAlert from '@/hooks/login-alert/login-alert'
import { IoHeart } from 'react-icons/io5'
import styles from './article-card.module.css'

const ArticleCard = ({
  title = '',
  category = '',
  update_at = '',
  imgSrc = '/defaultImg.png',
  idURL = '',
  member_id = '',
  auth = '',
}) => {
  const router = useRouter()
  const [isClicked, setIsClicked] = useState(member_id === auth.id)
  const loginAlert = LoginAlert()

  const addFavArticle = async () => {
    const url = `http://localhost:3001/articles/api/addfavarticle`
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${auth.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ member_id: `${auth.id}`, article_id: `${idURL}` }),
    })
    const resData = await res.json()
    if (resData.success) {
      setIsClicked(true)
    }
  }

  const removeFavArticle = async () => {
    const url = `http://localhost:3001/articles/api/removefavarticle`
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${auth.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ member_id: `${auth.id}`, article_id: `${idURL}` }),
    })
    const resData = await res.json()
    if (resData.success) {
      setIsClicked(false)
    }
  }

  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (!auth.id) {
      loginAlert.fire().then((result) => {
        result.isConfirmed ? router.push('/users/sign_in') : ''
      })
    } else {
      if (!isClicked) {
        addFavArticle()
      } else {
        removeFavArticle()
      }
    }
  }

  return (
    <div className={styles.articleCard}>
      <Link href={`/articles/${idURL}`}>
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
