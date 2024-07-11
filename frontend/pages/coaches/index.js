import React, { useEffect, useState } from 'react'
import Layout3 from '@/components/layout/layout3'
import styles from '@/styles/coach.module.css'
import Carousel from '@/components/carousel'
import { IoSearch, IoHeart } from 'react-icons/io5'
import CoachCard from '@/components/coaches/coachCard'

export default function Index() {
  const coaches = [
    { name: '李安妮', skill: '心肺/有氧', imgSrc: '/coach4.jpg' },
    { name: '林大衛', skill: '重訓/增肌', imgSrc: '/coach3.jpg' },
    { name: '林大衛', skill: '重訓/增肌', imgSrc: '/coach4.jpg' },
    { name: '林大衛', skill: '重訓/增肌', imgSrc: '/coach4.jpg' },
    { name: '林大衛', skill: '重訓/增肌', imgSrc: '/coach4.jpg' },
    // 添加更多教练数据
  ]
  return (
    <>
      <Layout3 title="教練列表" pageName="coaches">
        <div className={styles.content}>
          <div className={styles.search}>
            <div className={styles.searchIcon}>
              <IoSearch />
            </div>
            <input
              type="text"
              name="search_input"
              className={styles.search_input}
              placeholder="請輸入關鍵字搜尋..."
            />
          </div>
          <div className={styles.filter}>
            <p className={styles.select}>請選擇類別 ｜</p>
            <div className={styles.checkboxWrapper}>
              <div className={styles.checkboxes}>
                <input
                  type="checkbox"
                  id="aerobic"
                  name="aerobic"
                  className={styles.checkbox}
                />
                <label htmlFor="aerobic">有氧</label>
              </div>

              <div className={styles.checkboxes}>
                <input
                  type="checkbox"
                  id="stretching"
                  name="stretching"
                  className={styles.checkbox}
                />
                <label htmlFor="stretching">伸展</label>
              </div>

              <div className={styles.checkboxes}>
                <input
                  type="checkbox"
                  id="muscle"
                  name="muscle"
                  className={styles.checkbox}
                />
                <label htmlFor="muscle">增肌</label>
              </div>

              <div className={styles.checkboxes}>
                <input
                  type="checkbox"
                  id="weight"
                  name="weight"
                  className={styles.checkbox}
                />
                <label htmlFor="weight">重訓</label>
              </div>

              <div className={styles.checkboxes}>
                <input
                  type="checkbox"
                  id="cardio"
                  name="cardio"
                  className={styles.checkbox}
                />
                <label htmlFor="cardio">心肺</label>
              </div>

              <div className={styles.checkboxes}>
                <input
                  type="checkbox"
                  id="swimming"
                  name="swimming"
                  className={styles.checkbox}
                />
                <label htmlFor="swimming">游泳</label>
              </div>

              <div className={styles.checkboxes}>
                <input
                  type="checkbox"
                  id="bodyweight"
                  name="bodyweight"
                  className={styles.checkbox}
                />
                <label htmlFor="bodyweight">徒手訓練</label>
              </div>
            </div>
          </div>
          <div className={styles.result}>
            <p className={styles.result_title}>篩選結果</p>
            <div className={styles.coachCards}>
              <div className={styles.coachCards}>
                {coaches.map((coach, index) => (
                  <CoachCard
                    key={index}
                    name={coach.name}
                    skill={coach.skill}
                    imgSrc={coach.imgSrc}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout3>
    </>
  )
}
