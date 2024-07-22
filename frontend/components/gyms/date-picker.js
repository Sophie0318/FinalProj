import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import styles from './date-picker.module.css'
import 'react-datepicker/dist/react-datepicker.css'
import { setHours, setMinutes } from 'date-fns'

export default function GymDatePicker() {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 17)
  )

  const filterPassedTime = (time) => {
    const currentDate = new Date()
    const selectedDate = new Date(time)

    return currentDate.getTime() < selectedDate.getTime()
  }

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      filterTime={filterPassedTime}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={60}
      timeCaption="time"
      minTime={setHours(setMinutes(new Date(), 0), 9)}
      maxTime={setHours(setMinutes(new Date(), 0), 20)}
      dateFormat="yyyy-MM-dd HH:mm"
      className={styles.customDatePicker}
    />
  )
}
