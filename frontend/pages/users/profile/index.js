import React, { useEffect } from 'react'
import LayoutUser from '@/components/layout/user-layout3'
import ReserveCard from '@/components/users/reserveCard'
import BranchCard from '@/components/users/branchCard'
import styles from '@/styles/user-profile.module.css'
import { useAuth } from '../../../context/auth-context'
import { useRouter } from 'next/router'
import { Link } from 'react-ionicons'

export default function Profile() {
  const { auth } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!auth.token) {
      // 如果用戶未登入，導到登入頁面，並添加 returnUrl 參數
      const returnUrl = encodeURIComponent(router.asPath)
      router.push(`/users/sign_in?returnUrl=${returnUrl}`)
    }
  }, [auth.token, router])

  // 如果用戶沒有登入，不rander頁面內容
  if (!auth.token) {
    return null
  }

  return (
    <>
      <LayoutUser title="myProfile">
        <div className={styles.userinfo_profile}>
          <div className={styles.user_title}>
            <h4>
              {auth.nick_name ? auth.nick_name : auth.name}
              ，讓我們啟動健康的新里程吧！
            </h4>
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
              <a href="../users/bookings">
                <p className={styles.p_font}>點我看更多</p>
              </a>
            </div>
          </div>
          <div className={styles.card_2}>
            <BranchCard branch="myLessons" hrefURL="/users/lessons_orders" />
            <BranchCard branch="myOrders" hrefURL="/users/orders" />
            <BranchCard branch="myReserves" hrefURL="/users/bookings" />
            <BranchCard branch="myFavs" hrefURL="/users/favorites" />
          </div>
        </div>
      </LayoutUser>
    </>
  )
}
