import React from 'react'
import Image from 'next/image'
import styles from '@/styles/product.module.css'
import Layout2 from '@/components/layout/layout2'
import { BtnLg } from '@/components/common/buttons'

export default function ProductTest() {
  return (
    <Layout2 pageName="products">
      <main>
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

        <section className={`${styles.joinMember}`}>
          <div className="container-fluid p-0">
            <div className="row flex-column align-items-center text-center">
              <div className={`${styles.joinMemberCard} col-md-7 bg-secondary`}>
                <h3>加入會員 ?</h3>
                <p>看完我們的網站心動了嗎？立馬點擊下面按鈕加入會員！</p>
                <BtnLg>去健身</BtnLg>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout2>
  )
}
// 卡片壞掉
