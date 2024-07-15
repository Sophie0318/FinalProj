import React, { useState, useEffect } from 'react'
import Layout3 from '@/components/layout/layout3'
import CardCarousel from '@/components/swiperCarousel/cardCarousel'
import CheckboxList from '@/components/lessons/checkboxList'
import styles from '@/styles/lesson.module.css'
import { IoSearch } from 'react-icons/io5'
import LessonCard from '@/components/lessons/lessonCard'
import LessonList from '@/components/lessons/lessonList'
import axios from 'axios'

export default function Index({ lessons }) {
  const [allLessons, setAllLessons] = useState([])
  const [filteredLessons, setFilteredLessons] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [searchKeyword, setSearchKeyword] = useState('')

  const renderLessonCard = (data) => {
    return (
      <LessonCard
        title={data.lesson_name}
        price={data.lesson_price}
        gym={data.gym_name}
        category={data.categories}
        imgSrc="/defaultImg.png"
      />
    )
  }

  const handleCategoryChange = (code_desc, isChecked) => {
    setSelectedCategories((prev) => {
      const newSelectedCategories = isChecked
        ? [...prev, code_desc]
        : prev.filter((cat) => cat !== code_desc)

      return newSelectedCategories
    })
  }

  const fetchLessons = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/lessons/api`, {
        params: {
          code_desc: selectedCategories.join('-'),
          keyword: searchKeyword,
        },
      })
      console.log('API response:', response.data)
      if (response.data.success) {
        setAllLessons(response.data.rows)
        setFilteredLessons(response.data.rows)
      }
    } catch (error) {
      console.error('Error fetching lessons:', error)
    }
  }

  const handleSearchInputChange = (e) => {
    setSearchKeyword(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    fetchLessons()
  }

  useEffect(() => {
    fetchLessons()
  }, [selectedCategories]) // 只在選擇的類別變更時重新獲取數據

  return (
    <>
      <Layout3 title="課程列表" pageName="lessons">
        <div className={styles.content}>
          <section className={`${styles.popular}`}>
            <div className="row px-0 mx-0 g-0">
              <div className="col-md-3 d-flex justify-content-md-end justify-content-center align-items-center">
                <h3 className="my-0">熱門課程</h3>
              </div>
              <div className="col-md-9 ps-3 py-5 overflow-hidden">
                <CardCarousel
                  cardMaxWidth="fit-content"
                  data={allLessons}
                  renderItem={renderLessonCard}
                />
              </div>
            </div>
          </section>
          <div className={styles.search}>
            <div className={styles.searchIcon}>
              <IoSearch />
            </div>
            <input
              type="text"
              name="search_input"
              className={styles.search_input}
              placeholder="請輸入關鍵字搜尋..."
              value={searchKeyword}
              onChange={handleSearchInputChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  handleSearchSubmit(e)
                }
              }}
            />
          </div>
          <div className={styles.filter}>
            <p className={styles.select}>請選擇類別 ｜</p>
            <div className={styles.checkboxWrapper}>
              <CheckboxList
                checked={selectedCategories}
                onCategoryChange={handleCategoryChange}
              />
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
