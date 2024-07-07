// 會員登入 註冊 忘記密碼 更改密碼 的基本布局

import React from 'react'
import Navbar from '../common/navbar'
import Head from 'next/head'
import styles from '../../styles/user-sign-up.module.css'
import styles1 from '../../styles/sign-in.module.css'
import MyStepProcess from '../users/MyStepProcess'

export default function UserSignup({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title ? title : ''}</title>
      </Head>
      <Navbar />
      <div className={`${styles.warp} ${styles1.warp}`}>
        <div className={styles.user_title}>
          <h4 className={styles1.h4}>{title}</h4>
        </div>
        <div className={styles1.title_describe}>
          <p className={styles1.p}>{description}</p>
        </div>
        <MyStepProcess></MyStepProcess>
        <div className={styles1.user_container}>{children}</div>
      </div>
    </>
  )
}
