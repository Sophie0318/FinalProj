import React, { useEffect, useState } from 'react'
import Layout3 from '@/components/layout/layout3'
import styles from '@/styles/coachReservation.module.css'
import CoachCard from '@/components/coaches/coachCard'
import ReserveModal from '@/components/coaches/reserve-modal'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useAuth } from '@/context/auth-context'

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    timeSlot: '',
  })
  const [selectedCoach, setSelectedCoach] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const router = useRouter()
  const { auth } = useAuth()

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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleMemberDataCheckbox = (e) => {
    if (e.target.checked) {
      if (!auth.token) {
        // 如果用戶未登入，重定向到登入頁面
        router.push('/users/sign_in')
      } else {
        // 用戶已登入，填入會員資料
        setFormData((prevData) => ({
          ...prevData,
          name: auth.name,
          email: auth.email,
          // 如果有電話號碼，也可以加上
          // phone: auth.phone,
        }))
      }
    } else {
      // 取消勾選時，清空表單
      setFormData({
        name: '',
        phone: '',
        email: '',
        timeSlot: '',
      })
    }
  }

  return (
    <>
      <Layout3 title="教練預約" pageName="coaches">
        <div className={styles.content}>
          <div className={styles.reserveForm}>
            <div className={styles.formHead}>
              <p className={styles.formTitle}>預約人資訊 ｜</p>
              <div className={styles.checkboxes}>
                <input
                  type="checkbox"
                  id="member"
                  name="member"
                  className={styles.checkbox}
                  onChange={handleMemberDataCheckbox}
                />
                <label htmlFor="member">同會員資料</label>
              </div>
            </div>
            <div className={styles.formContainer}>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formLabel}>姓名</div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />

                <div className={styles.formLabel}>手機</div>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />

                <div className={styles.formLabel}>聯絡信箱</div>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />

                <div className={styles.formLabel}>選擇時段</div>
                <select
                  className={styles.timeSelect}
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleInputChange}
                >
                  <option value="">請選擇時段</option>
                  <option value="1">時段1</option>
                  <option value="2">時段2</option>
                  <option value="3">時段3</option>
                  <option value="4">時段4</option>
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
      {showModal && (
        <ReserveModal
          onClose={handleCloseModal}
          formData={formData}
          selectedCoach={selectedCoach}
        />
      )}
    </>
  )
}
