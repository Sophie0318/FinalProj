import React, { useEffect, useState } from 'react'
import Layout3 from '@/components/layout/layout3'
import styles from '@/styles/coach.module.css'
import Carousel from '@/components/carousel'
import { IoSearch, IoHeart } from 'react-icons/io5'
import CoachCard from '@/components/coaches/coacgCard'

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
              placeholder="請輸入地址搜尋..."
            />
          </div>
          <div className={styles.filter}>
            <p className={styles.select}>請選擇類別 ｜</p>
            <div class={styles.checkboxes}>
              <input
                type="checkbox"
                id="male"
                name="sex"
                className={styles.checkbox}
              />
              <label htmlFor="male">男性</label>
            </div>

            <div class={styles.checkboxes}>
              <input
                type="checkbox"
                id="female"
                name="female"
                className={styles.checkbox}
              />
              <label htmlFor="female">女性</label>
            </div>

            <div class={styles.checkboxes}>
              <input
                type="checkbox"
                id="homo"
                name="homo"
                className={styles.checkbox}
              />
              <label htmlFor="homo">同性</label>
            </div>

            <div class={styles.checkboxes}>
              <input
                type="checkbox"
                id="other"
                name="other"
                className={styles.checkbox}
              />
              <label htmlFor="other">其他</label>
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
