import React, { useEffect, useState } from 'react'
import LayoutUser from '@/components/layout/user-layout3'
import BranchCard from '@/components/users/branchCard'
// 待 import 進文章&場館卡片
import CoachCard from '@/components/coaches/coachCard'
import LessonCard from '@/components/lessons/lessonCard'
import styles from '@/styles/user-profile.module.css'

// 測試用資料，連到資料庫後要刪掉
// import coaches from '@/data/FavCoaches.json'
// import lessons from '@/data/FavLessons.json'

import axios from 'axios'
import { useAuth } from '@/context/auth-context'

export default function Favorites() {
  const { auth } = useAuth()
  const [coachFavorites, setCoachFavorites] = useState([])
  const [lessonFavorites, setLessonFavorites] = useState([])
  // 決定要用哪一個分支的卡片, 參數 branch=分支名稱, data=Array.map的v

  useEffect(() => {
    if (auth.token) {
      fetchFavorites()
      fetchLessonFavorites()
    }
  }, [auth.token])

  const fetchFavorites = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/users/favorites/${auth.id}`,
        {
          headers: { Authorization: `Bearer ${auth.token}` },
        }
      )
      if (response.data.success) {
        setCoachFavorites(response.data.favorites)
      }
    } catch (error) {
      console.error('Error fetching favorites:', error)
    }
  }

  const fetchLessonFavorites = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/users/favorites-lesson/${auth.id}`,
        {
          headers: { Authorization: `Bearer ${auth.token}` },
        }
      )
      if (response.data.success) {
        setLessonFavorites(response.data.favorites)
      }
    } catch (error) {
      console.error('Error fetching favorites:', error)
    }
  }

  const handleRemoveLessonFavorite = async (lessonId) => {
    try {
      await axios.delete('http://localhost:3001/users/remove-lesson-favorite', {
        data: { member_id: auth.id, lesson_id: lessonId },
        headers: { Authorization: `Bearer ${auth.token}` },
      })
      setLessonFavorites(
        lessonFavorites.filter((lesson) => lesson.lesson_id !== lessonId)
      )
    } catch (error) {
      console.error('移除課程收藏時發生錯誤:', error)
    }
  }

  const handleRemoveFavorite = async (coachId) => {
    try {
      await axios.delete('http://localhost:3001/users/remove-favorite', {
        data: { member_id: auth.id, coach_id: coachId },
        headers: { Authorization: `Bearer ${auth.token}` },
      })
      // 更新狀態，移除被取消收藏的教練
      setCoachFavorites(
        coachFavorites.filter((coach) => coach.coach_id !== coachId)
      )
    } catch (error) {
      console.error('移除收藏時發生錯誤:', error)
    }
  }
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
          <CoachCard
            name={data.name}
            skill={data.skills}
            imgSrc={data.imgSrc}
          />
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
            <h5>收藏的教練</h5>
            {coachFavorites.map((coach) => (
              <div className="resultGrid" key={coach.coach_id}>
                <CoachCard
                  key={coach.coach_id}
                  name={coach.coach_name}
                  skill={coach.skills}
                  imgSrc={`/${coach.coach_img}`}
                  isLiked={true}
                  onHeartClick={() => handleRemoveFavorite(coach.coach_id)}
                />
              </div>
            ))}
          </div>

          <div className={styles.fav_search}>
            <h5>收藏的課程</h5>
            {lessonFavorites.map((lesson) => (
              <div className="resultGrid" key={lesson.lesson_id}>
                <LessonCard
                  key={lesson.lesson_id}
                  title={lesson.lesson_name}
                  price={`NT$ ${lesson.lesson_price}`}
                  gym={lesson.gym}
                  category={lesson.skills}
                  imgSrc={`/${lesson.lesson_img}`}
                />
              </div>
            ))}
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
