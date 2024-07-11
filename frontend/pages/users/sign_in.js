// SignIn.js

import React, { useState } from 'react'
import styles from '../../styles/sign-in.module.css'
import { FaAngleRight } from 'react-icons/fa'
import UserSignin from '../../components/layout/user-layout1'
import MyEmailInput from '@/components/users/MyEmailInput'
import MyPasswordInput from '@/components/users/MyPasswordInput'
import MyBtn from '@/components/users/MyBtn'
import MyCheckBox from '@/components/users/MyCheckBox'
import Link from 'next/link'
import { useAuth } from '../../context/auth-context'
import { useRouter } from 'next/router'

export default function SignIn() {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('') // 清除之前的錯誤信息

    try {
      const success = await login(email, password) // 假設 login 函數直接返回成功或失敗的布爾值
      if (success) {
        console.log('登入成功')
        router.push('/')
      } else {
        setError('登入失敗，請檢查您的電子郵件和密碼')
      }
    } catch (error) {
      console.error('登入過程中發生錯誤:', error)
      setError('登入過程中發生錯誤，請稍後再試')
    }
  }

  return (
    <>
      <UserSignin
        title="登入"
        description="請輸入您的電子信箱及密碼進行登入，也可以選擇其他帳號登入"
      >
        <form onSubmit={handleSubmit} noValidate>
          <div className={styles.form_group}>
            <div className={styles.form_group_flex}>
              <label className={styles.user_label} htmlFor="email">
                <p className={styles.p}>電子信箱</p>
              </label>
              <MyEmailInput email={email} setEmail={setEmail} />
            </div>
          </div>
          <div className={styles.form_group}>
            <label className={styles.user_label} htmlFor="password">
              <p className={styles.p}>密碼</p>
            </label>
            <div className={styles.form_group_flex}>
              <MyPasswordInput password={password} setPassword={setPassword} />
            </div>
          </div>

          <div className={styles.flex}>
            <div className={styles.form_check}>
              <MyCheckBox />
            </div>

            <MyBtn buttonText="立即登入" />
          </div>
        </form>

        <div className={styles.forget_password}>
          <Link className={styles.a} href="forget_password">
            <FaAngleRight />
            <span className={styles.p}>我忘記密碼了</span>
          </Link>
        </div>
        <a className={styles.a} href="sign_up">
          <p className={styles.p}>還不是會員?那快點加入我們開始運動吧</p>
        </a>
        <div className={styles.warp2}>
          <div className={styles.third_party_login}>
            <a className={styles.a} href="#">
              <img src="/users-img/Logo-google-icon.svg" alt="google icon" />
              <p className={styles.p}>以Google帳號登入</p>
            </a>
          </div>
          <div className={styles.third_party_login}>
            <a className={styles.a} href="#">
              <img src="/users-img/Facebook_icon.svg" alt="facebook icon" />
              <p className={styles.p}>以Facebook帳號登入</p>
            </a>
          </div>
        </div>
      </UserSignin>
    </>
  )
}
