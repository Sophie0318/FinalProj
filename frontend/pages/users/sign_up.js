import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../../styles/sign-in.module.css'
import styles2 from '../../styles/user-sign-up.module.css'
// import UserSignin from '../../components/layout/user-layout1'

export default function SignUp() {
  return (
    <div className={`${styles.warp} ${styles2.warp}`}>
      <div className={styles2.user_title}>
        <h4 className={styles.h4}>建立一個帳戶</h4>
      </div>
      <div className={styles.title_describe}>
        <p className={styles.p}>
          運動是保持健康的關鍵，請填寫以下資訊以創建您的帳號，讓健康和活力成為生活常態！
        </p>
      </div>
      <div>
        {/* <img src="./pic/sign_up_process.svg" alt="註冊流程圖:步驟1-請輸入電子信箱" /> */}
      </div>
      <div className={styles.user_container}>
        <form action="#" method="post">
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
                className={styles.user_input}
                type="email"
                id="email"
                name="email"
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
          <div className={styles2.form_group_row}>
            <button className={styles2.btn_md_back} type="submit">
              <h6 className={styles.h6}>回到登入頁</h6>
            </button>
            <button className={styles.btn_md} type="submit">
              <h6 className={styles.h6}>下一步</h6>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
