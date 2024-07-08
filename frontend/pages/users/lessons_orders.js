import React from 'react'
import LayoutUser from '@/components/layout/user-layout2'
import LessonCard from '@/components/lessons/lessonCard'
import styles from '@/styles/user-lessonsorders.module.css'

// 測試用資料，連到資料庫後要刪掉
import lessons from '@/data/FavLessons.json'

export default function LessonsOrders() {
  // 產出卡片的函式, 參數 data=Array.map的v
  const renderCard = (data) => {
    return (
      <LessonCard
        title={data.title}
        price={data.price}
        gym={data.gym}
        category={data.category}
        imgSrc={data.imgSrc}
      />
    )
  }
  return (
    <>
      <LayoutUser title="myLessons">
        <div className={styles.userinfo_lessonsorders}>
          <div className={styles.user_title}>
            <h4>我的課程</h4>
          </div>
          <div className={styles.user_select}>
            <select id="" name="">
              <option value="0">下拉選擇類別</option>
              <option value="1">已預約的場館</option>
              <option value="2">已預約的課程</option>
              {/* <!-- 青菜加加 --> */}
            </select>
          </div>
          <div className={styles.lessons_orders_search}>
            {lessons.map((v, i) => {
              return (
                <div className="resultGrid" key={i}>
                  {renderCard(v)}
                </div>
              )
            })}
          </div>

          <div className={styles.pagination}>
            <div
              style={{
                width: '450px',
                height: '50px',
                backgroundColor: '#BBB',
              }}
            >
              pagination
            </div>
          </div>
        </div>
      </LayoutUser>
    </>
  )
}
