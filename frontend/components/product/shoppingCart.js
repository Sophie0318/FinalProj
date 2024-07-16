'use client'
import React, { useEffect, useRef } from 'react'
import { IoCloseSharp, IoAddSharp, IoRemove, IoCart } from 'react-icons/io5'
import styles from '../common/layout.module.css'
import { useState } from 'react'
import { useCart } from '@/hooks/product/use-cart'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'

export default function ShoppingCart() {
  const { item, increaseItem, decreaseItem, removeItem, shoppingList, total } =
    useCart()

  const MySwal = withReactContent(Swal)
  const notifyAndRemove = (itemName, itemId) => {
    MySwal.fire({
      title: '你確定嗎?',
      text: '將無法回復這操作',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: '取消',
      confirmButtonText: '確定刪除!',
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          title: '已刪除!',
          text: itemName + '已被刪除',
          icon: 'success',
        })
        removeItem(itemId)
      }
    })
  }

  return (
    <>
      <li>
        <a href="#">
          <IoCart
            className={`${styles.cart}`}
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          />
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <h5 id="offcanvasRightLabel">
                {' '}
                <IoCart /> 您的購物車
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div
              className="offcanvas-body"
              style={{ backgroundColor: '#FFF7E9' }}
            >
              {shoppingList &&
                shoppingList.map((v, i) => {
                  return (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        gap: '17px',
                        marginBottom: `50px`,
                        justifyContent: 'space-between',
                      }}
                    >
                      <img
                        src={`/product-img/${v.Product_photo}`}
                        alt=""
                        style={{ width: '30%', borderRadius: '25px' }}
                      />
                      <ul>
                        <li style={{ paddingBottom: '20px' }}>
                          商品: {v.Product_name}
                        </li>
                        <li>價格: {v.Product_price}</li>
                      </ul>

                      <div>
                        <IoCloseSharp
                          style={{
                            marginLeft: '76px',
                          }}
                          onClick={() => {
                            notifyAndRemove(v.Product_name, v.Product_id) // 傳遞商品名稱和ID
                          }}
                        />
                        <div
                          className="d-flex"
                          style={{ height: '30px', marginTop: '100px' }}
                        >
                          <div
                            style={{
                              border: '1px solid black',
                              backgroundColor: '#1A394A',
                              display: 'flex',
                              alignItems: 'center',
                              justifyItems: 'center',
                              color: 'white',
                              fontSize: '30px',
                            }}
                          >
                            <IoAddSharp
                              onClick={() => increaseItem(v.Product_id)}
                            />
                          </div>
                          <div
                            style={{
                              backgroundColor: 'white',
                              color: '#1a394a',
                              width: '30px',
                              border: '1px solid black',
                              display: 'flex',
                              alignItems: 'center',
                              justifyItems: 'center',
                              paddingLeft: '8px',
                              fontSize: '25px',
                            }}
                          >
                            {v.qty}
                          </div>
                          <div
                            style={{
                              backgroundColor: '#1A394A',
                              border: '1px solid black',
                              display: 'flex',
                              alignItems: 'center',
                              justifyItems: 'center',
                              color: 'white',
                              fontSize: '30px',
                            }}
                          >
                            <IoRemove
                              onClick={() => {
                                const nextQty = v.qty - 1
                                if (nextQty === 0) {
                                  notifyAndRemove(v.Product_name, v.Product_id) // 傳遞商品名稱和ID
                                } else {
                                  decreaseItem(v.Product_id)
                                }
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
            </div>
            <div
              className="d-flex"
              style={{
                justifyContent: 'space-between',
                paddingLeft: '16px',
                paddingRight: '16px',
                marginTop: '50px',
              }}
            >
              <p>小計</p>
              <p>NT${total}</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '50px',
              }}
            >
              <button
                style={{
                  backgroundColor: '#1a394a',
                  borderRadius: '50px',
                  fontSize: '18px',
                  width: '265px',
                  height: '65px',
                  color: 'white',
                  marginBottom: '40px',
                }}
                onClick={() => {
                  window.location.href = '../product/product-order'
                }}
              >
                前往付款
              </button>
            </div>
          </div>
        </a>
      </li>
    </>
  )
}
