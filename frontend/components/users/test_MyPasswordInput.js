import React, { useState } from 'react'
import styles from '../../styles/sign-in.module.css'
// import MyLabel from './Mylabel'
import { FaEye, FaEyeSlash, FaExclamationCircle } from 'react-icons/fa'

const MyPasswordInput = ({ password, setPassword, id, name, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value
    setPassword(newPassword)

    if (newPassword.length < 3) {
      setErrorMessage('請填入至少3位以上的密碼')
    } else {
      setErrorMessage('')
    }
  }

  const renderIcon = () => {
    if (errorMessage) {
      return <FaExclamationCircle className={styles.myiconError} />
    }
    if (password.length > 0) {
      return showPassword ? <FaEyeSlash /> : <FaEye />
    }
    return null
  }

  return (
    <div className={styles.input_container}>
      <input
        className={`${styles.user_input} ${
          errorMessage ? styles.error_input : ''
        }`}
        type={showPassword ? 'text' : 'password'}
        id={id}
        name={name}
        required
        value={password}
        onChange={handlePasswordChange}
        placeholder={placeholder}
      />
      <div
        className={`${styles.myicon} ${errorMessage ? styles.myiconError : ''}`}
        onClick={errorMessage ? null : togglePasswordVisibility}
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

export default MyPasswordInput
