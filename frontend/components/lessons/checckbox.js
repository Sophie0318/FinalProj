import React from 'react'
import styles from '@/styles/lesson.module.css'

export default function Checkbox({ id, name, label, onChange }) {
  const handleChange = (e) => {
    console.log('Checkbox clicked:', id, e.target.checked)
    onChange(e.target.value, e.target.checked)
  }

  return (
    <div className={styles.checkboxes}>
      <input
        type="checkbox"
        id={id}
        value={id}
        name={name}
        className={styles.checkbox}
        onChange={handleChange}
      />
      <label htmlFor={id} className={styles.checkboxLabel}>
        {label}
      </label>
    </div>
  )
}
