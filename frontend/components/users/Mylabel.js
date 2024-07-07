import React from 'react'
import styles from '../../styles/sign-in.module.css'

const MyLabel = ({ htmlFor, children }) => {
  return (
    <label className={styles.p} htmlFor={htmlFor}>
      {children}
    </label>
  )
}

export default MyLabel
