import React from 'react'
import styles from '../../styles/sign-in.module.css'

const MyLabel = ({ htmlFor, children }) => {
  return (
    <div className={styles.form_group}>
      <label htmlFor={htmlFor}>{children}</label>
    </div>
  )
}

export default MyLabel
