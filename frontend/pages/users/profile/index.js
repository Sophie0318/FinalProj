import React from 'react'
import LayoutUser from '@/components/layout/user-layout3'
import ReserveCard from '@/components/users/reserveCard'
import BranchCard from '@/components/users/branchCard'
import styles from '@/styles/user-profile.module.css'

export default function Profile() {
  return (
    <>
      <LayoutUser title="myProfile">
        <div className={styles.userinfo_profile}>
          <div className={styles.user_title}>
            <h4>你阿罵，讓我們啟動健康的新里程吧！</h4>
          </div>
          <div className={styles.title_describe}>
            <p className={styles.p_font}>即將到來的預約</p>
          </div>
          <div className={styles.card_1}>
            {Array(4)
              .fill(1)
              .map((v, i) => {
                return <ReserveCard key={i} />
              })}

            <div className={styles.more}>
              <a href="#">
                <p className={styles.p_font}>點我看更多</p>
              </a>
            </div>
          </div>
          <div className={styles.card_2}>
            <BranchCard branch="myLessons" />
            <BranchCard branch="myOrders" />
            <BranchCard branch="myReserves" />
            <BranchCard branch="myFavs" />
          </div>
        </div>
      </LayoutUser>
    </>
  )
}
