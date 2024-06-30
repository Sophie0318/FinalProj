import React from 'react'
import styles from '@/styles/product-order.module.css'
import { IoClose } from 'react-icons/io5'
import { IoAddSharp } from 'react-icons/io5'
import { IoRemove } from 'react-icons/io5'

export default function ProductOrder() {
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
        <div className="row">
          <div className={`col-12 col-md-12 text-center ${styles.Revise}`}>
            <h3>1.檢視商品</h3>
          </div>
          <table className={`table ${styles.customTable}`}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">商品</th>
                <th scope="col">商品名稱</th>
                <th scope="col">款式顏色</th>
                <th scope="col">數量</th>
                <th scope="col">價格</th>
                <th scope="col">
                  <IoClose style={{ fontSize: '40px' }} />{' '}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td style={{ width: '20%' }}>
                  <img src="/product-img/cloth.jpg" alt="" class="w-75" />
                </td>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  <div className="d-flex">
                    <div className={styles.contbtn}>
                      <IoAddSharp
                        style={{ color: 'white', fontSize: '20px' }}
                      />
                    </div>
                    <div
                      className={styles.contbtn}
                      style={{ backgroundColor: 'white', width: '30px' }}
                    >
                      4
                    </div>
                    <div className={styles.contbtn}>
                      <IoRemove
                        style={{
                          color: 'white',
                          fontSize: '20px',
                        }}
                      />
                    </div>
                  </div>
                </td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
          {/* <table className={`table ${styles.customTable}`}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">照片</th>
                <th scope="col">商品名稱</th>
                <th scope="col">款式顏色</th>
                <th scope="col">數量</th>
                <th scope="col">價格</th>
                <th scope="col">
                  <IoClose style={{ fontSize: '40px' }} />{' '}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">2</th>
                <td>
                  <img src="/product-img/cloth.jpg" alt="" class="w-75" />
                </td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table> */}
          <div className="row">
            <div
              className={`col-12 col-md-12 d-flex justify-content-between ${styles.count}`}
            >
              <h6>小計:總商品數</h6>
              <h6>總金額:</h6>
            </div>
          </div>
        </div>
        <div className="row">
          <div className={`col6 col-md-12 text-center h5 ${styles.kkk}`}>
            <button
              className={styles.btn}
              style={{ backgroundColor: '#6C6C6C' }}
            >
              返回
            </button>
            <button className={styles.btn}>確認</button>
          </div>
        </div>
      </div>
    </>
  )
}
