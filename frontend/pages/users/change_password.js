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
              style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
            >
              <MyPasswordInput
                password={newPassword}
                setPassword={setNewPassword}
              />
              <MyPasswordInput
                password={confirmPassword}
                setPassword={setConfirmPassword}
              />
            </div>
            <MyBtn buttonText="送出" />
          </form>
        </div>
      </UserSignin>
    </>
  )
}
