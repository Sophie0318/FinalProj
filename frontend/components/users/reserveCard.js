import React from 'react'
import styles from './reserveCard.module.css'
import { FaDumbbell, FaLocationDot } from 'react-icons/fa6'

export default function ReserveCard() {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_background}>
          <FaDumbbell className={styles.card_icons} />
          {/* <i className="fa-solid fa-dumbbell"></i> */}
        </div>
        <div className={styles.card_body}>
          <p className={styles.num}>5/22</p>
          <p className={styles.p_font}>星期三</p>
          <div className={styles.flexbox}>
            <p className={styles.p_font}>
              下午<span className={styles.num}>3:00</span>
            </p>
            <p className={styles.p_font}>超派健身房</p>
          </div>
        </div>
      </div>
    </>
  )
}
