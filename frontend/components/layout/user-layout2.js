// 會員中心的基本布局
import React from 'react'
import Breadcrumb from '../common/breadcrumb'
import Footer from '../common/footer'
import styles from '@/styles/user-layout2.module.css'
import { FaUser } from 'react-icons/fa6'

export default function LayoutUser({ children }) {
  return (
    <>
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
              <a className={styles.inline_link} href="#">
                <FaUser />
                {/* <i className="fa-solid fa-user"></i> */}
                <p className={styles.p_font}>主頁</p>
              </a>
              <a className={styles.inline_link} href="#">
                <FaUser />
                {/* <i className="fa-solid fa-user"></i> */}
                <p className={styles.p_font}>檔案</p>
              </a>
              <a className={styles.inline_link} href="#">
                <FaUser />
                {/* <i className="fa-solid fa-user"></i> */}
                <p className={styles.p_font}>預約</p>
              </a>
              <a className={styles.inline_link} href="#">
                <FaUser />
                {/* <i className="fa-solid fa-user"></i> */}
                <p className={styles.p_font}>課程</p>
              </a>
              <a className={styles.inline_link} href="#">
                <FaUser />
                {/* <i className="fa-solid fa-user"></i> */}
                <p className={styles.p_font}>訂單</p>
              </a>
              <a className={styles.inline_link} href="#">
                <FaUser />
                {/* <i className="fa-solid fa-user"></i> */}
                <p className={styles.p_font}>收藏</p>
              </a>
            </nav>
          </div>
          <div className={`${styles.userinfo}`}>{children}</div>
        </div>
      </div>
      <Footer />
    </>
  )
}
