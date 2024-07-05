import React from 'react'
import styles from '../../styles/sign-in.module.css'
import styles2 from '../../styles/user-sign-up.module.css'

const StepTwo = ({ name, setName }) => (
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

export default StepTwo
