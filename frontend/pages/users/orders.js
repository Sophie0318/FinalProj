import React, { useEffect, useState } from 'react'
import LayoutUser from '@/components/layout/user-layout3'
import Select from '@/components/common/select/select'
import OrderRow from '@/components/users/order-row'
import styles from '@/styles/user-orders.module.css'
import { auth } from '@/configs/firebase'

export default function LessonsOrders() {
  const [orders, setOrders] = useState([])
  // const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // 從 localStorage 獲取用戶 ID
        const authData = JSON.parse(localStorage.getItem('suan-auth') || '{}')
        const userId = authData.id

        if (!userId) {
          throw new Error('User ID not found')
        }

        const response = await fetch(
          `http://localhost:3001/users/myOrders/${userId}`
        )
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        if (data.success) {
          setOrders(data.orders)
        } else {
          console.error('Failed to fetch orders:', data.message)
        }
      } catch (error) {
        console.error('Error fetching orders:', error)
      } finally {
        // setIsLoading(false)
      }
    }

    fetchOrders()
  }, [])

  // if (isLoading) {
  //   return <div>Loading...</div>
  // }

  return (
    <LayoutUser title="myLessons">
      <div className={styles.userinfo_orders}>
        <div className={styles.user_title}>
          <h4>我的訂單</h4>
        </div>

        <div>
          {orders.map((order) => (
            <OrderRow
              key={order.Productorders_orders_id}
              order_id={order.Productorders_orders_id}
              first_item_imgSrc={order.Product_photo}
              first_item_name={order.Product_name}
              first_item_quantity={order.OrdersDetail_product_quantity}
              first_item_price={order.OrdersDetail_unit_price_at_time}
              totalQuantity={order.OrdersDetail_product_quantity}
              totalPrice={
                order.OrdersDetail_product_quantity *
                order.OrdersDetail_unit_price_at_time
              }
            />
          ))}
        </div>
      </div>
    </LayoutUser>
  )
}
