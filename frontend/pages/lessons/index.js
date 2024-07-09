import React, { useEffect, useState } from 'react'
import Layout3 from '@/components/layout/layout3'
import Carousel from '@/components/carousel'
import CheckboxList from '@/components/lessons/checkboxList'
import styles from '@/styles/lesson.module.css'
import { IoSearch } from 'react-icons/io5'
import LessonList from '@/components/lessons/lessonList'

export default function Index() {
  const lessons = [
    {
      title: '阿罵武術',
      price: 'NT.900',
      category: '有氧/伸展',
      gym: '超派健身房',
      imgSrc: '/course4.jpg',
    },
    {
      title: '老人伸展',
      price: 'NT.1200',
      category: '瑜珈/伸展',
      gym: '原力覺醒健身房',
      imgSrc: '/course4.jpg',
    },
    {
      title: '肌力訓練',
      price: 'NT.600',
      category: '增肌/重訓',
      gym: '太極健身房',
      imgSrc: '/course4.jpg',
    },
    {
      title: '阿罵武術',
      price: 'NT.900',
      category: '有氧/伸展',
      gym: '超派健身房',
      imgSrc: '/course4.jpg',
    },
    {
      title: '阿罵武術',
      price: 'NT.900',
      category: '有氧/伸展',
      gym: '超派健身房',
      imgSrc: '/course4.jpg',
    },
    // 添加更多课程数据
  ]
  return (
    <>
      <Layout3 title="課程列表" pageName="lessons">
        <div className={styles.content}>
          <div className={styles.popularCard}>
            <section className="popular lessons">
              <div className="row">
                <Carousel carouselTitle="熱門課程" />
              </div>
              <div className="row">
                <div className="col d-flex justify-content-center">
                  <button className="btn btn-lg btn-primary text-white h4-font rounded-pill">
                    找課程
                  </button>
                </div>
              </div>
            </section>
          </div>
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
            <div className={styles.checkboxWrapper}>
              <CheckboxList />
            </div>
          </div>
          <div className={styles.result}>
            <p className={styles.result_title}>篩選結果</p>
            <LessonList />
          </div>
        </div>
      </Layout3>
    </>
  )
}
