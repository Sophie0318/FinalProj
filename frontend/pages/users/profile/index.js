import React from 'react'
import Breadcrumb from '@/components/common/breadcrumb'
import uStyles from './user-layout2.module.css'
import pStyles from '@/styles/user-profile.module.css'

// icons
import { FaUser, FaDumbbell, FaLocationDot } from 'react-icons/fa6'

export default function Index() {
  return (
    <>
      <div className={uStyles.layout}>
        <nav className={uStyles.bread} aria-label="breadcrumb">
          <Breadcrumb />
        </nav>
        <div className={uStyles.warp}>
          {/* 注意 .menu styles 在 profile.css */}
          <div className={pStyles.menu}>
            <div className={uStyles.user}>
              <img src="/users-img/user_avator.png" alt="" />
              <h5>你阿罵</h5>
            </div>
            <nav className={uStyles.user_sidebar}>
              <a className={uStyles.inline_link} href="#">
                <FaUser />
                {/* <i className="fa-solid fa-user"></i> */}
                <p>主頁</p>
              </a>
              <a className={uStyles.inline_link} href="#">
                <FaUser />
                {/* <i className="fa-solid fa-user"></i> */}
                <p>檔案</p>
              </a>
              <a className={uStyles.inline_link} href="#">
                <FaUser />
                {/* <i className="fa-solid fa-user"></i> */}
                <p>預約</p>
              </a>
              <a className={uStyles.inline_link} href="#">
                <FaUser />
                {/* <i className="fa-solid fa-user"></i> */}
                <p>課程</p>
              </a>
              <a className={uStyles.inline_link} href="#">
                <FaUser />
                {/* <i className="fa-solid fa-user"></i> */}
                <p>訂單</p>
              </a>
              <a className={uStyles.inline_link} href="#">
                <FaUser />
                {/* <i className="fa-solid fa-user"></i> */}
                <p>收藏</p>
              </a>
            </nav>
          </div>
          <div className={uStyles.userinfo}>
            <div className={uStyles.user_title}>
              <h4>你阿罵，讓我們啟動健康的新里程吧！</h4>
            </div>
            <div className={uStyles.title_describe}>
              <p>即將到來的預約</p>
            </div>
            <div className={pStyles.card_1}>
              <div className={pStyles.card}>
                <div className={pStyles.card_background}>
                  <FaDumbbell />
                  {/* <i className="fa-solid fa-dumbbell"></i> */}
                </div>
                <div className={pStyles.card_body}>
                  <p className={uStyles.num}>5/22</p>
                  <p>星期三</p>
                  <div className={pStyles.flexbox}>
                    <p>
                      下午<span className={uStyles.num}>3:00</span>
                    </p>
                    <p>超派健身房</p>
                  </div>
                </div>
              </div>
              <div className={pStyles.card}>
                <div className={pStyles.card_background}>
                  <FaLocationDot />
                  {/* <i className="fa-solid fa-location-dot"></i> */}
                </div>
                <div className={pStyles.card_body}>
                  <p className={uStyles.num}>5/22</p>
                  <p>星期三</p>
                  <div className={pStyles.flexbox}>
                    <p>
                      下午<span className={uStyles.num}>3:00</span>
                    </p>
                    <p>超派健身房</p>
                  </div>
                </div>
              </div>
              <div className={pStyles.card}>
                <div className={pStyles.card_background}>
                  <FaDumbbell />
                  {/* <i className="fa-solid fa-dumbbell"></i> */}
                </div>
                <div className={pStyles.card_body}>
                  <p className={uStyles.num}>5/22</p>
                  <p>星期三</p>
                  <div className={pStyles.flexbox}>
                    <p>
                      下午<span className={uStyles.num}>3:00</span>
                    </p>
                    <p>超派健身房</p>
                  </div>
                </div>
              </div>
              <div className={pStyles.card}>
                <div className={pStyles.card_background}>
                  <FaDumbbell />
                  {/* <i className="fa-solid fa-dumbbell"></i> */}
                </div>
                <div className={pStyles.card_body}>
                  <p className={uStyles.num}>5/22</p>
                  <p>星期三</p>
                  <div className={pStyles.flexbox}>
                    <p>
                      下午<span className={uStyles.num}>3:00</span>
                    </p>
                    <p>超派健身房</p>
                  </div>
                </div>
              </div>
              <div className={pStyles.more}>
                <a href="#">
                  <p>點我看更多</p>
                </a>
              </div>
            </div>

            <div className={pStyles.card_2}>
              <div className={pStyles.card}>
                <a href="#">
                  <div className={pStyles.card_body2}>
                    <h6>[我的課程]</h6>
                    <img
                      style={{ width: '70px' }}
                      src="/users-img/elderpeople.svg"
                      alt="我的課程圖片"
                    />
                  </div>
                </a>
              </div>
              <div className={pStyles.card}>
                <a href="#">
                  <div className={pStyles.card_body2}>
                    <h6>[歷史訂單]</h6>
                    <img
                      style={{ width: '123px' }}
                      src="/users-img/order.svg"
                      alt="歷史訂單圖片"
                    />
                  </div>
                </a>
              </div>
              <div className={pStyles.card}>
                <a href="#">
                  <div className={pStyles.card_body2}>
                    <h6>[我的預約]</h6>
                    <img
                      style={{ width: '123px' }}
                      src="/users-img/location_arrow.svg"
                      alt="我的預約圖片"
                    />
                  </div>
                </a>
              </div>
              <div className={pStyles.card}>
                <a href="#">
                  <div className={pStyles.card_body2}>
                    <h6>[我的收藏]</h6>
                    <img
                      style={{ width: '123px' }}
                      src="/users-img/heart.svg"
                      alt="我的收藏圖片"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className={uStyles.footer}>
        <div className={uStyles.icon}>
          <li>
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-line"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </div>
        <div>
          <img src="/users-img/logo-forNow-small.svg" alt="" />
          <p>Copyright &copy; 2024 All Rights Reserved. </p>
        </div>
      </footer>
      {/* <!-- mobile的footer --> */}
      <footer className={uStyles.mobile_footer}>
        <div className={uStyles.footer_info}>
          <li>
            <a href="#" className={uStyles.footer_title}>
              <h6>網站資訊</h6>
            </a>
          </li>
          <div className={uStyles.content}>
            <li>
              <a href="#">
                <p>關於我們</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>聯絡我們</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>隱私政策</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>服務條款</p>
              </a>
            </li>
          </div>
          <li>
            <a href="#" className={uStyles.footer_title}>
              <h6>我想要運動</h6>
            </a>
          </li>
          <div className={uStyles.content}>
            <li>
              <a href="#">
                <p>去那裡運動?</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>有那些課程?</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>教練資歷</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>運動商城</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>知識補給</p>
              </a>
            </li>
          </div>
          <li>
            <a href="#" className={uStyles.footer_title}>
              <h6>常見問題</h6>
            </a>
          </li>
          <div className={uStyles.content}>
            <li>
              <a href="#">
                <p>如何預約課程?</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>哪個教練適合我?</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>怎麼買商品?</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>如何加入會員</p>
              </a>
            </li>
          </div>
        </div>
        <div className={uStyles.mobile_footer_img}>
          <img src="/users-img/logo-forNow-mini.svg" alt="" />
        </div>
      </footer>
    </>
  )
}
