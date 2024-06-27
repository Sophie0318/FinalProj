import React from 'react'
import Image from 'next/image'
import styles from '@/styles/product-list.module.css'
import { FaSearch } from 'react-icons/fa'
import Layout2 from '@/components/layout/layout2'

export default function ProductList() {
  return (
    <Layout2 pageName="products">
      <main className={styles.mainWithMargin}>
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
                        <h6 className={styles.cardText}>商品</h6>
                        <h6 className={styles.cardText}>價錢</h6>
                        <div className="d-flex flex-row bd-highlight mb-1 mx-2">
                          <div className={styles.color1}></div>
                          <div className={styles.color2}></div>
                          <div className={styles.color3}></div>
                          <div className={styles.color4}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <div className={styles.cardsize}>
                      <img src="/product-img/cloth.jpg" alt="" class="w-100" />
                      <div className={styles.cardbody}>
                        <h6 className={styles.cardText}>商品</h6>
                        <h6 className={styles.cardText}>價錢</h6>
                        <div className="d-flex flex-row bd-highlight mb-1 mx-2">
                          <div className={styles.color1}></div>
                          <div className={styles.color2}></div>
                          <div className={styles.color3}></div>
                          <div className={styles.color4}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <div className={styles.cardsize}>
                      <img src="/product-img/cloth.jpg" alt="" class="w-100" />
                      <div className={styles.cardbody}>
                        <h6 className={styles.cardText}>商品</h6>
                        <h6 className={styles.cardText}>價錢</h6>
                        <div className="d-flex flex-row bd-highlight mb-1 mx-2">
                          <div className={styles.color1}></div>
                          <div className={styles.color2}></div>
                          <div className={styles.color3}></div>
                          <div className={styles.color4}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <div className={styles.cardsize}>
                      <img src="/product-img/cloth.jpg" alt="" class="w-100" />
                      <div className={styles.cardbody}>
                        <h6 className={styles.cardText}>商品</h6>
                        <h6 className={styles.cardText}>價錢</h6>
                        <div className="d-flex flex-row bd-highlight mb-1 mx-2">
                          <div className={styles.color1}></div>
                          <div className={styles.color2}></div>
                          <div className={styles.color3}></div>
                          <div className={styles.color4}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <div className={styles.cardsize}>
                      <img src="/product-img/cloth.jpg" alt="" class="w-100" />
                      <div className={styles.cardbody}>
                        <h6 className={styles.cardText}>商品</h6>
                        <h6 className={styles.cardText}>價錢</h6>
                        <div className="d-flex flex-row bd-highlight mb-1 mx-2">
                          <div className={styles.color1}></div>
                          <div className={styles.color2}></div>
                          <div className={styles.color3}></div>
                          <div className={styles.color4}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <div className={styles.cardsize}>
                      <img src="/product-img/cloth.jpg" alt="" class="w-100" />
                      <div className={styles.cardbody}>
                        <h6 className={styles.cardText}>商品</h6>
                        <h6 className={styles.cardText}>價錢</h6>
                        <div className="d-flex flex-row bd-highlight mb-1 mx-2">
                          <div className={styles.color1}></div>
                          <div className={styles.color2}></div>
                          <div className={styles.color3}></div>
                          <div className={styles.color4}></div>
                        </div>
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
                {/* 商品卡片 */}
              </div>
            </div>
          </div>
        </div>
        <section className="join-member">
          <div className="container p-0">
            <div className="row flex-column align-items-center text-center">
              <div className="col-lg-7 join-member-card bg-secondary">
                <h3>加入會員 ?</h3>
                <p>看完我們的網站心動了嗎？立馬點擊下面按鈕加入會員！</p>
                <button className="btn btn-lg btn-primary text-white h4-font rounded-pill">
                  去健身
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout2>
  )
}
