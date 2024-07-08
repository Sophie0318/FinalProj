import React from 'react'
import LayoutUser from '@/components/layout/user-layout3'
import BranchCard from '@/components/users/branchCard'
// 待 import 進文章&場館卡片
import CoachCard from '@/components/coaches/coacgCard'
import LessonCard from '@/components/lessons/lessonCard'
import styles from '@/styles/user-profile.module.css'

// 測試用資料，連到資料庫後要刪掉
import coaches from '@/data/FavCoaches.json'
import lessons from '@/data/FavLessons.json'

export default function Favorites() {
  // 決定要用哪一個分支的卡片, 參數 branch=分支名稱, data=Array.map的v
  const renderCard = (branch, data) => {
    switch (branch) {
      case 'lessons':
        return (
          <LessonCard
            title={data.title}
            price={data.price}
            gym={data.gym}
            category={data.category}
            imgSrc={data.imgSrc}
          />
        )
      case 'coaches':
        return (
          <CoachCard name={data.name} skill={data.skill} imgSrc={data.imgSrc} />
        )
      default:
        return (
          <div
            style={{
              width: '150px',
              height: '250px',
              backgroundColor: '#bbb',
              borderRadius: '50px',
            }}
          >
            placeholder, 資料或 branch 有錯
          </div>
        )
    }
  }

  return (
    <>
      <LayoutUser title="myFavs">
        <div className={styles.userinfo_profile}>
          <div className={styles.user_title}>
            <h4>我的收藏</h4>
          </div>
          <div className={styles.card_2}>
            <BranchCard branch="lessons" />
            <BranchCard branch="coaches" />
            <BranchCard branch="gyms" />
            <BranchCard branch="articles" />
          </div>
          <div className={styles.fav_search}>
            {lessons.map((v, i) => {
              return (
                <div className="resultGrid" key={i}>
                  {renderCard('lessons', v)}
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
