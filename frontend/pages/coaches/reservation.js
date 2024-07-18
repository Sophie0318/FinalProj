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

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // 根據選擇的時間段獲取正確的日期時間字符串
      const timeSlotMap = {
        1: '2024-12-31 12:00:00',
        2: '2024-12-31 13:00:00',
        3: '2024-12-31 14:00:00',
        4: '2024-12-31 15:00:00',
      }
      const reserveTime = timeSlotMap[formData.timeSlot] || formData.timeSlot

      console.log('Sending data:', {
        reserve_name: formData.name,
        reserve_phone: formData.phone,
        reserve_email: formData.email,
        reserve_time: reserveTime,
        coach_id: selectedCoach.coach_id,
      })

      const response = await axios.post(
        'http://localhost:3001/users/add/coachReserve',
        {
          reserve_name: formData.name,
          reserve_phone: formData.phone,
          reserve_email: formData.email,
          reserve_time: reserveTime,
          coach_id: selectedCoach.coach_id,
        }
      )

      if (response.data.success) {
        setShowModal(true)
      } else {
        console.error('預約提交失敗:', response.data.message)
      }
    } catch (error) {
      console.error(
        '預約提交失敗:',
        error.response ? error.response.data : error.message
      )
    }
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleMemberDataCheckbox = (e) => {
    if (e.target.checked) {
      if (!auth.token) {
        router.push('/users/sign_in')
      } else {
        setFormData((prevData) => ({
          ...prevData,
          name: auth.name,
          phone: auth.mobile, // 使用 mobile 或 phone，取決於您在後端返回的字段名
          email: auth.email,
        }))
      }
    } else {
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
                  <option value="1">2024/12/31 12:00</option>
                  <option value="2">2024/12/31 13:00</option>
                  <option value="3">2024/12/31 14:00</option>
                  <option value="4">2024/12/31 15:00</option>
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
