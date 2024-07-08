import React from 'react'
import styles from '../../styles/mycheckbox.module.css'
export default function MyCheckBox() {
  return (
    <div className={styles.filter}>
      <p className={styles.select}>請選擇類別 ｜</p>
      <div className={styles.checkboxWrapper}>
        <div className={styles.checkboxes}>
          <input
            type="checkbox"
            id="aerobic"
            name="aerobic"
            className={styles.checkbox}
          />
          <label htmlFor="aerobic">有氧</label>
        </div>

        <div className={styles.checkboxes}>
          <input
            type="checkbox"
            id="stretching"
            name="stretching"
            className={styles.checkbox}
          />
          <label htmlFor="stretching">伸展</label>
        </div>

        <div className={styles.checkboxes}>
          <input
            type="checkbox"
            id="muscle"
            name="muscle"
            className={styles.checkbox}
          />
          <label htmlFor="muscle">增肌</label>
        </div>

        <div className={styles.checkboxes}>
          <input
            type="checkbox"
            id="weight"
            name="weight"
            className={styles.checkbox}
          />
          <label htmlFor="weight">重訓</label>
        </div>
      </div>
    </div>
  )
}
