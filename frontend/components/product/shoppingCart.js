'use client'
import React, { useEffect, useRef } from 'react'
import { IoCloseSharp, IoAddSharp, IoRemove, IoCart } from 'react-icons/io5'
import styles from '../common/layout.module.css'
import { useState } from 'react'
import { useCart } from '@/hooks/product/use-cart'

export default function ShoppingCart() {
  const { item, increaseItem, decreaseItem, removeItem, shoppingList, total } =
    useCart()

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
              {/* <div style={{ display: 'flex', gap: '17px' }}> */}
              {shoppingList &&
                shoppingList.map((v, i) => {
                  return (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        gap: '17px',
                        marginBottom: `50px`,
                      }}
                    >
                      <img
                        src={`/product-img/${v.Product_photo}`}
                        alt=""
                        style={{ width: '30%', borderRadius: '25px' }}
                      />
                      <ul>
                        <li style={{ paddingBottom: '20px' }}>
                          商品:{v.Product_name}
                        </li>
                        {/* <li style={{ paddingBottom: '20px' }}>
                          特色: {v.Product_desc}
                        </li> */}
                        <li>價格: {v.Product_price}</li>
                      </ul>

                      <div>
                        <IoCloseSharp
                          style={{
                            marginLeft: '50px',
                          }}
                          onClick={() => {
                            if (confirm('要刪除嗎?')) {
                              removeItem(v.Product_id)
                            }
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
                                  if (confirm('這樣會整個刪掉喔!確定嗎?')) {
                                    removeItem(v.Product_id)
                                  }
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
                padding: '0 0 20px 20px',
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
                }}
                onClick={() => {
                  window.location.href = '../product/product-order'
                }}
              >
                前往付款
              </button>
            </div>
          </div>
          {/* </div> */}
        </a>
      </li>
    </>
  )
}
