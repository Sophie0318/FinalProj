'use client'
import React, { useEffect, useRef } from 'react'
import { IoCloseSharp, IoAddSharp, IoRemove, IoCart } from 'react-icons/io5'
import styles from '../common/layout.module.css'
import { useState } from 'react'

export default function ShoppingCart({
  item,
  increaseItem,
  decreaseItem,
  removeItem,
}) {
  // if (typeof window !== 'undefined') {
  //   const saveItems = localStorage.getItem('shoppingCart')
  //   item = saveItems ? JSON.parse(saveItems) : item
  //   console.log(`Shopping Cart saveItems: ${saveItems}`)
  //   console.log(`Shopping Cart Item: ${JSON.stringify(item)}`)
  // }
  const [shoppingList, setShoppingList] = useState([])
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saveItems = localStorage.getItem('shoppingCart')
      setShoppingList(saveItems ? JSON.parse(saveItems) : item)
      // console.log(`Shopping Cart saveItems: ${saveItems}`)
      // console.log(`Shopping Cart Item: ${JSON.stringify(item)}`)
      // console.log(`shoppingList: ${JSON.stringify(shoppingList)}`)
    }
  }, [item])

  console.log(`shoppingList: ${shoppingList}`)
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
              <div style={{ display: 'flex', gap: '17px' }}>
                {shoppingList &&
                  shoppingList.map((v, i) => {
                    return (
                      <div key={i}>
                        <img
                          src="/product-img/大豆.webp"
                          alt=""
                          style={{ width: '30%', borderRadius: '25px' }}
                        />
                        <ul>
                          <li style={{ paddingBottom: '20px' }}>
                            商品:{v.Product_name}
                          </li>
                          <li style={{ paddingBottom: '20px' }}>
                            特色: {v.Product_desc}
                          </li>
                          <li>價格: {v.Product_price}</li>
                        </ul>
                        <div
                          className="d-flex"
                          style={{ height: '30px', marginTop: '70px' }}
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
                              onClick={() => decreaseItem(v.Product_id)}
                            />
                          </div>
                        </div>
                        <div>
                          <IoCloseSharp
                            style={{
                              marginLeft: '50px',
                            }}
                            onClick={() => removeItem(v.Product_id)}
                          />
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
                <p>NT$FFFF</p>
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
                >
                  前往付款
                </button>
              </div>
            </div>
          </div>
        </a>
      </li>
    </>
  )
}
