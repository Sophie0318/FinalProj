import React from 'react'
import styles from '@/styles/product-list.module.css'

export default function CardList() {
  return (
    <>
      <div className="col-12 col-md-8">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-6 col-lg-4 mb-3 ">
            <div className={styles.cardsize}>
              <img
                src="/product-img/cloth.jpg"
                alt=""
                className={`w-100 ${styles.imagradius}`}
              />
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
              <img
                src="/product-img/cloth.jpg"
                alt=""
                className={`w-100 ${styles.imagradius}`}
              />
              <div className={styles.cardbody}>
                <h6 className={styles.cardText}>商品</h6>
                <h6 className={styles.cardText}>價錢</h6>
                <div className="d-flex flex-row bd-highlight mb-3 mx-3">
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
              <img
                src="/product-img/cloth.jpg"
                alt=""
                className={`w-100 ${styles.imagradius}`}
              />
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
              <img
                src="/product-img/cloth.jpg"
                alt=""
                className={`w-100 ${styles.imagradius}`}
              />
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
              <img
                src="/product-img/cloth.jpg"
                alt=""
                className={`w-100 ${styles.imagradius}`}
              />
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
              <img
                src="/product-img/cloth.jpg"
                alt=""
                className={`w-100 ${styles.imagradius}`}
              />
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

        {/* 分頁 (Pagination) */}
        {/* 商品卡片 */}
      </div>
    </>
  )
}
