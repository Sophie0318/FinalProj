import React, { useState } from 'react'
import styles from './checkout2-input.module.css'
import { useRouter } from 'next/router'
import { useAuth } from '@/context/auth-context' // useAuth 的鉤子
import { useCart } from '@/hooks/product/use-cart'
import { useEffect } from 'react'

export default function Checkout2Input() {
  //表單狀態
  const [myForm, setMyform] = useState({
    ProductOrders_recipient_name: '',
    ProductOrders_recipient_phone: '',
  })
  const onChange = (e) => {
    const newForm = { ...myForm, [e.target.name]: e.target.value }
    setMyform(newForm)
  }
  //
  const router = useRouter()
  const { auth } = useAuth()
  const { checkout, setCheckout } = useCart() // 使用 useCart 的鉤子
  // console.log(checkout)
  const [orderDetail, setOrderDetail] = useState([])

  //把表單丟去後端
  const onSubmit = async (e) => {
    e.preventDefault()

    const r = await fetch('http://localhost:3001/product/addorder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...myForm, orderDetail }),
    })
    const result = await r.json()
    console.log(result)
    router.push(`/product/product-checkout3?order_id=${result}`)
  }
  //

  const memberData = (e) => {
    if (e.target.checked) {
      if (!auth.token) {
        router.push('/users/sign_in')
      } else {
        setMyform((prevData) => ({
          ...prevData,
          ProductOrders_recipient_name: auth.name,
          ProductOrders_recipient_phone: auth.mobile, // 使用 mobile 或 phone，取決於您在後端返回的字段名
        }))
      }
    } else {
      setMyform({
        ProductOrders_recipient_name: '',
        ProductOrders_recipient_phone: '',
      })
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedItems = localStorage.getItem('shoppingCart')
      // console.log('Saved items:', savedItems)

      if (savedItems) {
        setOrderDetail(savedItems)
        console.log('Saved items:', savedItems)
        console.log(orderDetail)
      }
    }
  }, [])

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="col-12 col-md-12 text-center d-flex justify-content-center align-items-center mb-3">
          <div className={styles.ppp}>
            <input
              type="checkbox"
              id="member"
              name="member"
              className={styles.customCheckbox}
              onChange={memberData}
            />
            <span>同會員資料</span>
          </div>
        </div>
        <div className={`col-12 col-md-12 text-center mb-5  ${styles.inside}`}>
          <div className="col-6 col-md-6">姓名</div>
          <input
            type="text"
            name="ProductOrders_recipient_name"
            id="name"
            value={myForm.ProductOrders_recipient_name}
            onChange={onChange}
            className={styles.outside}
            placeholder="請輸入姓名"
          />
        </div>
        <div className={`col-12 col-md-12 text-center mb-5 ${styles.inside}`}>
          <div className="col-6 col-md-6">手機</div>
          <input
            type="number"
            name="ProductOrders_recipient_phone"
            id="phone"
            value={myForm.ProductOrders_recipient_phone}
            onChange={onChange}
            className={styles.outside}
            placeholder="請輸入手機號碼"
          />
        </div>
        <div className={`col-12 col-md-12 text-center mb-5 ${styles.inside}`}>
          <div className="col-6 col-md-6">取貨門市</div>
          <input
            type="text"
            value={checkout.storename}
            className={styles.outside}
            disabled
          />
        </div>
        <div
          className={`con-12 col-md-12 text-center d-flex justify-content-center align-items-center`}
        >
          <button
            className={styles.btn}
            // onClick={() => }
          >
            確定
          </button>
        </div>
      </form>
    </>
  )
}
