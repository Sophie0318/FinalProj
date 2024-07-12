import React, { useEffect, useState } from 'react'
import Layout3 from '@/components/layout/layout3'
import Carousel from '@/components/carousel'
import styles from '@/styles/coachDetail.module.css'
import { IoCall, IoHeart } from 'react-icons/io5'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Detail() {
  const [isClicked, setIsClicked] = useState(false)
  const [coach, setCoach] = useState(null)
  const router = useRouter()
  const { pid } = router.query
  const [isLoading, setIsLoading] = useState(true)
  const handleReservation = () => {
    router.push(`/coaches/reservation?coachId=${pid}`)
  }

  useEffect(() => {
    const fetchCoach = async () => {
      if (pid) {
        setIsLoading(true)
        try {
          const response = await axios.get(
            `http://localhost:3001/coaches/api/${pid}`
          )
          if (response.data.success) {
            setCoach(response.data.coach)
          } else {
            console.error('API request was not successful:', response.data)
          }
        } catch (error) {
          console.error('Error fetching coach:', error)
        } finally {
          setIsLoading(false)
        }
      }
    }

    fetchCoach()
  }, [pid])

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!coach) {
    return <div>No coach found</div>
  }
  return (
    <>
      <Layout3 title="教練列表" pageName="coaches">
        <div className={styles.content}>
          <div className={styles.coach}>
            <div className={styles.imgContainer}>
              <img src={`/${coach?.coach_img}`} className={styles.img} />
            </div>
            <div className={styles.coachText}>
              <div className={styles.coachInfo}>
                <div className={styles.coachName}> {coach.coach_name} 教練</div>
                <div className={styles.coachGym}>地點：{coach.gym}</div>
              </div>
              <div className={styles.desc}>
                <div className={styles.descTitle}>教練描述</div>
                <p className={styles.coachDesc}>{coach.coach_info}</p>
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
                <button
                  className={styles.btnReserve}
                  onClick={handleReservation}
                >
                  <IoCall /> 預約
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout3>
    </>
  )
}
