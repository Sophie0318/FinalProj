import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../../styles/sign-in.module.css'
import {
  FaAngleRight,
  FaEye,
  FaEyeSlash,
  FaCheckCircle,
  FaExclamationCircle,
} from 'react-icons/fa'

import UserSignin from '../../components/layout/user-layout1'
import MyEmailInput from '@/components/users/MyEmailInput'
import MyPasswordInput from '@/components/users/MyPasswordInput'
import MyBtn from '@/components/users/MyBtn'
import Link from 'next/link'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // 處理表單提交邏輯
    console.log('Form submitted', { email, password, rememberMe })
  }

  return (
    <>
      <UserSignin
        title="登入"
        description="請輸入您的電子信箱及密碼進行登入，也可以選擇其他帳號登入"
      >
        <form onSubmit={handleSubmit} noValidate>
          <div className={styles.form_group_flex}>
            <MyEmailInput email={email} setEmail={setEmail} />
          </div>
          <div className={styles.form_group_flex}>
            <MyPasswordInput password={password} setPassword={setPassword} />
          </div>

          <div className={styles.flex}>
            <div className={styles.form_check}>
              <input
                type="checkbox"
                id="flexCheckDefault"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label
                className={styles.form_check_label}
                htmlFor="flexCheckDefault"
              >
                <p className={styles.p}>記住我</p>
              </label>
            </div>
            <MyBtn buttonText="立即登入" />
          </div>
        </form>

        <div className={styles.forget_password}>
          <Link className={styles.a} href="#">
            <FaAngleRight />
            <span className={styles.p}>我忘記密碼了</span>
          </Link>
        </div>
        <a className={styles.a} href="#">
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
