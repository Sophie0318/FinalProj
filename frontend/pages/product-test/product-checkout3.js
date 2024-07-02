import React from 'react'
import styles from '@/styles/product-checkout3.module.css'
import { IoCard } from 'react-icons/io5'
import ProductCheckout1 from '@/components/product/product-checkout1'

export default function ProductCheckout3() {
  return (
    <>
      <div className="container">
        <ProductCheckout1 />
      </div>
      <div className="container">
        <div className="row">
          <div className={`col-12 col-md-6 mt-5 ${styles.box1}`}>
            <p
              style={{
                marginTop: '20px',
              }}
            >
              訂單摘要:
            </p>
            <p>訂單編號:</p>
            <div className={styles.place}>
              <span>商品:</span>
              <span>價錢:</span>
            </div>
            <div className={styles.box2}>
              <span>小計:</span>
              <span>總金額</span>
            </div>
          </div>
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
            <div
              className={`con-12 col-md-12 text-center d-flex justify-content-center align-items-center`}
            >
              <button className={styles.btn}>完成付款</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
