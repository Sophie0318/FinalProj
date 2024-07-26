import React, { useState } from 'react'
import styles from './order-row.module.css'

export default function OrderRow({
  orderDetail_number = '',
  items = [],
  totalQuantity = '',
  totalPrice = '',
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded)
  }

  // 提取第一個商品
  const firstItem = items[0] || {}

  return (
    <>
      <div className={styles.order}>
        <div className={styles.ordernumber}>
          <p>訂單編號: {orderDetail_number}</p>
        </div>
        <div className={styles.first_item}>
          <img
            className={styles.product_image}
            src={`/product-img/${firstItem.imgSrc}`}
            alt=""
          />
          <div className={styles.product_detail}>
            <div className={styles.product_description}>
              <p className={styles.product_name}>{firstItem.name}</p>
            </div>
            <div className={styles.product_price_warpper}>
              <p className={styles.quantity}>x{firstItem.quantity}</p>
              <p className={styles.price}>${firstItem.price}</p>
            </div>
          </div>
        </div>

        {isExpanded &&
          items.slice(1).map((v) => (
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
          ))}
        {items.length > 1 && (
          <div className={styles.accordion} onClick={toggleAccordion}>
            <p>{isExpanded ? '點擊收起' : '點擊展開已購買的商品'}</p>
          </div>
        )}
        <div className={styles.sum}>
          <p>總商品數: {totalQuantity}</p>
          <p>訂單金額: ${totalPrice}</p>
        </div>
      </div>
    </>
  )
}
