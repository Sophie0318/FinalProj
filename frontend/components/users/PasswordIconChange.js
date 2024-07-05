import React, { useState, useEffect } from 'react'
import {
  FaEye,
  FaEyeSlash,
  FaCircleCheck,
  FaCircleExclamation,
} from 'react-icons/fa'
import styles from '../../styles/sign-in.module.css'

const PasswordIconChange = ({ newPassword, setNewPassword }) => {
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [iconType, setIconType] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    updateIconAndErrorMessage()
  }, [newPassword, confirmPassword])

  const updateIconAndErrorMessage = () => {
    if (confirmPassword) {
      if (newPassword === confirmPassword) {
        setIconType('check')
        setErrorMessage('')
      } else {
        setIconType('exclamation')
        setErrorMessage('密碼不匹配')
      }
    } else {
      setIconType('')
      setErrorMessage('')
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const renderIcon = () => {
    switch (iconType) {
      case 'check':
        return <FaCircleCheck />
      case 'exclamation':
        return <FaCircleExclamation />
      default:
        return showPassword ? <FaEye /> : <FaEyeSlash />
    }
  }

  return (
    <div className={styles.form_group}>
      <label className={styles.user_label} htmlFor="new_password">
        <p className={styles.p}>新密碼</p>
      </label>
      <input
        className={styles.user_input}
        type={showPassword ? 'text' : 'password'}
        id="new_password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="請輸入新密碼"
      />
      <label className={styles.user_label} htmlFor="confirm_password">
        <p className={styles.p}>確認密碼</p>
      </label>
      <div className={styles.password_input_container}>
        <input
          className={styles.user_input}
          type={showPassword ? 'text' : 'password'}
          id="confirm_password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="請再次輸入密碼"
        />
        {/* {confirmPassword && (
          <div
            className={styles.password_icon}
            onClick={togglePasswordVisibility}
          >
            {renderIcon()}
          </div>
        )} */}
      </div>
      {errorMessage && <p className={styles.error_message}>{errorMessage}</p>}
    </div>
  )
}

export default PasswordIconChange
