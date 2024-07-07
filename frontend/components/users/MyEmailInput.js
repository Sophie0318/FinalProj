import React, { useState } from 'react'
import styles from '../../styles/sign-in.module.css'
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'

const MyEmailInput = ({ email, setEmail, style }) => {
  const [errorMessage, setErrorMessage] = useState('')

  const handleEmailChange = (e) => {
    const newEmail = e.target.value
    setEmail(newEmail)

    if (!newEmail) {
      setErrorMessage('此為必填欄位')
    } else if (!checkIfMember(newEmail)) {
      setErrorMessage('此電子信箱不存在')
    } else {
      setErrorMessage('')
    }
  }

  const checkIfMember = (email) => {
    return email === 'example@example.com'
  }

  const renderIcon = () => {
    if (!email) return null
    if (errorMessage) {
      return <FaExclamationCircle className={styles.myiconError} />
    }
    return <FaCheckCircle />
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
        placeholder="example@example.com"
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
