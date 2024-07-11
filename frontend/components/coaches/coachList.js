import React from 'react'
import CoachCard from './coachCard'
import styles from '@/styles/coach.module.css' // 更改为正确的 CSS 模块
import Link from 'next/link'

const CoachList = ({ coaches }) => {
  console.log('Coaches in CoachList:', coaches)
  return (
    <div className={styles.coachCards}>
      {coaches && coaches.length > 0 ? (
        coaches.map((coach) => (
          <div key={coach.coach_id} className={styles.cardWrapper}>
            <Link href={`/coaches/${coach.coach_id}`}>
              <CoachCard
                name={coach.coach_name}
                skill={coach.skills}
                imgSrc={`/${coach.coach_img}`}
              />
            </Link>
          </div>
        ))
      ) : (
        <p>沒有符合的教練</p>
      )}
    </div>
  )
}

export default CoachList