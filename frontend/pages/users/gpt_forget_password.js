import React, { useState } from 'react'
import styles from '../../styles/forgot-password.module.css'
import UserSignin from '../../components/layout/user-layout1'
import MyEmailInput from '@/components/users/MyEmailInput'
import MyBtn from '@/components/users/MyBtn'

export default function ForgetPassword() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(
        'http://localhost:3001/users/test_forget_password',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        }
      )
      const data = await response.json()
      setMessage(data.message)
    } catch (error) {
      console.error('Error:', error)
      setMessage('發生錯誤，請稍後再試')
    }
  }

  return (
    <>
      <UserSignin
        title="忘記密碼"
        description="別擔心，請在下方輸入您的電子信箱以更改忘記的密碼"
      >
        <div className={styles.userContainer}>
          <form
            className={styles.userForm}
            action="/forget_password"
            method="post"
            onSubmit={handleSubmit}
          >
            <MyEmailInput email={email} setEmail={setEmail} />
            <MyBtn buttonText="送出" />
          </form>
        </div>
      </UserSignin>
    </>
  )
}
