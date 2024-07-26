'use client'
import React, { useEffect, useState } from 'react'
import { IoCloseSharp, IoAddSharp, IoRemove, IoCart } from 'react-icons/io5'
import styles from '../common/layout.module.css'
import buttonStyles from './shopping-btn.module.css'
import { useCart } from '@/hooks/product/use-cart'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import Link from 'next/link'

export default function ShoppingCart() {
  const { item, increaseItem, decreaseItem, removeItem, shoppingList, total } =
    useCart()
  const MySwal = withReactContent(Swal)

  // 确保组件仅在客户端渲染时进行交互
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  const notifyAndRemove = (itemName, itemId) => {
    MySwal.fire({
      title: '你確定要刪除嗎?',
      text: '不再考慮一下?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#1A394A',
      cancelButtonColor: '#d33',
      cancelButtonText: '取消',
      confirmButtonText: '確定刪除!',
      willOpen: () => {
        const swalPopup = document.querySelector('.swal2-popup')
        if (swalPopup) {
          swalPopup.style.backgroundColor = '#FFF7E9'
          swalPopup.style.color = '#1a394a'
          swalPopup.style.borderRadius = '50px'
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          title: '已刪除!',
          text: itemName + '已被刪除',
          icon: 'success',
          willOpen: () => {
            const swalPopup = document.querySelector('.swal2-popup')
            if (swalPopup) {
              swalPopup.style.backgroundColor = '#FFF7E9'
              swalPopup.style.color = '#1a394a'
            }
          },
        })
        removeItem(itemId)
      }
    })
  }

  if (!isClient) {
    return null // 确保服务器端不渲染此部分
  }

  return (
    <>
      <li>
        <a href="#">
          <IoCart
            className={styles.cart}
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
                        gap: '5px',
                        marginBottom: '50px',
                        justifyContent: 'space-between',
                      }}
                    >
                      <img
                        src={`/product-img/${v.Product_photo}`}
                        alt=""
                        style={{ width: '35%', borderRadius: '25px' }}
                      />
                      <ul>
                        <li
                          style={{
                            paddingBottom: '20px',
                            fontSize: '20px',
                          }}
                        >
                          商品:
                          <br /> {v.Product_name}
                        </li>
                        <li
                          style={{
                            fontSize: '20px',
                          }}
                        >
                          價格: <br /> {v.Product_price}
                        </li>
                      </ul>

                      <div>
                        <IoCloseSharp
                          style={{
                            marginLeft: '76px',
                          }}
                          onClick={() => {
                            notifyAndRemove(v.Product_name, v.Product_id)
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
                                  notifyAndRemove(v.Product_name, v.Product_id)
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
              <p style={{ fontSize: '25px', color: '#1a394a' }}>小計</p>
              <p style={{ fontSize: '25px', color: '#1a394a' }}>
                NT${total.toLocaleString()}
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '50px',
                marginBottom: '50px',
              }}
            >
              <Link href="/product/product-order" legacyBehavior passHref>
                <a className={buttonStyles.btn}>
                  <span>前往付款</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </a>
      </li>
    </>
  )
}
