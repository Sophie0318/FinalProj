import React, { useState } from 'react'
import styles from '../../styles/sign-in.module.css'
import { FaEye, FaEyeSlash, FaExclamationCircle } from 'react-icons/fa'

// 從myform拆來的password input
const MyPasswordInput = ({ password, setPassword }) => {
  //一開始不秀密碼
  const [showPassword, setShowPassword] = useState(false)
  //一開始不秀icon
  const [showIcon, setShowIcon] = useState(null)
  //一開始沒有error message
  const [errorMessage, setErrorMessage] = useState('')

  //密碼的可視性:一開始不秀密碼
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  //密碼輸入的錯誤訊息
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value
    setPassword(newPassword)
    setShowIcon(newPassword.length > 0) // 有輸入密碼就顯示icon

    if (newPassword.length < 3) {
      setErrorMessage('請填入至少3位以上的密碼')
    } else {
      setErrorMessage('')
    }
  }

  return (
    <div className={styles.form_group}>
      <label className={styles.user_label} htmlFor="password">
        <p className={styles.p}>密碼</p>
      </label>
      <div className={styles.input_container}>
        <input
          className={styles.user_input}
          type={showPassword ? 'text' : 'password'}
          id="password"
          name="password"
          required
          value={password}
          onChange={handlePasswordChange}
          placeholder="請輸入您的密碼"
        />
        {showIcon && (
          <div className={styles.myicon} onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        )}
        {errorMessage && (
          <div className={styles.erro_message}>
            <p className={styles.tomatoP}>{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default MyPasswordInput
