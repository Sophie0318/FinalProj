import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LessonCard from './lessonCard'
import styles from '@/styles/lesson.module.css'

const LessonList = () => {
  const [lessons, setLessons] = useState([])

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await axios.get('http://localhost:3001/lessons/api')
        if (response.data.success) {
          console.log(response.data.rows) // 檢查返回的數據
          setLessons(response.data.rows)
        }
      } catch (error) {
        console.error('Error fetching lessons:', error)
      }
    }

    fetchLessons()
  }, [])

  return (
    <div className={styles.cards}>
      {lessons.map((lesson) => (
        <LessonCard
          key={lesson.lesson_id}
          title={lesson.lesson_name}
          price={`NT$ ${lesson.lesson_price}`}
          category={lesson.categories}
          gym={lesson.gym_name}
          imgSrc={`/${lesson.lesson_img}`}
        />
      ))}
    </div>
  )
}

export default LessonList
