import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../../../styles/forgot-password.module.css'
import UserSignin from '../../../components/layout/user-layout1'
import TestMyPasswordInput from '@/components/users/test_MyPasswordInput'
import TestMyBtn from '@/components/users/test_MyBtn'

export default function ForgetPassword() {
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()
  const { token } = router.query

  useEffect(() => {
    if (token) {
      fetch(`/verify_reset_token?token=${token}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Token verification failed')
          }
          return response.json()
        })
        .then((data) => {
          setMessage(data.message)
        })
        .catch((error) => {
          setError(error.message)
        })
    }
  }, [token])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (newPassword !== confirmPassword) {
      setError('密碼不匹配')
      return
    }

    try {
      const response = await fetch('/reset_password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, newPassword }),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await response.json()
      setMessage(data.message)
    } catch (error) {
      setError(error.message)
    }
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
                <TestMyPasswordInput
                  password={newPassword}
                  setPassword={setNewPassword}
                />
              </div>
              <div className={styles.form_group_flex}>
                <label className={styles.user_label} htmlFor="passowrd">
                  <p className={styles.p}>確認新密碼</p>
                </label>
                <TestMyPasswordInput
                  password={confirmPassword}
                  setPassword={setConfirmPassword}
                />
              </div>
            </div>
            <TestMyBtn buttonText="送出" />
          </form>
        </div>
      </UserSignin>
    </>
  )
}
