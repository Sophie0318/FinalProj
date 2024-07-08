import React from 'react'
import styles from './product-index.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function IndexPhoto() {
  return (
    <>
      <div
        className="container-fluid"
        style={{ paddingLeft: '0px', paddingRight: '0px' }}
      >
        <div className="row">
          <div className="col-12 col-md-6 position-relative p-0">
            <Link
              href="/product/productTraningList"
              className="text-decoration-none"
            >
              <img src="/product-img/居家訓練.jpg" alt="" className="w-100" />
              <div className={styles.picturetitle}>
                <p className="fs-2"> 居家訓練</p>
              </div>
            </Link>
          </div>
          <div className="col-12 col-md-6 position-relative p-0">
            <Link
              href="/product/productTraningList"
              className="text-decoration-none"
            >
              <img src="/product-img/居家訓練2.jpg" alt="" className="w-100" />
              <div className={styles.picturetitle}>
                <p className="fs-2">居家訓練</p>
              </div>
            </Link>
          </div>
          <div className="col-12 col-md-6 position-relative p-0">
            <Link
              href="/product/productFoodList"
              className="text-decoration-none"
            >
              <img src="/product-img/健康食品.jpg" alt="" className="w-100" />
              <div className={styles.picturetitle}>
                <p className="fs-2">健康食品</p>
              </div>
            </Link>
          </div>
          <div className="col-12 col-md-6 position-relative p-0">
            <Link
              href="/product/productFoodList"
              className="text-decoration-none"
            >
              <img src="/product-img/健康食品2.jpg" alt="" className="w-100" />
              <div className={styles.picturetitle}>
                <p className="fs-2">健康食品</p>
              </div>
            </Link>
          </div>
          <div className="col-12 col-md-6 position-relative p-0">
            <Link
              href="/product/productClothList"
              className="text-decoration-none"
            >
              <img src="/product-img/健身服飾.jpg" alt="" className="w-100" />
              <div className={styles.picturetitle}>
                <p className="fs-2">健身服飾</p>
              </div>
            </Link>
          </div>
          <div className="col-12 col-md-6 position-relative p-0">
            <Link
              href="/product/productProtectList"
              className="text-decoration-none"
            >
              <img src="/product-img/健身護具2.jpg" alt="" className="w-100" />
              <div className={styles.picturetitle}>
                <p className="fs-2">健身護具</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
