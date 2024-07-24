import React, { useEffect } from 'react'
import styles from './checkout3-order.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useAuth } from '@/context/auth-context' // useAuth 的鉤子
import axios from 'axios'

export default function Checkout3Order() {
  const [orderDetail, setOrderDetail] = useState([
    { ProductOrders_recipient_name: '' },
  ])

  const { auth } = useAuth()
  // console.log('auth:', auth)
  // console.log(orderDetail)
  const router = useRouter()

  //處理付款
  const handlePayment = async () => {
    console.log('Order ID:', router.query.order_id)
    try {
      const amount = orderDetail.reduce(
        (acc, item) =>
          acc +
          item.OrdersDetail_product_quantity *
            item.OrdersDetail_unit_price_at_time,
        0
      )

      const response = await axios.get(
        `http://localhost:3001/product-payment?amount=${amount}&orderId=${router.query.order_id}`
      )
      if (response.data.htmlContent) {
        const tempDiv = document.createElement('div')
        tempDiv.innerHTML = response.data.htmlContent
        const form = tempDiv.querySelector('form')
        if (form) {
          document.body.appendChild(form)
          form.submit()
        } else {
          console.error('找不到支付表單')
        }
      } else {
        console.error('無效的回應格式')
      }
    } catch (error) {
      console.error('發生錯誤:', error)
    }
  }

  useEffect(() => {
    if (router.isReady) {
      fetch(
        `http://localhost:3001/product/orderdetail?order_id=${router.query.order_id}`
      )
        .then((response) => response.json())
        .then((data) => {
          // console.log(data)
          setOrderDetail(data.orderDetail || [])
          console.log(orderDetail[0])
        })
      console.log(router.query.order_id)
    }
  }, [router.isReady, router.query.order_id])

  //計算總數量
  const calcTotalQty = () => {
    let total = 0
    for (let i = 0; i < orderDetail.length; i++) {
      total += orderDetail[i].OrdersDetail_product_quantity
    }
    return total
  }

  //時間insert在DB的 productorders Table裡
  // 獲取第一張圖片
  // 確認 orderDetail 是否有數據
  // if (orderDetail.length === 0 || !orderDetail[0].Product_photo) {
  //   return <div>Loading...</div>
  // }

  // 獲取第一張圖片
  // const firstPhoto = orderDetail[0].Product_photo.split(',')[0].trim()

  return (
    <>
      <div className={`col-12 col-md-6 mt-5 ${styles.box1}`}>
        <p
          style={{
            marginTop: '20px',
            color: '#1A394A',
            fontSize: '25px',
            // display: 'flex',
            // justifyContent: 'center',
          }}
        >
          訂單明細
        </p>
        <div
          className="d-flex"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <p style={{ fontSize: '20px' }}>
            訂購人:{orderDetail[0].ProductOrders_recipient_name}
          </p>
          <p style={{ fontSize: '20px' }}>
            下訂日期: {orderDetail[0].orderDetail_time}
          </p>
        </div>
        <p
          style={{
            fontSize: '20px',
            borderTop: '1px solid #1A394A',
            borderBottom: '1px solid #1A394A',
          }}
        >
          訂單編號:{orderDetail[0].orderDetail_number}
        </p>
        {/* ------------------------------------- */}
        {/* <div className={styles.place}>
          <span style={{ fontSize: '25px' }}>商品:</span>
          <span style={{ fontSize: '25px' }}>價錢:</span>
        </div>
        {orderDetail.map((v, i) => (
          <div key={i} className={styles.place}>
            <span>
              {v.Product_name}x{v.OrdersDetail_product_quantity}
            </span>
            <span>{v.OrdersDetail_unit_price_at_time}</span>
          </div>
        ))} */}
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">商品</th>
              <th scope="col">價格</th>
            </tr>
          </thead>
          <tbody>
            {orderDetail.map((v, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>
                  {v.Product_name} x {v.OrdersDetail_product_quantity}
                </td>
                <td>{v.OrdersDetail_unit_price_at_time}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* ------------------------------- */}

        {/* <p style={{ fontSize: '25px' }}>
          照片{' '}
          <img
            src={`../../product-img/${firstPhoto}`} // 確保這裡的路徑正確
            alt="Product"
            style={{ width: '100px', height: '100px' }} // 根據需要調整圖片大小
          />
        </p> */}
        <div className={styles.subtotal}>
          <span style={{ fontSize: '25px' }}>總數量:</span>
          <span style={{ fontSize: '25px' }}>{calcTotalQty()}</span>
          <span style={{ fontSize: '25px' }}>總金額:</span>
          <span style={{ fontSize: '25px' }}>
            NT$
            {orderDetail.reduce(
              (acc, item) =>
                acc +
                item.OrdersDetail_product_quantity *
                  item.OrdersDetail_unit_price_at_time,
              0
              //orderDetail 是包含訂單項目的數組。
              // reduce 方法對數組中的每個元素執行提供的回調函數（這裡是 (acc, item) => acc + item.qty），將每次回調函數的返回值累積到一個累加器（acc）。
              // acc 是累加器，初始值為 0（即 reduce 方法的第二個參數 0）。
              // item 是數組中的當前元素。
              // acc + item.qty 將當前元素的 qty（商品數量）加到累加器中。
              // 這樣，最終 reduce 方法返回累加器的值，即所有商品的總數量。
            )}
          </span>
        </div>
      </div>
      <div className="col-12 col-md-6 mt-5 h6 text-center">
        選擇付款方式
        <div>
          <select
            id=""
            name=""
            className={styles.customSelect}
            aria-label="Default select example"
            style={{
              width: '70%',
              height: '50px',
              borderRadius: '50px',
              marginTop: '30px',
              marginBottom: '20px',
              marginLeft: '30px',
            }}
          >
            <option className="text-center">請選擇</option>
            <option value="" className="text-center">
              信用卡/金融卡{' '}
            </option>
            <option value="" className="text-center">
              line Pay
            </option>
            <option value="" className="text-center">
              貨到付款
            </option>
            <option value="" className="text-center"></option>
          </select>
        </div>
        <div
          className={`con-12 col-md-12 text-center d-flex justify-content-center align-items-center`}
        >
          <button className={styles.btn} type="botton" onClick={handlePayment}>
            完成付款
          </button>
        </div>
      </div>
    </>
  )
}
