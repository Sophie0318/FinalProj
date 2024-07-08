import React from 'react'
import LayoutUser from '@/components/layout/user-layout2'
import Select from '@/components/common/select/select'
import styles from '@/styles/user-bookings.module.css'

// 測試用資料，連到資料庫後要刪掉
import options from '@/data/FakeOptions.json'

export default function LessonsOrders() {
  return (
    <>
      <LayoutUser title="myBookings">
        <div className={styles.userinfo_bookings}>
          <div className={styles.user_title}>
            <h4>我的預約</h4>
          </div>
          <div className={styles.user_select}>
            <Select options={options} />
          </div>
          <div className={styles.year_num}>2024年</div>
          <div className={styles.month}>
            <div className={styles.num}>1月</div>
            <div className={styles.num}>2月</div>
            <div className={styles.num}>3月</div>
            <div className={styles.num}>4月</div>
            <div className={styles.num}>5月</div>
            <div className={styles.num}>6月</div>
            <div className={styles.num}>7月</div>
            <div className={styles.num}>8月</div>
            <div className={styles.num}>9月</div>
            <div className={styles.num}>10月</div>
            <div className={styles.num}>11月</div>
            <div className={styles.num}>12月</div>
          </div>
          <div className={styles.date_card}>
            <div className={styles.card}>
              <div className={styles.num}>22</div>
              <div className={styles.week}>
                <h4>星期三</h4>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.num}>22</div>
              <div className={styles.week}>
                <h4>星期三</h4>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.num}>22</div>
              <div className={styles.week}>
                <h4>星期三</h4>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.num}>22</div>
              <div className={styles.week}>
                <h4>星期三</h4>
              </div>
            </div>
          </div>
          <div className={styles.schedule}>
            <div>
              <img src="/users-img/icon-notebook.svg" alt="" />
            </div>
            <div className={styles.flex}>
              <h5>負重前行</h5>
              <div className={styles.time_and_gym}>
                <h6>下午</h6>
                <h6>3:00</h6>
                <h6>超派健身房</h6>
              </div>
            </div>
          </div>
          <div className={styles.schedule}>
            <div>
              <img src="/users-img/icon-location.svg" alt="" />
            </div>
            <div className={styles.flex}>
              <h5>預約參觀</h5>
              <div className={styles.time_and_gym}>
                <h6>下午</h6>
                <h6>5:00</h6>
                <h6>原力覺醒健身房</h6>
              </div>
            </div>
          </div>
        </div>
      </LayoutUser>
    </>
  )
}
