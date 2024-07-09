import React, { useState, useEffect } from 'react'
import Layout3 from '@/components/layout/layout3'
import Carousel from '@/components/carousel'
import CheckboxList from '@/components/lessons/checkboxList'
import styles from '@/styles/lesson.module.css'
import { IoSearch } from 'react-icons/io5'
import LessonList from '@/components/lessons/lessonList'
import axios from 'axios'

export default function Index() {
  // 用於存儲所有課程的狀態
  const [allLessons, setAllLessons] = useState([])
  // 用於存儲篩選後的課程的狀態
  const [filteredLessons, setFilteredLessons] = useState([])
  // 用於存儲選中的類別的狀態
  const [selectedCategories, setSelectedCategories] = useState([])

  // 處理類別選擇變化的函數
  const handleCategoryChange = (categoryId, isChecked) => {
    console.log('handleCategoryChange called:', categoryId, isChecked)
    let newSelectedCategories
    if (isChecked) {
      newSelectedCategories = [...selectedCategories, categoryId]
    } else {
      newSelectedCategories = selectedCategories.filter(
        (id) => id !== categoryId
      )
    }
    console.log('New selected categories:', newSelectedCategories)
    setSelectedCategories(newSelectedCategories)

    // 根据选中的类别筛选课程
    const newFilteredLessons = allLessons.filter(
      (lesson) =>
        newSelectedCategories.length === 0 ||
        newSelectedCategories.includes(lesson.commontype_id)
    )
    console.log('Filtered lessons:', newFilteredLessons)
    setFilteredLessons(newFilteredLessons)
  }

  // 在組件加載時獲取所有課程
  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await axios.get('http://localhost:3001/lessons/api')
        if (response.data.success) {
          setAllLessons(response.data.rows)
          setFilteredLessons(response.data.rows) // 初始時顯示所有課程
        }
      } catch (error) {
        console.error('Error fetching lessons:', error)
      }
    }

    fetchLessons()
  }, [])

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
              <CheckboxList onCategoryChange={handleCategoryChange} />
            </div>
          </div>
          <div className={styles.result}>
            <p className={styles.result_title}>篩選結果</p>
            <LessonList lessons={filteredLessons} />
          </div>
        </div>
      </Layout3>
    </>
  )
}
