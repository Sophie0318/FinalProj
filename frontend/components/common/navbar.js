import React from 'react'
import Link from 'next/link'
import { IoPersonAdd, IoCart } from 'react-icons/io5'
import styles from './layout.module.css'
import { IoAddSharp, IoRemove, IoCloseSharp } from 'react-icons/io5'

export default function Navbar() {
  return (
    <>
      <header className={`${styles.navbar}`}>
        <div className="logo">
          <img src="/logo.png" alt="" className={`${styles.logoPhoto}`} />
        </div>
        <ul className={`${styles.list}`}>
          <li>
            <Link href="./gyms">找場館</Link>
          </li>
          <li>
            <Link href="./products">找商城</Link>
          </li>
          <li>
            <Link href="./lessons">找課程</Link>
          </li>
          <li>
            <Link href="./coaches">找教練</Link>
          </li>
          <li>
            <Link href="./articles">找知識</Link>
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
              <IoCart
                className={`${styles.cart}`}
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              />
              <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
              >
                <div class="offcanvas-header">
                  <h5 id="offcanvasRightLabel">
                    {' '}
                    <IoCart /> 您的購物車
                  </h5>
                  <button
                    type="button"
                    class="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div
                  class="offcanvas-body"
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
                        style={{ height: '20px', marginTop: '70px' }}
                      >
                        <div
                          style={{
                            border: '1px solid black',
                            backgroundColor: '#1A394A',
                            display: 'flex',
                            alignItems: 'center',
                            justifyItems: 'center',
                            color: 'white',
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
    </>
  )
}
