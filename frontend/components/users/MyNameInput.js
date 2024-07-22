import React, { useState, useEffect } from 'react'
import styles from '../../styles/user-edit.module.css'
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'
import { z } from 'zod'

const MyTextInput = ({
  id,
  name,
  label,
  value,
  onChange,
  mySchema,
  errorMessage,
  style,
}) => {
  const [timer, setTimer] = useState(null)
  const [isFocused, setIsFocused] = useState(false)

  const handleChange = (e) => {
    onChange(e.target.value) // Call the onChange function passed as a prop
    setErrorMessage('') // Clear the error message when the user types
  }

  const handleBlur = () => {
    setIsFocused(false)
    if (value) {
      // Start a timer when the input loses focus
      setTimer(
        setTimeout(() => {
          const result = mySchema.safeParse(value)
          if (!result.success) {
            // Set error message if validation fails
            setErrorMessage(result.error.errors[0].message)
          } else {
            setErrorMessage('')
          }
        }, 500) // Increased timeout for better UX
      )
    }
  }

  useEffect(() => {
    if (timer) {
      clearTimeout(timer)
    }
    return () => clearTimeout(timer)
  }, [value, timer])

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
