import React from 'react'
import { IoSearch } from 'react-icons/io5'
import styles from './searchbar.module.css'
//TODO 讓搜尋元件可以傳入 placeholder, height, MaxWindth, backgroundColor
export default function SearchBar({ placeholder = "請輸入地址搜尋...", maxWidth = "600px" }) {
  return (
    <div className={styles.search} style={{ maxWidth }}>
      <div className={styles.searchIcon}>
        <IoSearch />
      </div>
      <input
        type="text"
        name="search_input"
        className={styles.search_input}
        placeholder={placeholder}
      />
    </div>
  )
}