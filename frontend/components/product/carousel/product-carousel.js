import React from 'react'
import styles from './product-carousel.module.css' // 假設我們創建了一個CSS模塊文件

export default function ProductCarousel() {
  return (
    <div className={styles.carouselContainer}>
      <div
        id="carouselExampleControls"
        className={`carousel slide ${styles.carousel}`}
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/product-img/cloth.jpg"
              className={styles.carouselImage}
              alt="Product"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/product-img/cloth.jpg"
              className={styles.carouselImage}
              alt="Product"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/product-img/cloth.jpg"
              className={styles.carouselImage}
              alt="Product"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
