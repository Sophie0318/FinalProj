import { useState } from 'react'
import { useRouter } from 'next/router'
import SearchBar from '@/components/common/searchbar/searchbar'
import useArticleSearch from '@/hooks/article-search/useArticleSearch'
import styles from './search-section.module.css'

export default function SearchSection() {
  const { keyword, setKeyword, handleKeyDown } = useArticleSearch()

  return (
    <>
      <div className={`${styles.search}`}>
        <div className="container fixed-960 px-3">
          <div className="row flex-column justify-content-center align-items-center px-0 mx-0 g-0">
            <h4>找其他文章</h4>
            <SearchBar
              searchTerm={keyword}
              setSearchTerm={setKeyword}
              placeholder="輸入關鍵字搜尋文章..."
              handleKeyDown={handleKeyDown}
              maxWidth="960px"
              handleSearch={() => {}}
            />
          </div>
        </div>
      </div>
    </>
  )
}
