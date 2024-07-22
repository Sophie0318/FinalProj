import React, { useState, useEffect } from 'react'
import styles from '../../styles/user-edit.module.css'
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'

const MyTextInput = ({
  id,
  name,
  label,
  value,
  onChange,
  schema,
  errorMessage,
  setErrorMessage,
  style,
}) => {
  const [timer, setTimer] = useState(null)

  const handleChange = (e) => {
    onChange(e.target.value)
    // 不要在這裡清除錯誤訊息，讓驗證決定是否需要顯示錯誤
  }

  const handleBlur = () => {
    if (value) {
      console.log('Blur event triggered, setting timeout for validation')
      setTimer(
        setTimeout(() => {
          console.log('Validating input:', value)
          const result = schema.safeParse(value)
          if (!result.success) {
            console.log('Validation failed:', result.error.errors[0].message)
            setErrorMessage(result.error.errors[0].message)
          } else {
            console.log('Validation passed')
            setErrorMessage('')
          }
        }, 500)
      )
    }
  }

  useEffect(() => {
    return () => {
      if (timer) {
        console.log('Clearing timeout')
        clearTimeout(timer)
      }
    }
  }, [timer])

  const renderIcon = () => {
    if (errorMessage) {
      return <FaExclamationCircle className={styles.myiconError} />
    }
    if (!errorMessage && value) {
      return <FaCheckCircle className={styles.myiconSuccess} />
    }
    return null
  }

  return (
    <div className={styles.form_group}>
      <label htmlFor={id}>
        <p>{label}</p>
      </label>
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        style={style}
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

export default MyTextInput
