// 會員登入 註冊 忘記密碼 更改密碼 的基本布局

import React from 'react'
import styles from '../../styles/sign-in.module.css'

export default function UserSignin({ title, description, children }) {
  return (
    <div className={styles.warp}>
      <div className={styles.user_title}>
        <h4 className={styles.h4}>{title}</h4>
      </div>
      <div className={styles.title_describe}>
        <p className={styles.p}>{description}</p>
      </div>
      <div className={styles.user_container}>{children}</div>
    </div>
  )
}
