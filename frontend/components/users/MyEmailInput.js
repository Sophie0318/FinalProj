import React, { useState, useEffect } from 'react'
import styles from '../../styles/sign-in.module.css'
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'
import { z } from 'zod'

const MyEmailInput = ({
  email,
  setEmail,
  errorMessage,
  setErrorMessage,
  showSuccessIcon,
  setShowSuccessIcon,
  checkEmailExists,
}) => {
  const [timer, setTimer] = useState(null)
  const [isFocused, setIsFocused] = useState(false)

  const emailSchema = z.string().email({ message: '電子信箱格式有誤' })

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    setShowSuccessIcon(false) //初始化成功icon
  }

  const handleBlur = () => {
    setIsFocused(false)
    if (email) {
      // 當輸入框失去焦點時，開始計時
      setTimer(
        setTimeout(async () => {
          const result = emailSchema.safeParse(email)
          if (!result.success) {
            setErrorMessage(result.error.errors[0].message)
          } else {
            setErrorMessage('')

            if (checkEmailExists) {
              // 發送請求檢查 email 是否已存在
              const res = await fetch(
                `http://localhost:3001/users/cheak_email`,
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ email }),
                }
              )
              //若是用戶輸入的mail是被註冊過的，給個模糊的錯誤提示
              const data = await res.json()
              if (data.exists) {
                setErrorMessage('資料錯誤，無法使用此電子郵件')
              } else {
                setShowSuccessIcon(true)
              }
            }
          }
        }, 100)
      )
    }
  }

  useEffect(() => {
    if (timer) {
      clearTimeout(timer)
    }

    return () => clearTimeout(timer)
  }, [email])

  const renderIcon = () => {
    if (errorMessage) {
      return <FaExclamationCircle className={styles.myiconError} />
    }
    if (showSuccessIcon && email && !errorMessage) {
      return <FaCheckCircle />
    }
    return null
  }

  return (
    <div className={styles.input_container}>
      <input
        className={`${styles.user_input} ${
          errorMessage ? styles.error_input : ''
        }`}
        type="email"
        id="email"
        name="email"
        required
        value={email}
        onChange={handleEmailChange}
        onBlur={handleBlur}
        placeholder="example@example.com"
        onFocus={() => setIsFocused(true)}
      />
      <div
        className={`${styles.myicon} ${errorMessage ? styles.myiconError : ''}`}
      >
        {renderIcon()}
      </div>
      {errorMessage && (
        <div className={styles.error_message}>
          <p className={styles.tomatoP}>{errorMessage}</p>
        </div>
      )}
    </div>
  )
}

export default MyEmailInput
