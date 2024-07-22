import React from 'react'
import styles from '@/styles/product-success.module.css'
import Layout3 from '@/components/layout/layout3'
import { useEffect } from 'react'
import Link from 'next/link'

export default function ProductSuccess() {
  useEffect(() => {
    // 清空 localStorage 裡的商品
    localStorage.removeItem('shoppingCart')
  }, [])
  return (
    <div>
      <Layout3>
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.success}>付款成功！</div>
            <div className={styles.reminder}>記得要取貨喔～</div>
            <div className={styles.reserveInfo}>
              <div className={styles.infoRow}>
                <div className={styles.label}></div>
                <div className={styles.details}>
                  <div className={styles.lessonInfo}>
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.btns}>
              <button className={styles.btnBack}>檢視訂單</button>
              <Link href="/product" legacyBehavior>
                <a className={styles.btnFin}>回到商城頁</a>
              </Link>
            </div>
          </div>
        </div>
      </Layout3>
    </div>
  )
}