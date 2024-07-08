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
  IoChevronDown,
} from 'react-icons/io5'
import { PiMapPinFill, PiLightbulbFilamentFill } from 'react-icons/pi'
import { FaArrowRight } from 'react-icons/fa6'
import styles from './layout.module.css'
import { IoAddSharp, IoRemove, IoCloseSharp } from 'react-icons/io5'

// TODO: header logo offsets when toggle offcanvas, 可以參考kacco
// TODO: toggle button 會蓋住scrollbar, 也參考kacco
// 也可以用看看 bootstrap offcanvas body scrollable
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
            <Link href="/users/profile">
              <IoPersonAdd className={`${styles.member}`} />
            </Link>
          </li>
          <li>
            <a href="#">
              <IoCart
                className={`${styles.cart}`}
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              />
              <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
              >
                <div className="offcanvas-header">
                  <h5 id="offcanvasRightLabel">
                    {' '}
                    <IoCart /> 您的購物車
                  </h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div
                  className="offcanvas-body"
                  style={{ backgroundColor: '#FFF7E9' }}
                >
                  <div style={{ display: 'flex', gap: '17px' }}>
                    <img
                      src="/product-img/大豆.webp"
                      alt=""
                      style={{ width: '30%', borderRadius: '25px' }}
                    />
                    <ul>
                      <li style={{ paddingBottom: '20px' }}>商品:大豆蛋白</li>
                      <li style={{ paddingBottom: '20px' }}>
                        特色:快速補充蛋白質
                      </li>
                      <li>價格:2200</li>
                    </ul>
                    <div>
                      <IoCloseSharp
                        style={{
                          marginLeft: '50px',
                        }}
                      />
                      <div
                        className="d-flex"
                        style={{ height: '30px', marginTop: '70px' }}
                      >
                        <div
                          style={{
                            border: '1px solid black',
                            backgroundColor: '#1A394A',
                            display: 'flex',
                            alignItems: 'center',
                            justifyItems: 'center',
                            color: 'white',
                            fontSize: '30px',
                          }}
                        >
                          <IoAddSharp />
                        </div>
                        <div
                          style={{
                            backgroundColor: 'white',
                            color: '#1a394a',
                            width: '30px',
                            border: '1px solid black',
                            display: 'flex',
                            alignItems: 'center',
                            justifyItems: 'center',
                            paddingLeft: '8px',
                            fontSize: '25px',
                          }}
                        >
                          4
                        </div>
                        <div
                          style={{
                            backgroundColor: '#1A394A',
                            border: '1px solid black',
                            display: 'flex',
                            alignItems: 'center',
                            justifyItems: 'center',
                            color: 'white',
                            fontSize: '30px',
                          }}
                        >
                          <IoRemove />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="d-flex"
                    style={{
                      justifyContent: 'space-between',
                      padding: '0 0 20px 20px',
                      marginTop: '50px',
                    }}
                  >
                    <p>小計</p>
                    <p>NT$FFFF</p>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: '50px',
                    }}
                  >
                    <button
                      style={{
                        backgroundColor: '#1a394a',
                        borderRadius: '50px',
                        fontSize: '18px',
                        width: '265px',
                        height: '65px',
                        color: 'white',
                      }}
                    >
                      前往付款
                    </button>
                  </div>
                </div>
              </div>
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
          <div className={`container-fluid p-3`}>
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
                  <Link
                    className={`h3-font`}
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      className={`${styles.memberAvatar}`}
                      src="/test_avatar.png"
                    />
                    <div className={styles.navbarSPLink}>你阿罵</div>
                    <IoChevronDown />
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/users/profile/edit"
                      >
                        我的檔案
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/users/bookings">
                        我的預約
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/users/lessons_orders"
                      >
                        我的課程
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/users/orders">
                        歷史訂單
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/users/favorites">
                        我的收藏
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <IoCart
                    style={{
                      height: '32px',
                      width: '32px',
                      margin: '10px 10px 10px 0',
                    }}
                  />
                  <span className={`h3-font`}>購物車</span>
                </li>
              </ul>

              <ul className={`${styles.icons} col-12`}>
                <li>
                  <Link className={`h3-font`} href="/gyms">
                    <PiMapPinFill />
                    <div className={styles.navbarSPLink}>找場館</div>
                  </Link>
                </li>
                <li>
                  <Link className={`h3-font`} href="/coaches">
                    <IoBarbell />
                    <div className={styles.navbarSPLink}>找教練</div>
                  </Link>
                </li>
                <li>
                  <Link className={`h3-font`} href="/lessons">
                    <IoWalk />
                    <div className={styles.navbarSPLink}>找課程</div>
                  </Link>
                </li>
                <li>
                  <Link className={`h3-font`} href="/product-test">
                    <IoBagCheck />
                    <div className={styles.navbarSPLink}>找商品</div>
                  </Link>
                </li>
                <li>
                  <Link className={`h3-font`} href="/articles">
                    <PiLightbulbFilamentFill />
                    <div className={styles.navbarSPLink}>找知識</div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
