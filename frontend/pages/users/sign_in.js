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
import MyForm from '../../components/users/MyForm'

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
        <MyForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          rememberMe={rememberMe}
          setRememberMe={setRememberMe}
          handleSubmit={handleSubmit}
        />
        <div className={styles.forget_password}>
          <a className={styles.a} href="#">
            <FaAngleRight />
            <span className={styles.p}>我忘記密碼了</span>
          </a>
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
