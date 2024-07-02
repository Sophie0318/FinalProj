import React from 'react'
import styles from '@/styles/product-checkout1.module.css'
import { IoAddOutline } from 'react-icons/io5'
import ProductCheckout1 from '@/components/product/product-checkout1'
export default function ProductCheckout() {
  return (
    <>
      {/* 結帳進度 */}
      <div className="container">
        <ProductCheckout1 />
        {/* 結帳進度 */}
        {/* 手風琴 */}
        <div className="col-12 col-md-8  mx-auto text-center">
          <div className={`accordion  ${styles.qqq}`} id="accordionExample ">
            <div
              className="accordion-item"
              style={{ marginBottom: '50px', borderRadius: '30px' }}
            >
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  style={{
                    backgroundColor: 'white',
                    color: '#1a394a',
                    fontSize: '25px',
                    borderRadius: '100px',
                  }}
                  // hover 時的樣式
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#1a394a'
                    e.target.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'white'
                    e.target.style.color = '#1a394a'
                  }}
                >
                  全家
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse "
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  新增門市
                  <IoAddOutline style={{ fontSize: '25px' }} />
                </div>
              </div>
            </div>
          </div>
          <div className={`accordion ${styles.qqq}`} id="accordionExample">
            <div
              className="accordion-item"
              style={{ marginBottom: '50px', borderRadius: '30px' }}
            >
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                  style={{
                    backgroundColor: 'white',
                    color: '#1a394a',
                    fontSize: '25px',
                    borderRadius: '100px',
                  }}
                  // hover 時的樣式
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#1a394a'
                    e.target.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'white'
                    e.target.style.color = '#1a394a'
                  }}
                >
                  7-ELEVEN
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse "
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">嘿嘿</div>
              </div>
            </div>
          </div>
          <div className={`accordion ${styles.qqq}`} id="accordionExample">
            <div
              className="accordion-item"
              style={{ marginBottom: '50px', borderRadius: '30px' }}
            >
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="true"
                  aria-controls="collapseThree"
                  style={{
                    backgroundColor: 'white',
                    color: '#1a394a',
                    fontSize: '25px',
                    borderRadius: '100px',
                  }}
                  // hover 時的樣式
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#1a394a'
                    e.target.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'white'
                    e.target.style.color = '#1a394a'
                  }}
                >
                  萊爾富
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse "
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">嘿嘿</div>
              </div>
            </div>
          </div>
          <div className={`accordion ${styles.qqq}`} id="accordionExample">
            <div
              className="accordion-item"
              style={{ marginBottom: '50px', borderRadius: '30px' }}
            >
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="true"
                  aria-controls="collapseFour"
                  style={{
                    backgroundColor: 'white',
                    color: '#1a394a',
                    fontSize: '25px',
                    borderRadius: '100px',
                  }}
                  // hover 時的樣式
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#1a394a'
                    e.target.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'white'
                    e.target.style.color = '#1a394a'
                  }}
                >
                  OK-Mart
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse "
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">嘿嘿</div>
              </div>
            </div>
          </div>
          <div className={`accordion ${styles.qqq}`} id="accordionExample">
            <div
              className="accordion-item"
              style={{ marginBottom: '50px', borderRadius: '30px' }}
            >
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="true"
                  aria-controls="collapseFive"
                  style={{
                    backgroundColor: 'white',
                    color: '#1a394a',
                    fontSize: '25px',
                    borderRadius: '100px',
                  }}
                  // hover 時的樣式
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#1a394a'
                    e.target.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'white'
                    e.target.style.color = '#1a394a'
                  }}
                >
                  貨到付款
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse "
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">嘿嘿</div>
              </div>
            </div>
          </div>
          {/* 手風琴 end*/}
          <div className="row">
            <div className={`col6 col-md-12 text-center h5 ${styles.kkk}`}>
              <button className={styles.btn}>返回</button>
              <button className={styles.btn}>確認</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
