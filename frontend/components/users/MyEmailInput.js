import React, { useState } from 'react'
import styles from '../../styles/sign-in.module.css'
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'
// 從myform拆來的email input
const MyEmailInput = ({ email, setEmail }) => {
  const [iconType, setIconType] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const handleEmailChange = (e) => {
    const newEmail = e.target.value
    setEmail(newEmail)

    // 檢查是否填寫
    if (!newEmail) {
      setIconType(null)
      setErrorMessage('此為必填欄位')
      return
    }
    // 模擬檢查是否與資料庫中的某位會員信箱相符
    const isMember = checkIfMember(newEmail)

    if (isMember) {
      setIconType('FaCheckCircle')
      setErrorMessage('')
    } else {
      setIconType('FaExclamationCircle')
      setErrorMessage('此電子信箱不存在')
    }
  }

  // 模擬檢查是否與資料庫中的某位會員信箱相符的函數
  const checkIfMember = (email) => {
    // 這裡可以加入實際的邏輯，比如從後端 API 檢查或是本地存儲的資料庫查詢
    // 這裡先簡單返回 true 或 false
    return email === 'example@example.com'
  }

  return (
    <div className={styles.form_group}>
      <label className={styles.user_label} htmlFor="email">
        <p className={styles.p}>電子信箱</p>
      </label>
      <div className={styles.input_container}>
        <input
          className={styles.user_input}
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={handleEmailChange}
          placeholder="example@example.com"
        />
        <div
          className={`${styles.myicon} ${
            iconType === 'FaExclamationCircle' ? styles.error : ''
          }`}
        >
          {iconType === 'FaCheckCircle' && <FaCheckCircle />}
          {iconType === 'FaExclamationCircle' && <FaExclamationCircle />}
        </div>
        {errorMessage && (
          <div className={styles.erro_message}>
            <p className={styles.p}>{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default MyEmailInput
