import React from 'react'
import SearchBar from '@/components/common/searchbar/searchbar'
import styles from './search-section.module.css'

export default function SearchSection() {
  return (
    <>
      <div className={`${styles.search}`}>
        <div className="container fixed-960 px-3">
          <div className="row flex-column justify-content-center align-items-center px-0 mx-0 g-0">
            <h4>找其他文章</h4>
            <SearchBar maxWidth="960px" />
          </div>
        </div>
      </div>
    </>
  )
}
