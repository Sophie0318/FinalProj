import React, { useState } from 'react'
import styles from '../../styles/forgot-password.module.css'
import UserSignin from '../../components/layout/user-layout1'
import MyPasswordInput from '@/components/users/MyPasswordInput'
import MyBtn from '@/components/users/MyBtn'

export default function ForgetPassword() {
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (newPassword !== confirmPassword) {
      alert('密碼不一致')
      return
    }

    console.log('送出', newPassword)
  }

  return (
    <>
      <UserSignin title="更改密碼" description="請在下方輸入您的新密碼">
        <div className={styles.userContainer}>
          <form className={styles.userForm} onSubmit={handleSubmit}>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}
            >
              <div className={styles.form_group_flex}>
                <label className={styles.user_label} htmlFor="password">
                  <p className={styles.p}>輸入您的新密碼</p>
                </label>
                <MyPasswordInput
                  password={newPassword}
                  setPassword={setNewPassword}
                />
              </div>
              <div className={styles.form_group_flex}>
                <label className={styles.user_label} htmlFor="passowrd">
                  <p className={styles.p}>確認新密碼</p>
                </label>
                <MyPasswordInput
                  password={confirmPassword}
                  setPassword={setConfirmPassword}
                />
              </div>
            </div>
            <MyBtn buttonText="送出" />
          </form>
        </div>
      </UserSignin>
    </>
  )
}
