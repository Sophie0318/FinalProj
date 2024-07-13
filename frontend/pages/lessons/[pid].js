import React, { useEffect, useState } from 'react'
import Layout3 from '@/components/layout/layout3'
import styles from '@/styles/lessonDetail.module.css'
import { IoCart, IoHeart } from 'react-icons/io5'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useAuth } from '@/context/auth-context'

export default function Detail() {
  const [isClicked, setIsClicked] = useState(false)
  const [lesson, setLesson] = useState(null)
  const router = useRouter()
  const { pid } = router.query
  const [isLoading, setIsLoading] = useState(true)
  const { auth, getAuthHeader } = useAuth()

  useEffect(() => {
    const fetchLesson = async () => {
      if (pid) {
        setIsLoading(true)
        try {
          const response = await axios.get(
            `http://localhost:3001/lessons/api/${pid}`
          )
          if (response.data.success) {
            setLesson(response.data.lesson)
          } else {
            console.error('API request was not successful:', response.data)
          }
        } catch (error) {
          console.error('Error fetching lesson:', error)
        } finally {
          setIsLoading(false)
        }
      }
    }

    fetchLesson()
  }, [pid])

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  const handlePurchase = () => {
    if (!auth.token) {
      // 沒有登錄token，導向登錄頁
      router.push('/users/sign_in')
    } else if (lesson) {
      // 有登錄token，導向結帳頁
      router.push({
        pathname: '/lessons/checkout',
        query: { lessonId: lesson.lesson_id },
      })
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!lesson) {
    return <div>No lesson found</div>
  }

  return (
    <>
      <Layout3 title="課程列表" pageName="lessons">
        <div className={styles.content}>
          <div className={styles.lessson}>
            <div className={styles.imgContainer}>
              <img src={`/${lesson?.lesson_img}`} className={styles.img} />
            </div>
            <div className={styles.lessonText}>
              <div className={styles.lessonInfo}>
                <div className={styles.lessonName}>
                  {lesson.lesson_name} NT.{lesson.lesson_price}
                </div>
                <div className={styles.lessonCoach}>
                  教練：{lesson.coach_name} 教練
                </div>
                <div className={styles.lessonGym}>地點：{lesson.gym_name}</div>
                <div className={styles.lessonDate}>
                  時間：{lesson.lesson_date}
                </div>
              </div>
              <div className={styles.desc}>
                <div className={styles.descTitle}>課程描述</div>
                <p className={styles.lessonDesc}>{lesson.lesson_desc}</p>
              </div>
              <div className={styles.btn}>
                <button className={`${styles.btnLike}`} onClick={handleClick}>
                  <span
                    className={`${styles.icon} ${
                      isClicked ? styles.clicked : ''
                    }`}
                  >
                    <IoHeart />
                  </span>
                  <span>收藏</span>
                </button>
                <button className={styles.btnReserve} onClick={handlePurchase}>
                  <IoCart /> 購買
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout3>
    </>
  )
}
