import React from 'react'
import Image from 'next/image'
import styles from '@/styles/product.module.css'
import { FaSearch } from 'react-icons/fa'

export default function ProductTest() {
  return (
    <div className="d-flex flex-column h-100">
      <main className="flex-shrink-0">
        {/* <!-- navbar --------------------------------> */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container-fluid fs-3">
            {/* <img src="./img/cama.png" alt="" style={{ width: "200px" }} /> */}
            <a className="navbar-brand fs-3" href="./index.html">
              貓咪咖啡館
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-2 mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="./news.html">
                    最新消息
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./product-list.html">
                    周邊商品
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./faq.html">
                    常見問題
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./about.html">
                    探索
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./product_homework.html">
                    熱門
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./contact.html">
                    聯絡我們
                  </a>
                </li>
              </ul>
              {/* <!-- 會員&購物車icon ----------------------> */}
              <div className="d-flex ms-auto">
                <button
                  className="btn btn-outline-success position-relative"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i className="bi bi-cart-fill fs-3"></i>

                  <span className="position-absolute top-0 start-25 translate-middle badge rounded-pill bg-danger">
                    99+
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </button>
                <a
                  className="btn btn-primary ms-2"
                  data-bs-toggle="offcanvas"
                  href="#offcanvasExample"
                  role="button"
                  aria-controls="offcanvasExample"
                >
                  <i className="bi bi-person-raised-hand fs-3"></i>
                </a>
              </div>
              {/* <!-- 會員&購物車icon ---------------------------> */}
            </div>
          </div>
        </nav>
        {/* <!-- navbar -END------------------------------->
      <!-- Bannner --> */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className={styles.banner}>
                {/* <!-- 麵包屑 --> */}
                <div className={styles.bread}>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item fs-5">
                        <a href="#" style={{ color: '#a7a7a7' }}>
                          首頁
                        </a>
                      </li>
                      <li
                        className="breadcrumb-item active fs-5"
                        style={{ color: '#a7a7a7' }}
                        aria-current="page"
                      >
                        商品
                      </li>
                    </ol>
                  </nav>
                </div>
                {/* <!-- 麵包屑 --> */}
                <div className={styles.bannerText}>
                  <h1>豐富的健身商城</h1>
                  <p>Find a product you need !</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Bannner --END-------> */}
        <div className={styles.container}>
          <div className={styles.fix}>
            <div className="row">
              <div className="col-12 col-md-3 ">
                <ul className="list-group">
                  <li className="list-group-item">類別</li>
                  <li className="list-group-item">居家訓練</li>
                  <li className="list-group-item">運動服飾</li>
                  <li className="list-group-item">健康食品</li>
                </ul>
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        健身護具
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div>
                          <label>
                            <input type="checkbox" />
                            護腰
                          </label>
                          <br />
                          <label>
                            <input type="checkbox" />
                            護膝
                          </label>
                          <br />
                          <label>
                            <input type="checkbox" />
                            護腿
                          </label>
                          <br />
                          <label>
                            <input type="checkbox" />
                            護踝
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 搜尋按鈕 */}
                <div className="wrap">
                  <div className={styles.search}>
                    <input
                      className={styles.searchBar}
                      type="text"
                      name="search"
                      id="search"
                      placeholder="搜尋商品"
                    />
                    <button className={styles.searchBtn}>
                      <FaSearch className={styles.iconLarge} />
                    </button>
                  </div>
                </div>
                {/* 搜尋按鈕 */}
              </div>
              {/* 商品卡片 */}

              <div className="col-12 col-md-7">
                <div className="row d-flex justify-content-center">
                  <div className="col-12 col-md-6 col-lg-4 mb-3 ">
                    <div className={styles.cardsize}>
                      <img src="/product-img/cloth.jpg" alt="" class="w-100" />
                      <div className={styles.cardbody}>
                        <p className={styles.cardText}>商品</p>
                        <p className={styles.cardText}>價錢</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <div className={styles.cardsize}>
                      <img src="/product-img/cloth.jpg" alt="" class="w-100" />
                      <div className={styles.cardbody}>
                        <p className={styles.cardText}>商品</p>
                        <p className={styles.cardText}>價錢</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <div className={styles.cardsize}>
                      <img src="/product-img/cloth.jpg" alt="" class="w-100" />
                      <div className={styles.cardbody}>
                        <p className={styles.cardText}>商品</p>
                        <p className={styles.cardText}>價錢</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <div className={styles.cardsize}>
                      <img src="/product-img/cloth.jpg" alt="" class="w-100" />
                      <div className={styles.cardbody}>
                        <p className={styles.cardText}>商品</p>
                        <p className={styles.cardText}>價錢</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <div className={styles.cardsize}>
                      <img src="/product-img/cloth.jpg" alt="" class="w-100" />
                      <div className={styles.cardbody}>
                        <p className={styles.cardText}>商品</p>
                        <p className={styles.cardText}>價錢</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <div className={styles.cardsize}>
                      <img src="/product-img/cloth.jpg" alt="" class="w-100" />
                      <div className={styles.cardbody}>
                        <p className={styles.cardText}>商品</p>
                        <p className={styles.cardText}>價錢</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 分頁 (Pagination) */}
                <nav
                  aria-label="Page navigation example"
                  className="d-flex justify-content-center"
                >
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
                {/* 分頁 (Pagination) */}
                {/* 加入會員卡片 */}
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-12 col-md-8 mt-5 text-center ">
                      <div
                        style={{ 'background-color': '#fff7e9' }}
                        className={styles.card1}
                      >
                        <div className="pt-4 fs-5">
                          <h3 className="fw-bold">會員資料</h3>
                          <p>
                            看完我們的網站心動了嗎？立馬點擊下面按鈕加入會員！
                          </p>
                        </div>
                        <button
                          style={{ 'background-color': '#1a394a' }}
                          className={styles.btn1}
                        >
                          去健身
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 商品卡片 */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
