import React from 'react'
import styles from '@/styles/product-list.module.css'

export default function CardList({ id, name, price }) {
  return (
    <>
      <div className={styles.cardsize}>
        <img
          src="/product-img/cloth.jpg"
          alt=""
          className={`w-100 ${styles.imagradius}`}
        />
        <div className={styles.cardbody}>
          <h6 className={styles.cardText}>{name}</h6>
          <h6 className={styles.cardText}>{price}</h6>
          <div className="d-flex flex-row bd-highlight mb-1 mx-2">
            <div className={styles.color1}></div>
            <div className={styles.color2}></div>
            <div className={styles.color3}></div>
            <div className={styles.color4}></div>
          </div>
        </div>
      </div>
    </>
  )
}
//在上面傳進img  img src="/product-img/{img}"
