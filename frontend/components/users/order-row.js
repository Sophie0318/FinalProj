import React, { useState } from 'react'
import styles from './order-row.module.css'

export default function OrderRow({
  order_id = '預設',
  first_item_imgSrc = '',
  first_item_name = '預設商品',
  first_item_quantity = '預設',
  first_item_price = '預設',
  other_items = [],
  totalQuantity = '預設',
  totalPrice = '預設',
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded)
  }
  return (
    <>
      <div className={styles.order}>
        <div className={styles.ordernumber}>
          {/* 訂單編號尚未處理 */}
          <p>訂單編號:{`FJWLR65411${order_id}`}</p>
        </div>
        <div className={styles.first_item}>
          <img
            className={styles.product_image}
            src={`/product-img/${first_item_imgSrc}`}
            alt=""
          />
          <div className={styles.product_detail}>
            <div className={styles.product_description}>
              <p className={styles.product_name}>{first_item_name}</p>
            </div>
            <div className={styles.product_price_warpper}>
              <p className={styles.quantity}>x{first_item_quantity}</p>
              <p className={styles.price}>${first_item_price}</p>
            </div>
          </div>
        </div>

        {other_items.map((v, i) => {
          return (
            <div key={v.id} className={styles.other_item}>
              <img
                className={styles.product_image}
                src={`/product-img/${v.imgSrc}`}
                alt=""
              />
              <div className={styles.product_detail}>
                <div className={styles.product_description}>
                  <p className={styles.product_name}>{v.name}</p>
                </div>
                <div className={styles.product_price_warpper}>
                  <p className={styles.quantity}>x{v.quantity}</p>
                  <p className={styles.price}>${v.price}</p>
                </div>
              </div>
            </div>
          )
        })}
        <div className={styles.accordion} onClick={toggleAccordion}>
          <p>{isExpanded ? '點擊收起' : '點擊展開已購買的商品'}</p>
        </div>
        <div className={styles.sum}>
          <p>總商品數:{totalQuantity}</p>
          <p>訂單金額:${totalPrice}</p>
        </div>
      </div>
    </>
  )
}
