import React from 'react'
import styles from '../../styles/mycheckbox.module.css'
export default function MyCheckBox() {
  return (
    <div className={styles.filter}>
      <div className={styles.checkboxWrapper}>
        <div className={styles.checkboxes}>
          <input
            type="checkbox"
            id="aerobic"
            name="aerobic"
            className={styles.checkbox}
          />
          <label htmlFor="aerobic">記住我</label>
        </div>
      </div>
    </div>
  )
}
