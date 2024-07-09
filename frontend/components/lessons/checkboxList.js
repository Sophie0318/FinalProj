import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Checkbox from './checckbox' // 確保文件名大小寫正確
import styles from '@/styles/lesson.module.css'

const CheckboxList = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3001/lessons/categories'
        ) // 修改 API 路徑
        if (response.data.success) {
          setCategories(response.data.categories)
        }
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }

    fetchCategories()
  }, [])

  return (
    <div className={styles.checkboxWrapper}>
      {categories.map((category, index) => (
        <Checkbox
          key={index}
          id={`category-${index}`}
          name={category.code_desc}
          label={category.code_desc}
        />
      ))}
    </div>
  )
}

export default CheckboxList
