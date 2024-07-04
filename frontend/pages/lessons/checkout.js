import React from 'react'
import styles from '@/styles/lessonCheckout.module.css'
import { IoCard } from 'react-icons/io5'

export default function Checkout() {
  return (
    <>
      <div className={styles.contain}>
        <div className={styles.title}>1、檢視您的訂單</div>
        <div className={styles.check}>
          <div className={styles.imgContain}>
            <img src="/course1.jpg" />
          </div>
          <div className={styles.infos}>
            <div className={styles.infoN}>活力瑜珈</div>
            <div className={styles.infoT}>時間：5/29 09:00</div>
            <div className={styles.infoT}>地點：黑皮健身房</div>
          </div>
        </div>
        <div className={styles.total}>
          <div className={styles.sum}>結帳金額</div>
          <div className={styles.num}>NT.900</div>
        </div>
      </div>
      <div className={styles.pcontainer}>
        <div className={styles.title}>2、選擇付款方式</div>
        <div className={styles.card}>
          <span className={styles.cardIcon}>
            <IoCard />
          </span>
          信用卡/金融卡
        </div>
        <div className={styles.flexRow}>
          <div className={styles.inline}>必填</div>
          <p className={styles.label}>卡號</p>
        </div>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={styles.input}
        />
        <div className={styles.flexRow}>
          <div className={styles.inline}>必填</div>
          <p className={styles.label}>有效日期</p>
        </div>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={styles.input}
        />
        <div className={styles.flexRow}>
          <div className={styles.inline}>必填</div>
          <p className={styles.label}>驗證碼</p>
        </div>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={styles.input}
        />
        <div className={styles.btns}>
          <button className={styles.btnBack}>回到上一頁</button>
          <button className={styles.btnFin}>完成付款</button>
        </div>
      </div>
    </>
  )
}
