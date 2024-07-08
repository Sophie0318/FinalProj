// 註冊 的基本布局

import React from 'react'
import Navbar from '../common/navbar'
import Head from 'next/head'
import styles from '../../styles/user-sign-up.module.css'
import styles1 from '../../styles/sign-in.module.css'
import MyStepProcess from '../users/MyStepProcess'

export default function UserSignup({ title, description, children }) {
  const steps = ['輸入電子信箱', '輸入姓名', '創建密碼']
  const currentStep = 1 //從第一步開始
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
        {/* <MyStepProcess steps={steps}></MyStepProcess> */}
        <MyStepProcess steps={steps} currentStep={currentStep}></MyStepProcess>
        <div className={styles1.user_container}>{children}</div>
      </div>
    </>
  )
}
