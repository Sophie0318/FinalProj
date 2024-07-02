import React from 'react'
import styles from './credit-card-input.module.css'
import CreditCardCtn from '../button/credit-card-btn'

export default function CreditCardInput() {
  return (
    <>
      <div className="col-12 col-md-6 mt-5 h6 text-center">
        選擇付款方式
        <div>
          <select
            id=""
            name=""
            className={styles.customSelect}
            aria-label="Default select example"
            style={{
              width: '70%',
              height: '50px',
              borderRadius: '50px',
              marginTop: '30px',
              marginBottom: '20px',
              marginLeft: '30px',
            }}
          >
            <option>選擇付款方式</option>
            <option value="">信用卡/金融卡 </option>
            <option value="">Apple Pay</option>
            <option value="">line Pay</option>
            <option value="">貨到付款</option>
            <option value=""></option>
          </select>
        </div>
        <div className={`col-12 col-md-12 text-center ${styles.eee}`}>
          <span className={styles.must}>必填</span>
          <span
            style={{
              paddingTop: '11px',
              marginLeft: '11px',
            }}
          >
            卡號
          </span>
        </div>
        <div className={`col-12 col-md-12 ${styles.ccc}`}>
          <input type="text" className={styles.inputSize} />
        </div>
        <div className={`col-12 col-md-12 ${styles.eee}`}>
          <span className={styles.must}>必填</span>
          <span
            style={{
              paddingTop: '11px',
              marginLeft: '11px',
            }}
          >
            有效日期
          </span>
        </div>
        <div className={`col-12 col-md-12 ${styles.ccc}`}>
          <input type="text" className={styles.inputSize} />
        </div>
        <div className={`col-12 col-md-12 ${styles.eee}`}>
          <span className={styles.must}>必填</span>
          <span
            style={{
              paddingTop: '11px',
              marginLeft: '11px',
            }}
          >
            驗證碼
          </span>
        </div>
        <div className={`col-12 col-md-12 ${styles.ccc}`}>
          <input type="text" className={styles.inputSize} />
        </div>
        <CreditCardCtn />
      </div>
    </>
  )
}
