import React, { useCallback, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import styles from './searchbar.module.css'

export default function SearchBar({
  placeholder = '請輸入地址搜尋...',
  maxWidth = '600px',
  size = '60px',
  setSearchTerm,
  searchTerm = '',
  onCompositionChange = () => {},
  // 增加props mainColor or 設定Theme
}) {
  
  const handleCompositionStart = () => {
    onCompositionChange(true);
  };

  const handleCompositionEnd = () => {
    onCompositionChange(false);
  };
  

  
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
        onCompositionStart={handleCompositionStart}
        onCompositionEnd={handleCompositionEnd}
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
