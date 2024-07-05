import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../../styles/sign-in.module.css'
import { FaAngleRight } from 'react-icons/fa'
import UserSignin from '../../components/layout/userSignin'

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
        {/* 將原來的表單內容放在這裡 */}
        <form onSubmit={handleSubmit}>
          {/* ... 表單內容 ... */}
          <div className={styles.form_group_flex}>
            <div className={styles.form_group}>
              <label className={styles.user_label} htmlFor="email">
                <p className={styles.p}>電子信箱</p>
              </label>
              <input
                className={styles.user_input}
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="請輸入您的電子信箱"
              />
            </div>
            <div className={styles.form_group}>
              <label className={styles.user_label} htmlFor={styles.password}>
                <p className={styles.p}>密碼</p>
              </label>
              <input
                className={styles.user_input}
                type="password"
                id="password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="請輸入您的密碼"
              />
            </div>
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
            <div className={styles.form_group_center}>
              <button className={styles.btn_md} type="submit">
                <h6 className={styles.h6}>立刻登入</h6>
              </button>
            </div>
          </div>
        </form>
        {/* ... 其他內容 ... */}
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
