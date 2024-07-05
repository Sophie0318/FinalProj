import React from 'react'
import styles from '@/styles/lessonCheckout-modal.module.css'

export default function CheckoutModal() {
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.success}>付款成功！</div>
        <div className={styles.reminder}>記得準時出席喔～</div>
        <div className={styles.reserveInfo}>
          <div className={styles.infoRow}>
            <div className={styles.label}>訂單編號</div>
            <div className={styles.details}>
              <div className={styles.name}>6VF2NC</div>
            </div>
          </div>
          <div className={styles.infoRow}>
            <div className={styles.label}>活力瑜珈</div>
            <div className={styles.details}>
              <div className={styles.lessonInfo}>
                {' '}
                05/29 09:00 <br />
                黑皮健身房
              </div>
            </div>
          </div>
        </div>
        <div className={styles.total}>
          <div>小計</div>
          <div>NT$900</div>
        </div>
        <div className={styles.btns}>
          <button className={styles.btnBack}>取消預約</button>
          <button className={styles.btnFin}>回到課程頁</button>
        </div>
      </div>
    </>
  )
}
