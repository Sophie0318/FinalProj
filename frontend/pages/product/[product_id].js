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

  const [data, setData] = useState({
    Product_id: 0,
    Product_name: '',
    Product_price: 0,
    Product_desc: '',
    Product_image: '',
  })

  const getProduct = async (product_id) => {
    const url = 'http://localhost:3001/product/api?product=' + product_id
    try {
      const res = await fetch(url)
      // product資料在data.data.product
      const resData = await res.json()

      if (resData.status === 'success') {
        // 檢查是否為物件資料類型(基本保護)
        if (resData.data.product.id) {
          // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render)
          setData(resData.data.product)

          // 關閉載入動畫，撥放1.5秒
          setTimeout(() => {
            setData(false)
          }, 1500)
        }
      }
    } catch (e) {
      console.error(e)
    }
  }
  // /product/1
  //   console.log(router.pathname.split('/')[2])

  useEffect(() => {
    if (router.isReady) {
      // 這裡可以得到router.query(pid屬性)值
      // 動態路由得到的pid屬性值都是字串值(比對時要小心)
      console.log(router.query)
      // 解構出pid屬性值
      const { product_id } = router.query
      // 呼叫getProduct
      getProduct(product_id)
    }
    // 註解: 讓eslint略過一行檢查
    // eslint-disable-next-line
  }, [router.isReady, data])
  console.log(data)

  return (
    <Layout3>
      {/* 卡片輪播 */}
      <div className="container mt-4 ">
        <div className="row">
          <div className="col-12 col-md-6">
            <ProductCarousel />
            <ProductImage />
          </div>
          {data && data.rows && router.query.product_id ? (
            data.rows.map((v, i) => (
              <div key={v.Product_id}>
                <DetailText price={v.Product_price} desc={v.Product_desc} />
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
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
