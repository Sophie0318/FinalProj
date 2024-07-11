import React, { useEffect, useState, useCallback } from 'react'
import Layout3 from '@/components/layout/layout3'
import styles from '@/styles/coach.module.css'
import { IoSearch } from 'react-icons/io5'
import CoachList from '@/components/coaches/coachList'
import axios from 'axios'
import CheckboxList from '@/components/lessons/checkboxList'

export default function Index() {
  const [allCoaches, setAllCoaches] = useState([])
  const [filteredCoaches, setFilteredCoaches] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [searchKeyword, setSearchKeyword] = useState('')

  const handleCategoryChange = (code_desc, isChecked) => {
    setSelectedCategories((prev) => {
      const newSelectedCategories = isChecked
        ? [...prev, code_desc]
        : prev.filter((cat) => cat !== code_desc)

      console.log('New selected categories:', newSelectedCategories)

      // 只顯示選擇類別的課程
      const newFilteredCoaches = allCoaches.filter(
        (coach) =>
          newSelectedCategories.length === 0 ||
          newSelectedCategories.includes(coach.categories)
      )
      console.log('Filtered lessons:', newFilteredCoaches)
      setFilteredCoaches(newFilteredCoaches)

      return newSelectedCategories
    })
  }

  const fetchCoaches = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:3001/coaches/api`, {
        params: {
          code_desc: selectedCategories.join('-'),
          keyword: searchKeyword,
        },
      })
      console.log('API response:', response.data)
      if (response.data.success) {
        setAllCoaches(response.data.rows)
        setFilteredCoaches(response.data.rows)
      }
    } catch (error) {
      console.error('Error fetching coaches:', error)
    }
  }, [selectedCategories, searchKeyword])

  const handleSearchInputChange = (e) => {
    setSearchKeyword(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    fetchCoaches()
  }

  useEffect(() => {
    const fetchCoaches = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/coaches/api${
            selectedCategories.length > 0
              ? `?code_desc=${selectedCategories.join('-')}`
              : ''
          }`
        )
        console.log('API response:', response.data)
        if (response.data.success) {
          setAllCoaches(response.data.rows)
          setFilteredCoaches(response.data.rows)
        }
      } catch (error) {
        console.error('Error fetching lessons:', error)
      }
    }

    fetchCoaches()
  }, [selectedCategories, fetchCoaches])

  return (
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
          <div className={styles.coachCards}>
            <CoachList coaches={filteredCoaches} />
          </div>
        </div>
      </div>
    </Layout3>
  )
}
