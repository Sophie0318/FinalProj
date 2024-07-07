import React from 'react'
import styles from '@/styles/MyStepProcess.module.css'

export default function MyStepProcess() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className={`col-3 col-md-3 ${styles.size}`}>
            <div className={styles.test}>1</div>
            <div className={styles.checkFount}>1.檢視商品</div>
          </div>
          <div className={styles.dash}></div>
          <div className={`col-3 col-md-3 ${styles.size}`}>
            <div className={styles.test}>2</div>
            <div className={styles.checkFount}>2.選擇配送</div>
          </div>
          <div className={styles.dash}></div>
          <div className={`col-3 col-md-3 ${styles.size}`}>
            <div className={styles.test}>3</div>
            <div className={styles.checkFount}>3.選擇付款方式</div>
          </div>
          <div className={styles.dash}></div>
          <div className={`col-3 col-md-3 ${styles.size}`}>
            <div className={styles.test}>4</div>
            <div className={styles.checkFount}>4.完成結帳</div>
          </div>
        </div>
      </div>
    </>
  )
}
