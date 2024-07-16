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
import styles from '@/components/product/product-detail/detail-text.module.css'
import toast, { Toaster } from 'react-hot-toast'
import { useCart } from '@/hooks/product/use-cart'
import Link from 'next/link'

export default function ProductDetail() {
  const router = useRouter()
  const {
    shoppingList,
    total,
    product,
    calcTotalQty,
    increaseItem,
    decreaseItem,
    removeItem,
    addItem,
    item,
    setProduct,
  } = useCart()

  const [photodata, setPhotoData] = useState([])

  const getProduct = async (pid) => {
    const url = `http://localhost:3001/product/api/${pid}`

    try {
      const res = await fetch(url)
      const resData = await res.json()
      if (resData.success === true) {
        // 檢查是否為物件資料類型(基本保護)
        if (resData.data.length > 0) {
          // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render)
          console.log(resData.data[0])
          setProduct(resData.data[0])
          setPhotoData(resData.photodata)
          console.log(photodata)
        }
      }
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    // console.count('[useEffect] getProduct')
    if (router.isReady) {
      //檢查路由是否準備好。只有當路由準備好後，才執行接下來的邏輯。
      const pid = router.query.pid //從路由查詢參數中獲取商品 ID (pid)。
      // 呼叫getProduct
      getProduct(pid)
    }
  }, [router.isReady]) //這部分設置了 useEffect 的依賴項。當 router.isReady 的值改變時，useEffect 會被重新調用。
  const notify = (productName) => {
    toast.success(productName + '已成功加入購物車')
  }
  // const productImages = [
  //   product.Product_photo1,
  //   product.Product_photo2,
  //   product.Product_photo3,
  // ]

  return (
    <Layout3
      product={product}
      item={item}
      increaseItem={increaseItem}
      decreaseItem={decreaseItem}
      removeItem={removeItem}
    >
      {/* 卡片輪播 */}
      <div className="container mt-4 ">
        <div className="row">
          <div className="col-12 col-md-6">
            <ProductCarousel photodata={photodata} />
          </div>
          <div className="col-12 col-md-6">
            <DetailText
              price={product.Product_price}
              desc={product.Product_desc}
              name={product.Product_name}
            />

            <button
              className={styles.btnCart}
              onClick={() => {
                addItem(product)
                notify(product.Product_name)
              }}
            >
              加入購物車
            </button>
          </div>
        </div>
        <PhotoText photodata={photodata} desc={product.Product_desc} />
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
      <Toaster />
    </Layout3>
  )
}
