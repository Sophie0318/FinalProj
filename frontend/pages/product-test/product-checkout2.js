import React from 'react'
import styles from '@/styles/product-checkout2.module.css'

export default function ProductCheckout2() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className={`col-3 col-md-3  ${styles.size}`}>
            <div className={styles.test}>1</div>
            <div className={styles.checkFount}>1.檢視商品</div>
          </div>
          <div className={`col-3 col-md-3 ${styles.size} `}>
            <div className={styles.test}>2</div>
            <div className={styles.checkFount}>2.選擇配送</div>
          </div>
          <div className={`col-3 col-md-3 ${styles.size}`}>
            <div className={styles.test}>3</div>
            <div className={styles.checkFount}>3.選擇付款</div>
          </div>
          <div className={`col-3 col-md-3 ${styles.size}`}>
            <div className={styles.test}>4</div>
            <div className={styles.checkFount}>4.完成結帳</div>
          </div>
        </div>
        <div className="row">
          <div className={`col-12 col-md-12 text-center ${styles.Revise}`}>
            <h2>填寫收件人資料</h2>
            <div className={styles.ppp}>
              <input type="checkbox" className={styles.customCheckbox} />
              <span>同會員資料</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
