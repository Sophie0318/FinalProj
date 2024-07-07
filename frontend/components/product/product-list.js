import React from 'react'
import { FaSearch } from 'react-icons/fa'
import styles from '@/components/product/product-list.module.css'
import Image from 'next/image'
import { useState } from 'react'

export default function ProductList({
  nameLike,
  setNameLike,
  updateProductData,
}) {
  function searchKeyword() {
    /* console.log(
      `User input: ${nameLike}, and send searching keyword to backend api.`
    )
    const queryParams = new URLSearchParams({
      category: query,
      page: page,
      keyword: nameLike,
    })
    const url = `http://localhost:3001/product/api?${queryParams.toString()}`

    fetch(url)
      .then((r) => r.json())
      .then((myData) => {
        console.log(`search result: ${myData}`)
        setData(myData)
      }) */
    updateProductData()
  }

  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              健身護具
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div>
                <label>
                  <input type="checkbox" />
                  護腰
                </label>
                <br />
                <label>
                  <input type="checkbox" />
                  護膝
                </label>
                <br />
                <label>
                  <input type="checkbox" />
                  護腿
                </label>
                <br />
                <label>
                  <input type="checkbox" />
                  護踝
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrap">
        <div className={styles.search}>
          <input
            className={styles.searchBar}
            type="text"
            name="searchInput"
            id="search"
            placeholder="搜尋商品"
            value={nameLike}
            onChange={(e) => {
              setNameLike(e.target.value)
            }}
          />
          <button className={styles.searchBtn}>
            <FaSearch
              className={styles.iconLarge}
              onClick={() => {
                searchKeyword()
              }}
            />
          </button>
        </div>
      </div>
    </>
  )
}
