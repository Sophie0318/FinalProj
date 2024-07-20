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
}) => {
  const [timer, setTimer] = useState(null)
  const [isFocused, setIsFocused] = useState(false)

  const emailSchema = z.string().email({ message: '電子信箱格式有誤' })

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleBlur = () => {
    setIsFocused(false)
    if (email) {
      // Start timer when the input loses focus
      setTimer(
        setTimeout(() => {
          const result = emailSchema.safeParse(email)
          if (!result.success) {
            setErrorMessage(result.error.errors[0].message)
          } else {
            setErrorMessage('')
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
