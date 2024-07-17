import React, { useState } from 'react'
import styles from './checkout2-input.module.css'
import { useRouter } from 'next/router'
import { useAuth } from '@/context/auth-context' // useAuth 的鉤子
import { useCart } from '@/hooks/product/use-cart'
import { useEffect } from 'react'

export default function Checkout2Input() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  })
  const router = useRouter()
  const { auth } = useAuth()
  const { checkout, setCheckout } = useCart() // 使用 useCart 的鉤子
  console.log(checkout)

  const memberData = (e) => {
    if (e.target.checked) {
      if (!auth.token) {
        router.push('/users/sign_in')
      } else {
        setFormData((prevData) => ({
          ...prevData,
          name: auth.name,
          phone: auth.mobile, // 使用 mobile 或 phone，取決於您在後端返回的字段名
        }))
      }
    } else {
      setFormData({
        name: '',
        phone: '',
      })
    }
  }

  return (
    <>
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
          name="name"
          id="name"
          value={formData.name}
          className={styles.outside}
          placeholder="請輸入姓名"
        />
      </div>
      <div className={`col-12 col-md-12 text-center mb-5 ${styles.inside}`}>
        <div className="col-6 col-md-6">手機</div>
        <input
          type="phone"
          name="name"
          id="phone"
          value={formData.phone}
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
    </>
  )
}
