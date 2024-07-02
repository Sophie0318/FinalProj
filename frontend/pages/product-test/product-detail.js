import React from 'react'
// import Image from 'next/image'
// import styles from '@/styles/product-detail.module.css'
import Layout3 from '@/components/layout/layout3'
import PhotoText from '@/components/product/product-detail/photo-text'
import ProductCarousel from '@/components/product/carousel/product-carousel'
import ProductImage from '@/components/product/product-detail/product-image'
import DetailText from '@/components/product/product-detail/detail-text'
import CardDetail from '@/components/product/card-detail/card-detail'

export default function ProductDetail() {
  return (
    <Layout3>
      {/* 卡片輪播 */}
      <div className="container mt-4 ">
        <div className="row">
          <div className="col-12 col-md-6">
            <ProductCarousel />
            <ProductImage />
          </div>
          <DetailText />
        </div>
        <PhotoText />
        <div className="row  text-center align-items-center d-flex">
          <div className="col-12 col-md-12">
            <h2
              style={{
                marginTop: '50px',
                marginBottom: '50px',
              }}
            >
              你可能喜歡
            </h2>
          </div>
          <div className="col-12 col-md-12 d-flex flex-wrap justify-content-center">
            <CardDetail />
          </div>
        </div>
      </div>
    </Layout3>
  )
}
