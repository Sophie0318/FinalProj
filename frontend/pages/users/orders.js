import React from 'react'
import LayoutUser from '@/components/layout/user-layout3'
import Select from '@/components/common/select/select'
import OrderRow from '@/components/users/order-row'
import styles from '@/styles/user-orders.module.css'

// 測試用資料，連到資料庫後要刪掉
import orders from '@/data/FakeOrders.json'
import options from '@/data/FakeOptions.json'

export default function LessonsOrders() {
  // 產出卡片的函式, 參數 data=Array.map的v
  const renderRow = (data) => {
    return (
      <OrderRow
        order_id={data.order_id}
        first_item_name={data.first_item.name}
        first_item_quantity={data.first_item.quantity}
        first_item_price={data.first_item.price}
        first_item_imgSrc={data.first_item.imgSrc}
        other_items={data.other_items}
        totalQuantity={data.totalQuantity}
        totalPrice={data.totalPrice}
      />
    )
  }
  return (
    <>
      <LayoutUser title="myLessons">
        <div className={styles.userinfo_orders}>
          <div className={styles.user_title}>
            <h4>我的訂單</h4>
          </div>
          <div className={styles.user_select}>
            <Select options={options} />
          </div>
          <div>
            {orders.map((v, i) => {
              return (
                <div className="resultGrid" key={v.order_id}>
                  {renderRow(v)}
                </div>
              )
            })}
          </div>

          <div className={styles.pagination}>
            <div
              style={{
                width: '450px',
                height: '50px',
                backgroundColor: '#BBB',
              }}
            >
              pagination
            </div>
          </div>
        </div>
      </LayoutUser>
    </>
  )
}
