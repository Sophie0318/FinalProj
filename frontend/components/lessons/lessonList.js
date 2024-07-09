import React from 'react'
import LessonCard from './lessonCard'
import styles from '@/styles/lesson.module.css'

const LessonList = ({ lessons }) => {
  console.log('Lessons in LessonList:', lessons)
  return (
    <div className={styles.cards}>
      {lessons.length > 0 ? (
        lessons.map((lesson) => (
          <LessonCard
            key={lesson.lesson_id}
            title={lesson.lesson_name}
            price={`NT$ ${lesson.lesson_price}`}
            category={lesson.categories}
            gym={lesson.gym_name}
            imgSrc={`/${lesson.lesson_img}`}
          />
        ))
      ) : (
        <p>沒有符合的課程</p>
      )}
    </div>
  )
}
export default LessonList
