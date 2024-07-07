import React from 'react'
import styles from '../../styles/sign-in.module.css'
import styles2 from '../../styles/user-sign-up.module.css'
import MyPasswordInput from './MyPasswordInput'

const StepThree = ({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
}) => (
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
        <div style={{ width: '420px' }}>
          <MyPasswordInput
            password={password}
            setPassword={setPassword}
            style={{ width: '420px' }}
          />
        </div>
      </div>
    </div>
    <div className={styles.form_group_flex}>
      <div className={styles.form_group}>
        <div className={styles2.flex_row}>
          <div className={styles2.inline}>
            <h6 className={`${styles.h6} ${styles2.h6}`}>必填</h6>
          </div>
          <label className={styles.label} htmlFor="confirmPassword">
            <p className={`${styles.p} ${styles2.label_p}`}>再確認一次密碼</p>
          </label>
        </div>
        <div style={{ width: '420px' }}>
          <MyPasswordInput
            password={confirmPassword}
            setPassword={setConfirmPassword}
          />
        </div>
      </div>
    </div>
  </>
)

export default StepThree
