import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../../../styles/forgot-password.module.css'
import UserSignin from '../../../components/layout/user-layout1'
import TestMyPasswordInput from '@/components/users/test_MyPasswordInput'
import TestMyBtn from '@/components/users/test_MyBtn'

export default function ForgetPassword() {
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [token, setToken] = useState('')
  const router = useRouter()

  useEffect(() => {
    // 從 URL 中獲取 token
    const { token } = router.query
    if (token) {
      setToken(token)
    }
  }, [router.query])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (newPassword !== confirmPassword) {
      alert('密碼不一致')
      return
    }

    if (!token) {
      alert('無效的 token')
      return
    }

    try {
      // 這裡應該發送請求來更改密碼
      const response = await fetch('??????????', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPassword, token }),
      })

      if (response.ok) {
        alert('密碼已成功更改')
        router.push('/login') // 重定向到登錄頁面
      } else {
        const data = await response.json()
        alert(`更改密碼失敗: ${data.message}`)
      }
    } catch (error) {
      console.error('Error:', error)
      alert('更改密碼時發生錯誤')
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
