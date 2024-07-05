import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../../styles/sign-in.module.css'
import styles2 from '../../styles/user-sign-up.module.css'
// import UserSignin from '../../components/layout/user-layout1'

export default function SignUp() {
  // usestate來表示表單的不同步驟，並根據當前步驟rander相應的表單內容
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('密碼不一致，請重新輸入')
      return
    }
    // 驗證邏輯...施工中...
    console.log('提交表單', { email, name, password })
  }

  //點擊下一步時
  const handleNextStep = (e) => {
    e.preventDefault()
    setStep(step + 1)
  }
  //點擊上一步時
  const handlePrevStep = (e) => {
    e.preventDefault()
    setStep(step - 1)
  }
  // 第一步
  const renderStepOne = () => (
    <>
      <div className={styles.title_describe}>
        <p className={styles.p}>
          運動是保持健康的關鍵，請填寫以下資訊以創建您的帳號，讓健康和活力成為生活常態！
        </p>
      </div>
      <div className={styles.form_group_flex}>
        <div className={styles.form_group}>
          <div className={styles2.flex_row}>
            <div className={styles2.inline}>
              <h6 className={`${styles.h6} ${styles2.h6}`}>必填</h6>
            </div>
            <label className={styles.label} htmlFor="email">
              <p className={`${styles.p} ${styles2.label_p}`}>
                您的電子信箱是?
              </p>
            </label>
          </div>
          <input
            className={`${styles.user_input} ${styles2.form_group_input}`}
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles2.why_email}>
          <h6 className={`${styles.h6} ${styles2.why_email_h6}`}>
            為什麼需要電子信箱?
          </h6>
          <p className={styles.p}>
            電子信箱將做為您的帳號，當您忘記密碼時我們也將透過此信箱提供協助
          </p>
        </div>
      </div>
    </>
  )
  //   第二步
  const renderStepTwo = () => (
    <>
      <div className={styles.title_describe}>
        <p className={styles.p}>
          運動是保持健康的關鍵，請填寫以下資訊以創建您的帳號，讓健康和活力成為生活常態！
        </p>
      </div>
      <div className={styles.form_group_flex}>
        <div className={styles.form_group}>
          <div className={styles2.flex_row}>
            <div className={styles2.inline}>
              <h6 className={`${styles.h6} ${styles2.h6}`}>必填</h6>
            </div>
            <label className={styles.label} htmlFor="name">
              <p className={`${styles.p} ${styles2.label_p}`}>如何稱呼您?</p>
            </label>
          </div>
          <input
            className={`${styles.user_input} ${styles2.form_group_input}`}
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
      </div>
    </>
  )
  //   第三步
  const renderStepThree = () => (
    <>
      <div className={styles.title_describe}>
        <p className={styles.p}>
          運動是保持健康的關鍵，請填寫以下資訊以創建您的帳號，讓健康和活力成為生活常態！
        </p>
      </div>
      <div className={styles.form_group_flex}>
        <div className={styles.form_group}>
          <div className={styles2.flex_row}>
            <div className={styles2.inline}>
              <h6 className={`${styles.h6} ${styles2.h6}`}>必填</h6>
            </div>
            <label className={styles.label} htmlFor="password">
              <p className={`${styles.p} ${styles2.label_p}`}>請輸入密碼</p>
            </label>
          </div>
          <input
            className={`${styles.user_input} ${styles2.form_group_input}`}
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      </div>
      <div className={styles.form_group_flex}>
        <div className={styles.form_group}>
          <div className={styles2.flex_row}>
            <div className={styles2.inline}>
              <h6 className={`${styles.h6} ${styles2.h6}`}>必填</h6>
            </div>
            <label className={styles.label} htmlFor="password">
              <p className={`${styles.p} ${styles2.label_p}`}>再確認一次密碼</p>
            </label>
          </div>
          <input
            className={`${styles.user_input} ${styles2.form_group_input}`}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
      </div>
    </>
  )

  return (
    <div className={`${styles.warp} ${styles2.warp}`}>
      <div className={styles2.user_title}>
        <h4 className={styles.h4}>建立一個帳戶</h4>
      </div>
      <form onSubmit={handleSubmit}>
        {step === 1 && renderStepOne()}
        {step === 2 && renderStepTwo()}
        {step === 3 && renderStepThree()}
        <div className={styles2.form_group_row}>
          {step === 1 ? (
            <button
              className={styles2.btn_md_back}
              type="button"
              onClick={() => {
                /* 回首頁邏輯 */
              }}
            >
              <h6 className={styles.h6}>回首頁</h6>
            </button>
          ) : (
            <button
              className={styles2.btn_md_back}
              type="button"
              onClick={handlePrevStep}
            >
              <h6 className={styles.h6}>上一步</h6>
            </button>
          )}
          {step < 3 ? (
            <button
              className={styles.btn_md}
              type="button"
              onClick={handleNextStep}
            >
              <h6 className={styles.h6}>下一步</h6>
            </button>
          ) : (
            <button className={styles.btn_md} type="submit">
              <h6 className={styles.h6}>送出</h6>
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
