import React from 'react'
import styles from './product-index.module.css'
import Image from 'next/image'

export default function IndexPhoto() {
  return (
    <>
      <div
        className="container-fluid"
        style={{ paddingLeft: '0px', paddingRight: '0px' }}
      >
        <div className="row">
          <div className="col-12 col-md-6 position-relative p-0">
            <a href="" className="text-decoration-none">
              <img
                src="/product-img/kelly-sikkema-IZOAOjvwhaM-unsplash.jpg"
                alt=""
                className="w-100"
              />
              <div className={styles.picturetitle}>
                <p className="fs-2">居家訓練</p>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-6 position-relative p-0">
            <a href="" className="text-decoration-none">
              <img src="/product-img/photo2.jpg" alt="" className="w-100" />
              <div className={styles.picturetitle}>
                <p className="fs-2">居家訓練</p>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-6 position-relative p-0">
            <a href="" className="text-decoration-none">
              <img src="/product-img/photo5.jpg" alt="" className="w-100" />
              <div className={styles.picturetitle}>
                <p className="fs-2">健康食品</p>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-6 position-relative p-0">
            <a href="" className="text-decoration-none">
              <img
                src="/product-img/towfiqu-barbhuiya-Y-VDI9vQS3M-unsplash.jpg"
                alt=""
                className="w-100"
              />
              <div className={styles.picturetitle}>
                <p className="fs-2">健康食品</p>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-6 position-relative p-0">
            <a href="" className="text-decoration-none">
              <img src="/product-img/cloth.jpg" alt="" className="w-100" />
              <div className={styles.picturetitle}>
                <p className="fs-2">健身護具</p>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-6 position-relative p-0">
            <a href="" className="text-decoration-none">
              <img
                src="/product-img/victor-freitas-hOuJYX2K5DA-unsplash.jpg"
                alt=""
                className="w-100"
              />
              <div className={styles.picturetitle}>
                <p className="fs-2">健身護具</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
