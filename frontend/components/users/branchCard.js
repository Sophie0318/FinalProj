import React from 'react'
import styles from './branchCard.module.css'

export default function BranchCard({ branch = 'myLessons' }) {
  const titleMap = {
    myLessons: '[我的課程]',
    myOrders: '[歷史訂單]',
    myReserves: '[我的預約]',
    myFavs: '[我的收藏]',
  }

  const iconMap = {
    myLessons: 'elderpeople.svg',
    myOrders: 'order.svg',
    myReserves: 'location_arrow.svg',
    myFavs: 'heart.svg',
  }

  const widthMap = {
    myLessons: '70px',
    myOrders: '123px',
    myReserves: '123px',
    myFavs: '123px',
  }

  // 判斷要用哪個 title 跟 icon
  const titleResult = titleMap[branch] || '[我的課程]'
  const iconResult = iconMap[branch] || 'elderpeople.svg'
  const widthResult = widthMap[branch] || '70px'

  return (
    <>
      <div className={styles.card}>
        <a href="#">
          <div className={styles.card_body2}>
            <h6 className={styles.h6_font}>{titleResult}</h6>
            <img
              style={{ width: `${widthResult}` }}
              src={`/users-img/${iconResult}`}
              alt={`${titleResult.slice(1, -1)}圖片`}
            />
          </div>
        </a>
      </div>
    </>
  )
}
