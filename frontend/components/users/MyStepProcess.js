import React from 'react'
import styles from '@/styles/MyStepProcess.module.css'

export default function MyStepProcess({ steps = [] }) {
  return (
    <div className="container  mb-5">
      <div className="row justify-content-center">
        {steps.map((MyStep, i) => (
          <React.Fragment key={i}>
            <div className={`col-3 col-md-3 ${styles.size}`}>
              <div className={styles.test}>{i + 1}</div>
              <div className={styles.checkFount}>{MyStep}</div>
            </div>
            {i < steps.length - 1 && (
              <div className={`col-1 ${styles.dashContainer}`}>
                <div className={styles.dash}></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
