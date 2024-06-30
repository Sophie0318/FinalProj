import React from 'react'
import styles from '@/styles/product-checkout2.module.css'

export default function ProductCheckout2() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className={`col-3 col-md-3  ${styles.size}`}>
            <div className={styles.test}>1</div>
            <div className={styles.checkFount}>檢視商品</div>
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
          </div>
        </div>
        <div className="col-12 col-md-12 text-center d-flex justify-content-center align-items-center mb-3">
          <div className={styles.ppp}>
            <input type="checkbox" className={styles.customCheckbox} />
            <span>同會員資料</span>
          </div>
        </div>
        <div className={`col-12 col-md-12 text-center mb-5  ${styles.inside}`}>
          <div className={`col-6 col-md-6 ${styles.fixleft}`}>姓名</div>
          <input
            type="text"
            className={styles.outside}
            placeholder="請輸入姓名"
          />
        </div>
        <div className={`col-12 col-md-12 text-center mb-5 ${styles.inside}`}>
          <div className={`col-6 col-md-6 ${styles.fixleft}`}>手機</div>
          <input
            type="mobile"
            className={styles.outside}
            placeholder="請輸入手機號碼"
          />
        </div>
        <div className={`col-12 col-md-12 text-center mb-5 ${styles.inside}`}>
          <div className={`col-6 col-md-6 ${styles.fixleft}`}>取貨門市</div>
          <input type="text" className={styles.outside} />
        </div>
        <div
          className={`con-12 col-md-12 text-center d-flex justify-content-center align-items-center`}
        >
          <button className={styles.btn}>確定</button>
        </div>
      </div>
    </>
  )
}
