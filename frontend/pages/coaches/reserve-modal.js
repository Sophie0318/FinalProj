import React from 'react'
import styles from '@/styles/reserveModal.module.css'

export default function ReserveModal() {
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.success}>預約成功！</div>
        <div className={styles.reserveInfo}>
          <div className={styles.infoRow}>
            <div className={styles.label}>預 約 人 |</div>
            <div className={styles.details}>
              <div className={styles.name}>林千惠</div>
              <div className={styles.contact}>
                <div>getstart@mail.com</div>
                <div>0968-777-545</div>
              </div>
            </div>
          </div>
          <div className={styles.infoRow}>
            <div className={styles.label}>預約教練 |</div>
            <div className={styles.coachInfo}>
              <div>李安妮 教練</div>
              <div>活力健身房</div>
              <div>台北市中正區杭州南路308號</div>
            </div>
          </div>
          <div className={styles.infoRow}>
            <div className={styles.label}>預約時間 |</div>
            <div className={styles.reserveTime}>
              <div>2014-08-12 星期三</div>
              <div>下午 02:15</div>
            </div>
          </div>
        </div>
        <div className={styles.nice}>
          <div className={styles.niceTitle}>貼心叮嚀</div>
          <div className={styles.niceRemind}>
            請至電子信箱查看預約確認資訊，教練確認後也將由專人電話聯繫，再請您注意來電：）
            <br />
            參觀時請提早10分鐘報到，並且穿著舒服好動的衣服，攜帶水壺以及毛巾唷！
            <br />
            期待見到您｜Join us, Be a Healthier !{' '}
            <button className={styles.join}>加入會員</button>
          </div>
        </div>
        <div className={styles.btns}>
          <button className={styles.btnBack}>取消預約</button>
          <button className={styles.btnFin}>繼續搜尋</button>
        </div>
      </div>
    </>
  )
}
