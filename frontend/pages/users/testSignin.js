import React, { useState } from 'react'
import styles from '../../styles/sign-in.module.css'
import { FaAngleRight } from 'react-icons/fa'
import UserSignin from '../../components/layout/user-layout1'
import TestMyEmailInput from '@/components/users/test_MyEmailInput'
import TestMyPasswordInput from '@/components/users/test_MyPasswordInput'
import MyBtn from '@/components/users/MyBtn'
import MyCheckBox from '@/components/users/MyCheckBox'
import Link from 'next/link'
import { useAuth } from '../../context/auth-context'
import { useRouter } from 'next/router'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '../../configs/firebase'
import UserModal from '../../components/users/UserModal'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [error, setError] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [userMessage, setUserMessage] = useState('')
  const router = useRouter()
  const { login, googleLogin } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('') // 清除之前的錯誤信息

    if (emailError === '' && passwordError === '') {
      try {
        const success = await login(email, password)
        if (success) {
          setAlertMessage('登入成功')
          setUserMessage('讓我們一起開始健康的旅程吧!')
          setIsModalOpen(true)
          setTimeout(() => {
            setIsModalOpen(false)
            // 獲取 returnUrl 參數
            const returnUrl = new URLSearchParams(location.search).get(
              'returnUrl'
            )
            // 如果有 returnUrl，則跳轉到該 URL，否則跳轉到首頁
            if (returnUrl) {
              router.push(returnUrl)
            } else {
              router.push('/')
            }
          }, 1000)
        } else {
          setAlertMessage('登入失敗')
          setUserMessage('請檢查您的電子郵件和密碼')
          setIsModalOpen(true)
        }
      } catch (error) {
        console.error('登入過程中發生錯誤:', error)
        setError('登入過程中發生錯誤，請稍後再試')
      }
    }
  }

  return (
    <>
      <UserSignin
        title="登入"
        description="請輸入您的電子信箱及密碼進行登入，也可以選擇其他帳號登入"
      >
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.form_group}>
            <div className={styles.form_group_flex}>
              <label className={styles.user_label} htmlFor="email">
                <p className={styles.p}>電子信箱</p>
              </label>
              <TestMyEmailInput
                email={email}
                setEmail={setEmail}
                errorMessage={emailError}
                setErrorMessage={setEmailError}
                showSuccessIcon={false}
              />
            </div>
          </div>
          <div className={styles.form_group}>
            <label className={styles.user_label} htmlFor="password">
              <p className={styles.p}>密碼</p>
            </label>
            <div className={styles.form_group_flex}>
              <TestMyPasswordInput
                password={password}
                setPassword={setPassword}
                errorMessage={passwordError}
                setErrorMessage={setPasswordError}
              />
            </div>
          </div>

          <div className={styles.flex}>
            <div className={styles.form_check}>
              <MyCheckBox />
            </div>

            <MyBtn buttonText="立即登入" />
          </div>
        </form>
      </UserSignin>
      {isModalOpen && (
        <UserModal
          onClose={() => setIsModalOpen(false)}
          alertMessage={alertMessage}
          userMessage={userMessage}
        />
      )}
    </>
  )
}
