import React, { useEffect, useState } from 'react'
import MyProductList from '@/components/product/product-list'
import styles from '@/styles/product-list.module.css'
import Index from '@/components/joinMember'
import Layout3 from '@/components/layout/layout3'
import Pagination from '@/components/product/Pagination/Pagination'
import CardList from '@/components/product/card-list/card-list'
import SideBar from '@/components/product/side-bar/side-bar'

export default function ProductList() {
  const [data, setData] = useState({
    //呈現資料內容要用狀態
    success: false,
    rows: [],
  })
  //用useEffect去抓(fetch)後端的資料
  useEffect(() => {
    fetch('http://localhost:3001/products/api')
      .then((r) => r.json())
      .then((myData) => {
        console.log(data)
        setData(myData)
      })
  }, [])

  return (
    <Layout3 pageName="products">
      <main className={styles.mainWithMargin}>
        <div className={styles.container}>
          <div className="row">
            <div className="col-12 col-md-3 ">
              <SideBar />
              <MyProductList />
            </div>
            <CardList products={data.rows} />
            <Pagination />
          </div>
        </div>
        <Index />
      </main>
    </Layout3>
  )
}
