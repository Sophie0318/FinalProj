import React, { use, useEffect } from 'react'
import styles from './product-carousel.module.css' // 假設我們創建了一個CSS模塊文件

export default function ProductCarousel({ photodata = [] }) {
  //這裡會用  photodata = []，給他預設值，是因為下面要做map，
  return (
    <div className={styles.carouselContainer}>
      <div
        id="carouselExampleControls"
        className={`carousel slide ${styles.carousel}`}
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {photodata.length > 0 ? (
            photodata.map((v, i) => {
              return (
                <div
                  key={i}
                  className={`carousel-item ${i === 0 ? 'active' : ''}`}
                >
                  <img
                    src={`/product-img/${v}`}
                    className={styles.carouselImage}
                    alt={`Product ${i + 1}`}
                  />
                </div>
              )
            })
          ) : (
            <div className="carousel-item active">
              <p>No images available</p>
            </div>
          )}

          {/* <div className="carousel-item">
            <img
              src={`/product-img/${img}`}
              className={styles.carouselImage}
              alt="Product"
            />
          </div>
          <div className="carousel-item">
            <img
              src={`/product-img/${img}`}
              className={styles.carouselImage}
              alt="Product"
            />
          </div> */}
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
      {/* 底下的照片 */}
      <div className="row">
        <div className="col-6 col-md-3 mt-3">
          <img
            src="/product-img/cloth.jpg"
            className="img-fluid"
            alt="Cloth 1"
          />
        </div>
        <div className="col-6 col-md-3 mt-3">
          <img
            src="/product-img/cloth.jpg"
            className="img-fluid"
            alt="Cloth 2"
          />
        </div>
        <div className="col-6 col-md-3 mt-3">
          <img
            src="/product-img/cloth.jpg"
            className="img-fluid"
            alt="Cloth 3"
          />
        </div>
        <div className="col-6 col-md-3 mt-3">
          <img
            src="/product-img/cloth.jpg"
            className="img-fluid"
            alt="Cloth 4"
          />
        </div>
      </div>
    </div>
  )
}
