import React, { useEffect } from 'react'
import styles from './checkout3-order.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'

function generateRandomOrderId(length) {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export default function Checkout3Order() {
  const [orderDetail, setOrderDetail] = useState([])
  const [orderId, setOrderId] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedItems = localStorage.getItem('shoppingCart')
      // console.log('Saved items:', savedItems)
      if (savedItems) {
        setOrderDetail(JSON.parse(savedItems))
      }
    }
    setOrderId(generateRandomOrderId(10)) // 在組件加載時生成訂單編號
  }, [])

  //計算總數量
  const calcTotalQty = () => {
    let total = 0
    for (let i = 0; i < orderDetail.length; i++) {
      total += orderDetail[i].qty
    }
    return total
  }

  // console.log(orderDetail)

  return (
    <>
      <div className={`col-12 col-md-6 mt-5 ${styles.box1}`}>
        <p
          style={{
            marginTop: '20px',
            color: '#FFC800',
          }}
        >
          訂單明細
        </p>
        <p>訂單編號:{orderId}</p>
        <p>訂購人:</p>
        <div className={styles.place}>
          <span>商品:</span>
          <span>單個價錢:</span>
        </div>
        {orderDetail.map((v, i) => (
          <div key={i} className={styles.place}>
            <span>
              {v.Product_name}x{v.qty}
            </span>
            <span>{v.Product_price}</span>
          </div>
        ))}
        <div className={styles.subtotal}>
          <span>總數量:</span>
          <span>{calcTotalQty()}</span>
          <span>總金額:</span>
          <span>
            NT$
            {orderDetail.reduce(
              (acc, item) => acc + item.qty * item.Product_price,
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
    </>
  )
}
