import React, { useEffect, useState } from 'react'
import LayoutUser from '@/components/layout/user-layout3'
import Select from '@/components/common/select/select'
import styles from '@/styles/user-bookings.module.css'
import axios from 'axios'
import { useAuth } from '@/context/auth-context'

export default function LessonsOrders() {
  const [bookings, setBookings] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const { auth } = useAuth()

  const fetchBookings = async () => {
    if (!auth.id) return

    setIsLoading(true)
    setError(null)

    try {
      const response = await axios.get(
        `http://localhost:3001/users/bookings/${auth.id}`
      )
      if (response.data.success) {
        setBookings(response.data.bookings)
      } else {
        throw new Error('Failed to fetch bookings')
      }
    } catch (error) {
      console.error('獲取預約失敗:', error)
      setError('無法加載預約數據。請稍後再試。')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchBookings()
  }, [auth.id])

  if (isLoading) return <div>加載中...</div>
  if (error) return <div>錯誤: {error}</div>

  return (
    <LayoutUser title="myBookings">
      <div className={styles.userinfo_bookings}>
        <div className={styles.user_select}>
          {/* <Select options={options} /> */}
        </div>
        <div className={styles.year_num}>2024年</div>
        <div className={styles.month}>
          <div className={styles.num}>1月</div>
          <div className={styles.num}>2月</div>
          <div className={styles.num}>3月</div>
          <div className={styles.num}>4月</div>
          <div className={styles.num}>5月</div>
          <div className={styles.num}>6月</div>
          <div className={styles.num}>7月</div>
          <div className={styles.num}>8月</div>
          <div className={styles.num}>9月</div>
          <div className={styles.num}>10月</div>
          <div className={styles.num}>11月</div>
          <div className={styles.num}>12月</div>
        </div>
        <div className={styles.date_card}>
          <div className={styles.card}>
            <div className={styles.num}>22</div>
            <div className={styles.week}>
              <h4>星期三</h4>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.num}>22</div>
            <div className={styles.week}>
              <h4>星期三</h4>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.num}>22</div>
            <div className={styles.week}>
              <h4>星期三</h4>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.num}>22</div>
            <div className={styles.week}>
              <h4>星期三</h4>
            </div>
          </div>
        </div>
        <div className={styles.schedule}>
          {bookings.length === 0 ? (
            <p>目前沒有預約。</p>
          ) : (
            bookings.map((booking, index) => (
              <div key={index} className={styles.schedule_item}>
                <div>
                  <img src="/users-img/icon-notebook.svg" alt="" />
                </div>
                <div className={styles.flex}>
                  <h5>{booking.coach_name} 教練</h5>
                  <div className={styles.time_and_gym}>
                    <h6>
                      {new Date(booking.reserve_time).toLocaleDateString()}
                    </h6>
                    <h6>
                      {new Date(booking.reserve_time).toLocaleTimeString()}
                    </h6>
                    <h6>{booking.gym_name}</h6>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </LayoutUser>
  )
}
