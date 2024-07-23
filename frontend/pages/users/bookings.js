import React, { useEffect, useState, useCallback } from 'react'
import LayoutUser from '@/components/layout/user-layout3'
import Select from '@/components/common/select/select'
import styles from '@/styles/user-bookings.module.css'
import axios from 'axios'
import { useAuth } from '@/context/auth-context'
import Loader from '@/components/loader'

export default function LessonsOrders() {
  const [bookings, setBookings] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const { auth } = useAuth()
  const [selectedMonth, setSelectedMonth] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)

  const fetchBookings = useCallback(async () => {
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
  }, [auth.id])

  useEffect(() => {
    fetchBookings()
  }, [fetchBookings])

  useEffect(() => {
    if (selectedMonth && selectedDate) {
      const filtered = bookings.filter((booking) => {
        const bookingDate = new Date(booking.reserve_time)
        return (
          bookingDate.getMonth() + 1 === selectedMonth &&
          bookingDate.getDate() === selectedDate
        )
      })
      setBookings(filtered)
    } else {
      setBookings(bookings)
    }
  }, [selectedMonth, selectedDate, bookings])

  if (isLoading)
    return (
      <div>
        <Loader />
      </div>
    )
  if (error) return <div>錯誤: {error}</div>

  return (
    <LayoutUser title="myBookings">
      <div className={styles.userinfo_bookings}>
        <div className={styles.user_select}>
          {/* <Select options={options} /> */}
        </div>
        <div className={styles.month}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
            <div
              key={month}
              className={`${styles.num} ${
                selectedMonth === month ? styles.active : ''
              }`}
              onClick={() => setSelectedMonth(month)}
            >
              {month}月
            </div>
          ))}
        </div>
        <div className={styles.date_card}>
          {[22, 23, 24, 25].map((date, index) => (
            <div
              key={date}
              className={`${styles.card} ${
                selectedDate === date ? styles.active : ''
              }`}
              onClick={() => setSelectedDate(date)}
            >
              <div className={styles.num}>{date}</div>
              <div className={styles.week}>
                <h4>星期{['三', '四', '五', '六'][index]}</h4>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.schedule}>
          {bookings.length === 0 ? (
            <p>目前沒有預約。</p>
          ) : (
            bookings.map((booking, index) => (
              <div key={index} className={styles.schedule_item}>
                <img
                  src="/users-img/icon-notebook.svg"
                  alt=""
                  className={styles.iconImg}
                />
                <div className={styles.flex}>
                  <h5>{booking.coach_name} 教練</h5>
                  <div className={styles.time_and_gym}>
                    <h6>
                      {new Date(booking.reserve_time).toLocaleString('zh-TW', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false,
                        hourCycle: 'h23',
                      })}
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
