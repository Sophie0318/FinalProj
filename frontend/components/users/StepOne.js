import React, { useState } from 'react'
import styles from '../../styles/sign-in.module.css'
import styles2 from '../../styles/user-sign-up.module.css'
import MyEmailInput from './MyEmailInput'

const StepOne = ({ email, setEmail }) => {
  const [emailError, setEmailError] = useState('')

  return (
    <>
      <div className={styles.form_group_flex}>
        <div className={styles.form_group}>
          <div className={styles2.flex_row}>
            <div className={styles2.inline}>
              <h6 className={`${styles.h6} ${styles2.h6}`}>必填</h6>
            </div>
            <label className={styles.label} htmlFor="name">
              <p className={`${styles.p} ${styles2.label_p}`}>
                您的電子信箱是?
              </p>
            </label>
          </div>
          <div className={styles2.email_input_container}>
            <MyEmailInput
              email={email}
              setEmail={setEmail}
              errorMessage={emailError}
              setErrorMessage={setEmailError}
              showSuccessIcon={false}
            />
          </div>
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
}

export default StepOne
