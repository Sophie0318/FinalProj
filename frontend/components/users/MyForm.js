import React from 'react'
import styles from '../../styles/sign-in.module.css'

import MyEmailInput from './MyEmailInput'
import MyPasswordInput from './MyPasswordInput'

const SignInForm = ({
  email,
  setEmail,
  password,
  setPassword,
  rememberMe,
  setRememberMe,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.form_group_flex}>
        <MyEmailInput email={email} setEmail={setEmail} />
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
          <label className={styles.form_check_label} htmlFor="flexCheckDefault">
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
  )
}

export default SignInForm
