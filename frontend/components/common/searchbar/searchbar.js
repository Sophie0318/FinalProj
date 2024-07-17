import React from 'react'
import { IoSearch } from 'react-icons/io5'
import styles from './searchbar.module.css'
//TODO 讓搜尋元件可以傳入 placeholder, height(size), MaxWindth, backgroundColor
export default function SearchBar({
  placeholder = '請輸入地址搜尋...',
  maxWidth = '600px',
  size = '60px',
  setSearchTerm,
  searchTerm = '',
  setFilteredGyms = () => {},
  gymsData = [],

  // 增加props mainColor or 設定Theme
}) {
  return (
    <div className={styles.search} style={{ maxWidth }}>
      <div
        className={styles.searchIcon}
        style={{
          width: size,
          height: size,
        }}
      >
        <IoSearch />
      </div>
      <input
        type="text"
        name="search_input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        // onKeyDown={(e) => {
        //   if (e.key === 'Enter') {
        //     const filtered = gymsData.filter((gym) =>
        //       gym.gym_name.includes(searchTerm)
        //     )
        //     setFilteredGyms(filtered)
        //     console.log(filtered)
        //   }
        // }}
        className={styles.search_input}
        style={{
          height: size,
          paddingLeft: `calc(${size} + 9px)`,
        }}
        placeholder={placeholder}
      />
    </div>
  )
}
