import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import userLogin from '../../styles/sign-in.module.css'
import { FaAngleRight } from 'react-icons/fa'
// import '@fortawesome/fontawesome-free/css/all.min.css'

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // 處理表單提交邏輯
    console.log('Form submitted', { email, password, rememberMe })
  }

  return (
    <div className={userLogin.warp}>
      <div className={userLogin.user_title}>
        <h4 className={userLogin.h4}>登入</h4>
      </div>
      <div className={userLogin.title_describe}>
        <p className={userLogin.p}>
          請輸入您的電子信箱及密碼進行登入，也可以選擇其他帳號登入
        </p>
      </div>
      <div className={userLogin.user_container}>
        <form onSubmit={handleSubmit}>
          <div className={userLogin.form_group_flex}>
            <div className={userLogin.form_group}>
              <label className={userLogin.user_label} htmlFor="email">
                <p className={userLogin.p}>電子信箱</p>
              </label>
              <input
                className={userLogin.user_input}
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="請輸入您的電子信箱"
              />
            </div>
            <div className={userLogin.form_group}>
              <label
                className={userLogin.user_label}
                htmlFor={userLogin.password}
              >
                <p className={userLogin.p}>密碼</p>
              </label>
              <input
                className={userLogin.user_input}
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
          <div className={userLogin.flex}>
            <div className={userLogin.form_check}>
              <input
                type="checkbox"
                id="flexCheckDefault"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label
                className={userLogin.form_check_label}
                htmlFor="flexCheckDefault"
              >
                <p className={userLogin.p}>記住我</p>
              </label>
            </div>
            <div className={userLogin.form_group_center}>
              <button className={userLogin.btn_md} type="submit">
                <h6 className={userLogin.h6}>立刻登入</h6>
              </button>
            </div>
          </div>
        </form>
        <div className={userLogin.forget_password}>
          <a className={userLogin.a} href="#">
            <FaAngleRight />
            <span className={userLogin.p}>我忘記密碼了</span>
          </a>
        </div>
        <a className={userLogin.a} href="#">
          <p className={userLogin.p}>還不是會員?那快點加入我們開始運動吧</p>
        </a>
        <div className={userLogin.warp2}>
          <div className={userLogin.third_party_login}>
            <a className={userLogin.a} href="#">
              <img src="/users-img/Logo-google-icon.svg" alt="google icon" />
              <p className={userLogin.p}>以Google帳號登入</p>
            </a>
          </div>
          <div className={userLogin.third_party_login}>
            <a className={userLogin.a} href="#">
              <img src="/users-img/Facebook_icon.svg" alt="facebook icon" />
              <p className={userLogin.p}>以Facebook帳號登入</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserLogin
