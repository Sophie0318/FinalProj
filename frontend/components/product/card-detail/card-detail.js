import React from 'react'
import styles from './card-detail.module.css'

export default function CardDetail() {
  return (
    <>
      <div className={styles.cardsize}>
        <img
          src="/product-img/大豆.webp"
          alt=""
          className="img-fluid"
          style={{
            marginBottom: '110px',
          }}
        />
        <div className={styles.card}>
          <h6
            style={{
              paddingRight: '100px',
            }}
          >
            乳清蛋白
          </h6>
          <p>每份蛋白質含量高達....</p>
        </div>
      </div>
      <div className={styles.cardsize}>
        <img
          src="/product-img/大豆.webp"
          alt=""
          className="img-fluid"
          style={{
            marginBottom: '110px',
          }}
        />
        <div className={styles.card}>
          <h6
            style={{
              paddingRight: '100px',
            }}
          >
            乳清蛋白
          </h6>
          <p>每份蛋白質含量高達....</p>
        </div>
      </div>
      <div className={styles.cardsize}>
        <img
          src="/product-img/大豆.webp"
          alt=""
          className="img-fluid"
          style={{
            marginBottom: '110px',
          }}
        />
        <div className={styles.card}>
          <h6
            style={{
              paddingRight: '100px',
            }}
          >
            乳清蛋白
          </h6>
          <p>每份蛋白質含量高達....</p>
        </div>
      </div>
    </>
  )
}
