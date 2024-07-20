import { useState } from 'react'
import {
  IoHeart,
  IoSearch,
  IoChatbubbleEllipses,
  IoShareSocialSharp,
} from 'react-icons/io5'
import SearchBar from '@/components/common/searchbar/searchbar'
import SidebarSearch from './sidebar-search'
import styles from './article-sidebar.module.css'

export default function ArticleSidebar({
  showSidebar = true,
  pageLoaded = false,
  fontSize = 0,
  setFontSize = () => {},
  commentRef,
}) {
  const [showSearchbar, setShowSearchbar] = useState(false)
  const handleShowSearch = (e) => {
    console.log(e)
    if (e.type === 'click') {
      setShowSearchbar(!showSearchbar)
    }
  }

  const handleFontSize = () => {
    if (fontSize === 2) {
      setFontSize(0)
      return
    }
    setFontSize(fontSize + 1)
  }

  const linkToClipBoard = async () => {
    const url = location.href
    window.navigator.clipboard.writeText(url)
  }

  const handleScroll = () => {
    if (commentRef.current) {
      commentRef.current.scrollIntoView({
        behaviour: 'smooth',
        block: 'start',
      })
    }
  }

  if (pageLoaded === false) return null
  return (
    <>
      <div className={styles.sidebarPC}>
        <button
          className={styles.sidebarBtn}
          onClick={() => {
            handleFontSize()
          }}
        >
          <img
            className={styles.fontSizeImg}
            src="/articles-img/font-size.svg"
          />
        </button>
        <button className={styles.sidebarBtn}>
          <IoHeart />
        </button>
        <button
          className={styles.sidebarBtn}
          onClick={() => {
            handleScroll()
          }}
        >
          <IoChatbubbleEllipses />
        </button>
        <button
          className={styles.sidebarBtn}
          onClick={() => {
            linkToClipBoard()
          }}
        >
          <IoShareSocialSharp />
        </button>
        <div
          className={`${styles.sidebarSearch} ${
            showSearchbar ? styles.showSearch : styles.hideSearch
          }`}
          onClick={handleShowSearch}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          <SidebarSearch
            handleKeyDown={() => {
              console.log('searchbar entered')
            }}
            paddingLeft={showSearchbar ? '9px' : '-9px'}
            onClick={(e) => {
              e.stopPropagation()
            }}
          />
        </div>
      </div>

      <div
        className={`
        ${styles.sidebarSP}
        ${showSidebar ? styles.slideUp : styles.slideDown}
        `}
      >
        <div className={styles.sidebarWrapper}>
          <button
            className={styles.sidebarBtn}
            onClick={() => {
              handleFontSize()
            }}
          >
            <img src="/articles-img/font-size-dark.svg" />
          </button>
          <button className={styles.sidebarBtn}>
            <IoHeart />
          </button>
          <button
            className={styles.sidebarBtn}
            onClick={() => {
              handleScroll()
            }}
          >
            <IoChatbubbleEllipses />
          </button>
          <button
            className={styles.sidebarBtn}
            onClick={() => {
              linkToClipBoard()
            }}
          >
            <IoShareSocialSharp />
          </button>
          <button className={styles.sidebarBtn}>
            <IoSearch />
          </button>
        </div>
      </div>
    </>
  )
}
