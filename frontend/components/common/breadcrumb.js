import React from 'react'
import styles from './layout.module.css'

// TODO: make props and link, make use of useContext to pass variable to breadcrumb?

export default function Breadcrumb({ pageName = 'articles' }) {
  return (
    <>
      <div className={`${styles.bread}`}>首頁/課程</div>
    </>
  )
}
