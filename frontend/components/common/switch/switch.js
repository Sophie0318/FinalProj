import React from 'react'
import styles from './switch.module.css'

export default function Switch({ isOn, handleToggle, }) {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className={styles.switchCheckbox}
        id={`switch-old`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && '#19394A' }}
        className={styles.switchLabel}
        htmlFor={`switch-old`}
      >
        <span className={styles.switchButton}></span>
      </label>
    </>
  )
}
