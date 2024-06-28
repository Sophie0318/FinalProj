import React, { useEffect, useState } from 'react'
import Layout2 from '@/components/layout/layout2'
import styles from '@/styles/coach.module.css'
import Carousel from '@/components/carousel'
import { IoSearch, IoHeart } from 'react-icons/io5'

export default function Index() {
  return (
    <>
      <Layout2 title="教練列表" pageName="coaches">
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
              <div className={styles.coachCard}>
                <img
                  src="/coach4.jpg"
                  alt="描述圖片內容"
                  className={styles.img}
                />
                <div className={styles.overlay}>
                  <div className={styles.coach}>
                    <div className={styles.coachName}>李安妮</div>
                    <div class={styles.heart}>
                      <IoHeart />
                    </div>
                  </div>
                  <div className={styles.coachSkill}>心肺/有氧</div>
                </div>
              </div>
              <div className={styles.coachCard}>
                <img
                  src="/coach4.jpg"
                  alt="描述圖片內容"
                  className={styles.img}
                />
                <div className={styles.overlay}>
                  <div className={styles.coach}>
                    <div className={styles.coachName}>李安妮</div>
                    <div class={styles.heart}>
                      <IoHeart />
                    </div>
                  </div>
                  <div className={styles.coachSkill}>心肺/有氧</div>
                </div>
              </div>
              <div className={styles.coachCard}>
                <img
                  src="/coach4.jpg"
                  alt="描述圖片內容"
                  className={styles.img}
                />
                <div className={styles.overlay}>
                  <div className={styles.coach}>
                    <div className={styles.coachName}>李安妮</div>
                    <div class={styles.heart}>
                      <IoHeart />
                    </div>
                  </div>
                  <div className={styles.coachSkill}>心肺/有氧</div>
                </div>
              </div>
              <div className={styles.coachCard}>
                <img
                  src="/coach4.jpg"
                  alt="描述圖片內容"
                  className={styles.img}
                />
                <div className={styles.overlay}>
                  <div className={styles.coach}>
                    <div className={styles.coachName}>李安妮</div>
                    <div class={styles.heart}>
                      <IoHeart />
                    </div>
                  </div>
                  <div className={styles.coachSkill}>心肺/有氧</div>
                </div>
              </div>
              <div className={styles.coachCard}>
                <img
                  src="/coach4.jpg"
                  alt="描述圖片內容"
                  className={styles.img}
                />
                <div className={styles.overlay}>
                  <div className={styles.coach}>
                    <div className={styles.coachName}>李安妮</div>
                    <div class={styles.heart}>
                      <IoHeart />
                    </div>
                  </div>
                  <div className={styles.coachSkill}>心肺/有氧</div>
                </div>
              </div>
              <div className={styles.coachCard}>
                <img
                  src="/coach4.jpg"
                  alt="描述圖片內容"
                  className={styles.img}
                />
                <div className={styles.overlay}>
                  <div className={styles.coach}>
                    <div className={styles.coachName}>李安妮</div>
                    <div class={styles.heart}>
                      <IoHeart />
                    </div>
                  </div>
                  <div className={styles.coachSkill}>心肺/有氧</div>
                </div>
              </div>
              <div className={styles.coachCard}>
                <img
                  src="/coach4.jpg"
                  alt="描述圖片內容"
                  className={styles.img}
                />
                <div className={styles.overlay}>
                  <div className={styles.coach}>
                    <div className={styles.coachName}>李安妮</div>
                    <div class={styles.heart}>
                      <IoHeart />
                    </div>
                  </div>
                  <div className={styles.coachSkill}>心肺/有氧</div>
                </div>
              </div>
              <div className={styles.coachCard}>
                <img
                  src="/coach4.jpg"
                  alt="描述圖片內容"
                  className={styles.img}
                />
                <div className={styles.overlay}>
                  <div className={styles.coach}>
                    <div className={styles.coachName}>李安妮</div>
                    <div class={styles.heart}>
                      <IoHeart />
                    </div>
                  </div>
                  <div className={styles.coachSkill}>心肺/有氧</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout2>
    </>
  )
}
