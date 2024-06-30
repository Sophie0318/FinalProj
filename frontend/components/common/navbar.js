import React from 'react'
import Link from 'next/link'
import {
  IoPersonAdd,
  IoCart,
  IoReorderTwoOutline,
  IoCloseOutline,
  IoBarbell,
  IoWalk,
  IoBagCheck,
} from 'react-icons/io5'
import { PiMapPinFill, PiLightbulbFilamentFill } from 'react-icons/pi'
import { FaArrowRight } from 'react-icons/fa6'
import styles from './layout.module.css'

export default function Navbar() {
  return (
    <>
      <header className={`${styles.navbarPC}`}>
        <div className="logo">
          <img src="/logo.png" alt="" className={`${styles.logoPhoto}`} />
        </div>
        <ul className={`${styles.list} h6-font`}>
          <li>
            <Link href="./gyms">
              <FaArrowRight className={styles.linkArrow} />
              找場館
            </Link>
          </li>
          <li>
            <Link href="./products">
              <FaArrowRight className={styles.linkArrow} />
              找商城
            </Link>
          </li>
          <li>
            <Link href="./lessons">
              <FaArrowRight className={styles.linkArrow} />
              找課程
            </Link>
          </li>
          <li>
            <Link href="./coaches">
              <FaArrowRight className={styles.linkArrow} />
              找教練
            </Link>
          </li>
          <li>
            <Link href="./articles">
              <FaArrowRight className={styles.linkArrow} />
              找知識
            </Link>
          </li>
        </ul>

        <ul className={`${styles.icons}`}>
          <li>
            <a href="#">
              <IoPersonAdd className={`${styles.member}`} />
            </a>
          </li>
          <li>
            <a href="#">
              <IoCart className={`${styles.cart}`} />
            </a>
          </li>
        </ul>
      </header>

      <header className={`${styles.navbarSP}`}>
        <div className="container-fluid">
          <Link href="/">
            <div
              className={`${styles.logo} row justify-content-center p-0 m-0`}
            >
              <img src="/logo.png" alt="" className={`${styles.logoPhoto}`} />
            </div>
          </Link>
        </div>
        <button
          className={`${styles.navToggleBtn} navbar-toggler d-flex justify-content-center align-items-center bg-secondary`}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarMobile"
          aria-controls="navbarMobile"
          aria-label="Toggle navigation"
        >
          <IoReorderTwoOutline className={`${styles.navToggleIcon}`} />
        </button>
        <div
          // TODO: offcanvas 寬度設定可能要覆蓋t變數, 先用inline style, 之後研究sass
          className="offcanvas offcanvas-end"
          style={{
            border: '0',
            maxWidth: '50vw',
            height: '100vh',
            borderRadius: '25px 0 0 25px',
            backgroundColor: '#fff7e9',
          }}
          tabIndex="-1"
          id="navbarMobile"
          aria-labelledby="navbarMobileLabel"
        >
          <div className={`container-fluid py-3`}>
            <div
              className={`${styles.closeBtnRow} row justify-content-end p-0 m-0`}
            >
              <button
                type="button"
                className={`p-0`}
                aria-label="Close"
                data-bs-dismiss="offcanvas"
              >
                <IoCloseOutline className={`${styles.closeBtnIcon}`} />
              </button>
            </div>

            <div className="row p-0 m-0 flex-column justify-content-between h-100">
              <ul className={`${styles.icons} col-12`}>
                <li>
                  <img
                    className={`${styles.memberAvatar}`}
                    src="/test_avatar.png"
                  />
                  <span className={` h3-font`}>你阿罵</span>
                </li>
                <li>
                  <IoCart
                    style={{
                      height: '32px',
                      width: '32px',
                      margin: '10px 10px 10px 0',
                    }}
                  />
                  <span className={` h3-font`}>購物車</span>
                </li>
              </ul>

              <ul className={`${styles.icons} ${styles.navLinks} col-12`}>
                <li>
                  <PiMapPinFill />
                  <span className={` h3-font`}>找場館</span>
                </li>
                <li>
                  <IoBarbell />
                  <span className={` h3-font`}>找教練</span>
                </li>
                <li>
                  <IoWalk />
                  <span className={` h3-font`}>找課程</span>
                </li>
                <li>
                  <IoBagCheck />
                  <span className={` h3-font`}>找商品</span>
                </li>
                <li>
                  <PiLightbulbFilamentFill />
                  <span className={` h3-font`}>找知識</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
