import React, { useState, useEffect } from 'react'
import styles from '@/styles/lessonCheckout-modal.module.css'
import { useRouter } from 'next/router'
import Layout3 from '@/components/layout/layout3'
import axios from 'axios'

export default function Success() {
  const router = useRouter()
  const { orderNumber, lessonId } = router.query
  const [lesson, setLesson] = useState(null)

  useEffect(() => {
    const fetchLessonDetails = async () => {
      if (lessonId) {
        try {
          const response = await axios.get(
            `http://localhost:3001/lessons/api/${lessonId}`
          )
          if (response.data.success) {
            setLesson(response.data.lesson)
          }
        } catch (error) {
          console.error('獲取課程詳情失敗:', error)
        }
      }
    }

    fetchLessonDetails()
  }, [lessonId])

  const handleReturnToLessons = () => {
    router.push('/lessons')
  }

  if (!lesson) {
    return <div>載入中...</div>
  }

  return (
    <div>
      <Layout3>
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.success}>付款成功！</div>
            <div className={styles.reminder}>記得準時出席喔～</div>
            <div className={styles.reserveInfo}>
              <div className={styles.infoRow}>
                <div className={styles.label}>訂單編號</div>
                <div className={styles.details}>
                  <div className={styles.name}>{orderNumber}</div>
                </div>
              </div>
              <div className={styles.infoRow}>
                <div className={styles.label}>{lesson.lesson_name}</div>
                <div className={styles.details}>
                  <div className={styles.lessonInfo}>
                    {lesson.gym_name} <br />
                    {lesson.lesson_date}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.total}>
              <div>小計</div>
              <div>NT${lesson.lesson_price}</div>
            </div>
            <div className={styles.btns}>
              <button className={styles.btnBack}>檢視訂單</button>
              <button className={styles.btnFin} onClick={handleReturnToLessons}>
                回到課程頁
              </button>
            </div>
          </div>
        </div>
      </Layout3>
    </div>
  )
}