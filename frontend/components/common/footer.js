import React from 'react'
import Link from 'next/link'
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5'
import { FaLine, FaArrowUpLong } from 'react-icons/fa6'
import styles from './layout.module.css'

export default function Footer() {
  // TODO: to top button javascript 放到react要修改
  // Show the button when the user scrolls down 100px from the top of the document
  // window.onscroll = function () {
  //   var button = document.getElementById('back-to-top')
  //   if (
  //     document.body.scrollTop > 10 ||
  //     document.documentElement.scrollTop > 10
  //   ) {
  //     button.style.display = 'block'
  //   } else {
  //     button.style.display = 'none'
  //   }
  // }

  // Smooth scroll to top function
  // const scrollToTop = function () {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   })
  // }
  return (
    <>
      <footer className={styles.PC_footer}>
        <div className={styles.icon}>
          <li>
            <Link href="/#">
              <IoLogoFacebook className="icon-lg" />
            </Link>
          </li>
          <li>
            <Link href="/#">
              <FaLine className="icon-lg" />
            </Link>
          </li>
          <li>
            <Link href="/#">
              <IoLogoInstagram className="icon-lg" />
            </Link>
          </li>
        </div>
        <div>
          <img src="/users-img/logo-forNow-small.svg" alt="" />
          <p>Copyright &copy; 2024 All Rights Reserved. </p>
        </div>
      </footer>
      {/* <footer className={`${styles.PC_footer}`}>
        <ul className="d-flex">
          <li className="me-3">
            <Link href="/#">
              <IoLogoFacebook className="icon-lg" />
            </Link>
          </li>
          <li className="me-3">
            <Link href="/#">
              <FaLine className="icon-lg" />
            </Link>
          </li>
          <li className="me-3">
            <Link href="/#">
              <IoLogoInstagram className="icon-lg" />
            </Link>
          </li>
        </ul>
        <div>
          <img src="/logo.png" alt="" className={`${styles.logoPhoto}`} />
          <p className={`${styles.copyRight}`}>
            Copyright &copy; 2024 All Rights Reserved.{' '}
          </p>
        </div>
      </footer> */}
      <button className={`${styles.backToTop}`} onClick={() => { }}>
        <FaArrowUpLong />
        <p>Top</p>
      </button>

      {/* <!-- mobile的footer --> */}
      <footer className={styles.mobile_footer}>
        <div className={styles.footer_info}>
          <li>
            <a href="#" className={styles.footer_title}>
              <h6 className={styles.h6_font}>網站資訊</h6>
            </a>
          </li>
          <div className={styles.content}>
            <li>
              <a href="#">
                <p className={styles.p_font}>關於我們</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p className={styles.p_font}>聯絡我們</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p className={styles.p_font}>隱私政策</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p className={styles.p_font}>服務條款</p>
              </a>
            </li>
          </div>
          <li>
            <a href="#" className={styles.footer_title}>
              <h6 className={styles.h6_font}>我想要運動</h6>
            </a>
          </li>
          <div className={styles.content}>
            <li>
              <a href="#">
                <p className={styles.p_font}>去那裡運動?</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p className={styles.p_font}>有那些課程?</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p className={styles.p_font}>教練資歷</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p className={styles.p_font}>運動商城</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p className={styles.p_font}>知識補給</p>
              </a>
            </li>
          </div>
          <li>
            <a href="#" className={styles.footer_title}>
              <h6 className={styles.h6_font}>常見問題</h6>
            </a>
          </li>
          <div className={styles.content}>
            <li>
              <a href="#">
                <p className={styles.p_font}>如何預約課程?</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p className={styles.p_font}>哪個教練適合我?</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p className={styles.p_font}>怎麼買商品?</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p className={styles.p_font}>如何加入會員</p>
              </a>
            </li>
          </div>
        </div>
        <div className={styles.mobile_footer_img}>
          <img src="/users-img/logo-forNow-mini.svg" alt="" />
        </div>
      </footer>
    </>
  )
}
