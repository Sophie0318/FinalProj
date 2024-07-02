import React from 'react'
import styles from './checkout2-input.module.css'

export default function Checkout2Input() {
  return (
    <>
      <div className={`col-12 col-md-12 text-center mb-5  ${styles.inside}`}>
        <div className="col-6 col-md-6">姓名</div>
        <input
          type="text"
          className={styles.outside}
          placeholder="請輸入姓名"
        />
      </div>
      <div className={`col-12 col-md-12 text-center mb-5 ${styles.inside}`}>
        <div className="col-6 col-md-6">手機</div>
        <input
          type="mobile"
          className={styles.outside}
          placeholder="請輸入手機號碼"
        />
      </div>
      <div className={`col-12 col-md-12 text-center mb-5 ${styles.inside}`}>
        <div className="col-6 col-md-6">取貨門市</div>
        <input type="text" className={styles.outside} />
      </div>
    </>
  )
}
