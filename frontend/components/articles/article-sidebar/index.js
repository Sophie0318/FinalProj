import React from 'react'
import {
  IoHeart,
  IoSearch,
  IoChatbubbleEllipses,
  IoShareSocialSharp,
} from 'react-icons/io5'
import SearchBar from '@/components/common/searchbar/searchbar'
import styles from './article-sidebar.module.css'

export default function ArticleSidebar({
  showSidebar = true,
  pageLoaded = false,
  fontSize = 0,
  setFontSize = () => {},
  commentRef,
}) {
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
        <SearchBar maxWidth="60px" paddingLeft="-3px" />
        {/* <button className={styles.sidebarBtn}>
          <IoSearch />
        </button> */}
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
