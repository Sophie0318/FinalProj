import React, { useEffect, useState } from 'react'
import MyProductList from '@/components/product/product-list'
import styles from '@/styles/product-list.module.css'
import Index from '@/components/joinMember'
import Layout3 from '@/components/layout/layout3'
import Pagination from '@/components/product/Pagination/Pagination'
import CardList from '@/components/product/card-list/card-list'
import SideBar from '@/components/product/side-bar/side-bar'
import { useRouter } from 'next/router'

export default function ProductList() {
  const router = useRouter()
  const [data, setData] = useState({
    //呈現資料內容要用狀態
    success: false,
    rows: [],
  })
  //用useEffect去抓(fetch)後端的資料
  useEffect(() => {
    const pathname = router.pathname
    const pathParts = pathname.split('/')
    const query = pathParts[pathParts.length - 1].split('?')[0]

    const existingParams = new URLSearchParams(router.query)
    const page = existingParams.get('page') || '1'
    const queryParams = new URLSearchParams({
      category: query,
      page: page,
    })

    // const query = new URLSearchParams({ id: productId })
    console.log(router)
    fetch(`http://localhost:3001/product/api?${queryParams.toString()}`)
      .then((r) => r.json())
      .then((myData) => {
        console.log(data)
        setData(myData)
      })
  }, [router])
  return (
    <Layout3 pageName="products">
      <main className={styles.mainWithMargin}>
        <div className={styles.container}>
          <div className="row">
            <div className="col-12 col-md-3 ">
              <SideBar />
              <MyProductList />
            </div>
            <div className="col-12 col-md-8">
              <div className="row d-flex justify-content-center">
                {data.rows.map((v, i) => {
                  return (
                    <div
                      key={v.Product_id}
                      className="col-12 col-md-8 col-lg-4 mb-3 "
                    >
                      <CardList
                        id={v.Product_id}
                        name={v.Product_name}
                        price={v.Product_price}
                      />
                    </div>
                  )
                })}
              </div>
            </div>

            <Pagination />
          </div>
        </div>
        <Index />
      </main>
    </Layout3>
  )
}