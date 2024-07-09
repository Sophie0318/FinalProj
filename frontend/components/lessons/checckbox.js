import styles from '@/styles/lesson.module.css'

export default function Checkbox({ id, name, label }) {
  return (
    <div className={styles.checkboxes}>
      <input type="checkbox" id={id} name={name} className={styles.checkbox} />
      <label htmlFor={id} className={styles.checkboxLabel}>
        {label}
      </label>
    </div>
  )
}
