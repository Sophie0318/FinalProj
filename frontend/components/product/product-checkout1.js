import React from 'react'
import styles from './product-checkout1.module.css'

export default function ProductCheckout1() {
  return (
    <>
      <div className={`row ${styles.progressRow}`}>
        <div className={`col-2 col-md-2  ${styles.size}`}>
          <div className={styles.test}>1</div>
          <div className={styles.checkFount}>1.檢視商品</div>
        </div>
        <div className={`col-1 col-md-1 ${styles.dash} `}>--------</div>
        <div className={`col-2 col-md-2 ${styles.size} `}>
          <div className={styles.test}>2</div>
          <div className={styles.checkFount}>2.選擇配送</div>
        </div>
        <div className={`col-1 col-md-1 ${styles.dash} `}>--------</div>
        <div className={`col-2 col-md-2 ${styles.size}`}>
          <div className={styles.test}>3</div>
          <div className={styles.checkFount}>3.選擇付款</div>
        </div>
        <div className={`col-1 col-md- ${styles.dash} `}>--------</div>
        <div className={`col-2 col-md-2 ${styles.size}`}>
          <div className={styles.test}>4</div>
          <div className={styles.checkFount}>4.完成結帳</div>
        </div>
      </div>
    </>
  )
}
