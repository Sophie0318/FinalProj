// 會員中心的基本布局
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Breadcrumb from '../common/breadcrumb'
import Navbar from '../common/navbar'
import Footer from '../common/footer'
import styles from '@/styles/user-layout2.module.css'
import { FaUser } from 'react-icons/fa6'

export default function LayoutUser({ children, title = 'myProfile' }) {
  const titleMap = {
    myProfile: '我的檔案',
    myLessons: '我的課程',
    myOrders: '歷史訂單',
    myBookings: '我的預約',
    myFavs: '我的收藏',
  }

  const titleResult = titleMap[title] || '會員中心'

  return (
    <>
      <Head>
        <title>{titleResult}</title>
      </Head>
      <Navbar />
      <div className={styles.layout}>
        <nav className={styles.bread} aria-label="breadcrumb">
          <Breadcrumb />
        </nav>
        <div className={styles.warp}>
          <div className={styles.menu}>
            <div className={styles.user}>
              <img src="/users-img/user_avator.png" alt="" />
              <h5 className={styles.h5_font}>你阿罵</h5>
            </div>
            <nav className={styles.user_sidebar}>
              <Link className={styles.inline_link} href="/users/profile">
                <FaUser />
                <p className={styles.p_font}>主頁</p>
              </Link>
              <Link className={styles.inline_link} href="/users/profile/edit">
                <FaUser />
                <p className={styles.p_font}>檔案</p>
              </Link>
              <Link className={styles.inline_link} href="/users/bookings">
                <FaUser />
                <p className={styles.p_font}>預約</p>
              </Link>
              <Link className={styles.inline_link} href="/users/lessons_orders">
                <FaUser />
                <p className={styles.p_font}>課程</p>
              </Link>
              <Link className={styles.inline_link} href="/users/orders">
                <FaUser />
                <p className={styles.p_font}>訂單</p>
              </Link>
              <Link className={styles.inline_link} href="/users/favorites">
                <FaUser />
                <p className={styles.p_font}>收藏</p>
              </Link>
            </nav>
          </div>
          <div className={`${styles.userinfo}`}>{children}</div>
        </div>
      </div>
      <Footer />
    </>
  )
}
