import React from 'react'
// import Image from 'next/image'
// import styles from '@/styles/product-detail.module.css'
import Layout3 from '@/components/layout/layout3'
import PhotoText from '@/components/product/product-detail/photo-text'
import ProductCarousel from '@/components/product/carousel/product-carousel'
import ProductImage from '@/components/product/product-detail/product-image'
import DetailText from '@/components/product/product-detail/detail-text'
import CardDetail from '@/components/product/card-detail/card-detail'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function ProductDetail() {
  const router = useRouter()

  const [product, setProduct] = useState({
    Product_id: 0,
    Product_name: '',
    Product_price: 0,
    Product_desc: '',
    Product_image: '',
  })

  const getProduct = async (pid) => {
    const url = `http://localhost:3001/product/api/${pid}`

    try {
      const res = await fetch(url)
      // product資料在data.data.product
      const resData = await res.json()
      // const resData = await res.json()(resData, 'resData')
      if (resData.success === true) {
        // 檢查是否為物件資料類型(基本保護)
        if (resData.data.length > 0) {
          // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render)
          console.log(resData.data[0])
          setProduct(resData.data[0])
        }
      }
    } catch (e) {
      console.error(e)
    }
  }
  // /product/1
  //   console.log(router.pathname.split('/')[2])

  useEffect(() => {
    // console.count('[useEffect] getProduct')
    if (router.isReady) {
      const pid = router.query.pid
      // 呼叫getProduct
      getProduct(pid)
    }
  }, [router.isReady])

  return (
    <Layout3>
      {/* 卡片輪播 */}
      <div className="container mt-4 ">
        <div className="row">
          <div className="col-12 col-md-6">
            <ProductCarousel />
            <ProductImage />
          </div>
          <div>
            <DetailText
              price={product.Product_price}
              desc={product.Product_desc}
            />
          </div>
          {/* {product?.map((v) => {
            ;<div key={v.Product_id}>
              <DetailText price={v.Product_price} desc={v.Product_desc} />
            </div>
          })} */}
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
