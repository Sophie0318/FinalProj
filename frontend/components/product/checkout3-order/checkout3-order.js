import React from 'react'
import styles from './checkout3-order.module.css'

export default function Checkout3Order() {
  return (
    <>
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
        <div className={styles.subtotal}>
          <span>小計:</span>
          <span>總金額</span>
        </div>
        {/* <div className={styles.box2}> */}
        {/* <span>小計:</span>
          <span>總金額</span> */}
        {/* </div> */}
      </div>
    </>
  )
}
