import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Checkbox from './checckbox'
import styles from '@/styles/lesson.module.css'

const CheckboxList = ({ onCategoryChange }) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3001/lessons/categories'
        )
        if (response.data.success) {
          setCategories(response.data.categories)
        }
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }

    fetchCategories()
    console.log(categories)
  }, [])

  // 處理複選框變化的函數
  const handleCheckboxChange = (code_desc, isChecked) => {
    console.log('Checkbox changed:', code_desc, isChecked)
    onCategoryChange(code_desc, isChecked)
  }

  return (
    <div className={styles.checkboxWrapper}>
      {categories.map((category, index) => (
        <Checkbox
          key={index}
          id={category.commontype_id}
          // categoryId={category.commontype_id}
          name={category.code_desc}
          label={category.code_desc}
          onChange={handleCheckboxChange}
        />
      ))}
    </div>
  )
}
export default CheckboxList
