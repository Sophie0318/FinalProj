import React from 'react'
import styles from './form-field.module.css'

export default function FormField({
  label = '欄位',
  type = 'text',
  name = '',
  id = '',
  options = [],
  placeholder = '',
}) {
  const renderInput = () => {
    switch (type) {
      case 'select':
        return (
          <select name={name} id={id} className={styles.input}>
            {options.map((option, index) => (
              <option
                key={index}
                value={typeof option === 'object' ? option.value : option}
              >
                {typeof option === 'object' ? option.label : option}
              </option>
            ))}
          </select>
        )
      case 'textarea':
        return (
          <textarea name={name} id={id} className={styles.input}></textarea>
        )
      case 'text':
      case 'email':
      case 'password':
      case 'number':
      default:
        return (
          <input type={type} name={name} id={id} className={styles.input} />
        )
    }
  }
  return (
    <div>
      <div className={styles.formLabel}>{label}</div>
      {renderInput()}
    </div>
  )
}
