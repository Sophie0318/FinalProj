import React, { useEffect, useState } from 'react'
import Layout3 from '@/components/layout/layout3'
import Carousel from '@/components/carousel'
import styles from '@/styles/coachReservation.module.css'
import CoachCard from '@/components/coaches/coachCard'
import ReserveModal from '@/components/coaches/reserve-modal'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function Reservation() {
  const [selectedCoach, setSelectedCoach] = useState(null)
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }
  // const coaches = [
  //   { name: '李安妮', skill: '心肺/有氧', imgSrc: '/coach4.jpg' },
  //   // 添加更多教练数据
  // ]

  useEffect(() => {
    const fetchCoach = async () => {
      const { coachId } = router.query
      if (coachId) {
        try {
          const response = await axios.get(
            `http://localhost:3001/coaches/api/${coachId}`
          )
          if (response.data.success) {
            setSelectedCoach(response.data.coach)
          }
        } catch (error) {
          console.error('Error fetching coach:', error)
        }
      }
    }

    fetchCoach()
  }, [router.query])
  return (
    <>
      <Layout3 title="教練預約" pageName="coaches">
        <div className={styles.content}>
          <div className={styles.reserveForm}>
            <div className={styles.formHead}>
              <p className={styles.formTitle}>預約人資訊 ｜</p>
              <div class={styles.checkboxes}>
                <input
                  type="checkbox"
                  id="member"
                  name="member"
                  className={styles.checkbox}
                />
                <label htmlFor="member">同會員資料</label>
              </div>
            </div>
            <div className={styles.formContainer}>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formLabel}>姓名</div>
                <input type="text" name="name" id="name" />

                <div className={styles.formLabel}>手機</div>
                <input type="text" name="phone" id="phone" />

                <div className={styles.formLabel}>聯絡信箱</div>
                <input type="text" name="email" id="email" />

                <div className={styles.formLabel}>選擇時段</div>
                <select className={styles.timeSelect}>
                  <option>1</option>
                  <option>1</option>
                  <option>1</option>
                  <option>1</option>
                </select>

                <div className={styles.formLabel}>預約教練</div>
                <div className={styles.cardContainer}>
                  <div className={styles.resCoach}>
                    {selectedCoach && (
                      <CoachCard
                        name={selectedCoach.coach_name}
                        skill={selectedCoach.skills}
                        imgSrc={`/${selectedCoach.coach_img}`}
                      />
                    )}
                  </div>
                </div>

                <div className={styles.btnContainer}>
                  <button className={styles.btnSend}>送出預約</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout3>
      {showModal && <ReserveModal onClose={handleCloseModal} />}
    </>
  )
}
