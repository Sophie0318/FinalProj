import React, { useState } from 'react'
import styles from '../../styles/sign-in.module.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const PasswordInput = ({ password, setPassword, error }) => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
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
          onChange={(e) => setPassword(e.target.value)}
          placeholder="請輸入您的密碼"
        />
        <button
          type="button"
          className={`${styles.myicon}`}
          onClick={togglePasswordVisibility}
          aria-label={showPassword ? '隱藏密碼' : '顯示密碼'}
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
      {error && <div className={styles.error_message}>{error}</div>}
    </div>
  )
}

export default PasswordInput
