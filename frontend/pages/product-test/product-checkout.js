import React from 'react'
import styles from '@/styles/product-checkout.module.css'

export default function ProductCheckout() {
  return (
    <>
      {/* 結帳進度 */}
      <div className="container">
        <div className="row">
          <div className={`col-3 col-md-3  ${styles.size}`}>
            <div className={styles.test}>1</div>
            <div className={styles.checkFount}>1.檢視商品</div>
          </div>
          <div className={`col-3 col-md-3 ${styles.size} `}>
            <div className={styles.test}>2</div>
            <div className={styles.checkFount}>2.選擇配送</div>
          </div>
          <div className={`col-3 col-md-3 ${styles.size}`}>
            <div className={styles.test}>3</div>
            <div className={styles.checkFount}>3.選擇付款</div>
          </div>
          <div className={`col-3 col-md-3 ${styles.size}`}>
            <div className={styles.test}>4</div>
            <div className={styles.checkFount}>4.完成結帳</div>
          </div>
        </div>
        {/* 結帳進度 */}
        <div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={{ marginBottom: '50px' }}>
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  全家
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">dsdsd</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  7-ELEVEN
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">dfdf</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  萊爾富
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">fdf</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
