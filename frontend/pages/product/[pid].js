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

export default function ProductDetail() {
  const router = useRouter()

  const [product, setProduct] = useState({
    Product_id: 0,
    Product_name: '',
    Product_price: 0,
    Product_desc: '',
    Product_image: '',
    Product_qty: 1,
  })
  // const [item, setItem] = useState([]) // 購物車陣列)
  // const addItem = (product) => {
  //   const newItem = { ...product, qty: 1 }
  //   const nextItem = [newItem, ...item]
  //   setItem(nextItem)
  //   localStorage.setItem('shoppingCart', JSON.stringify(nextItem))
  //   console.log('button clicked', item)
  // }
  const [item, setItem] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedItems = localStorage.getItem('shoppingCart')
      return savedItems ? JSON.parse(savedItems) : []
    }
    return []
  }) // 購物車陣列  如果在客戶端環境中（即瀏覽器中），就從 localStorage 中讀取名為 'shoppingCart' 的資料。如果資料存在，則將其解析為 JSON 格式，作為初始的 item 狀態；如果資料不存在或者無法解析，則初始為空陣列 []

  const addItem = (product) => {
    const existingItem = item.find(
      (cartItem) => cartItem.Product_id === product.Product_id
    )

    let nextItem

    if (existingItem) {
      nextItem = item.map((cartItem) =>
        cartItem.Product_id === product.Product_id
          ? { ...cartItem, qty: cartItem.qty + 1 }
          : cartItem
      )
    } else {
      const newItem = { ...product, qty: 1 }
      nextItem = [newItem, ...item]
    }

    setItem(nextItem)
    localStorage.setItem('shoppingCart', JSON.stringify(nextItem))
    console.log('button clicked', nextItem)
  }
  //遞增
  const increaseItem = (id) => {
    const nextItem = item.map((v) => {
      if (v.Product_id === id) return { ...v, qty: v.qty + 1 }
      else return v
    })
    setItem(nextItem)
    localStorage.setItem('shoppingCart', JSON.stringify(nextItem))
  }

  //遞減
  const decreaseItem = (id) => {
    const nextItem = item.map((v) => {
      if (v.Product_id === id && v.qty > 1) return { ...v, qty: v.qty - 1 }
      else return v
    })
    setItem(nextItem)
    localStorage.setItem('shoppingCart', JSON.stringify(nextItem))
  }
  //移除
  const removeItem = (id) => {
    const nextItem = item.filter((v) => {
      return v.Product_id !== id
    })
    setItem(nextItem)
    localStorage.setItem('shoppingCart', JSON.stringify(nextItem))
  }
  //計算總金額

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
          console.log(product)
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

  return (
    <Layout3
      product={product}
      item={item}
      increaseItem={increaseItem}
      decreaseItem={decreaseItem}
      removeItem={removeItem}
      // calcTotalPrice={calcTotalPrice}
    >
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
              name={product.Product_name}
            />

            <button className={styles.btnCart} onClick={() => addItem(product)}>
              加入購物車
            </button>
          </div>
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
