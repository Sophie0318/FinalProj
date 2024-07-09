import React from 'react'
import {
  IoHeart,
  IoSearch,
  IoChatbubbleEllipses,
  IoShareSocialSharp,
} from 'react-icons/io5'
import styles from './article-sidebar.module.css'

export default function ArticleSidebar({
  showSidebar = true,
  pageLoaded = false,
}) {
  if (pageLoaded === false) return null
  return (
    <>
      <div className={styles.sidebarPC}>
        <button className={styles.sidebarBtn}>
          <img src="/articles-img/font-size.svg" />
        </button>
        <button className={styles.sidebarBtn}>
          <IoHeart />
        </button>
        <button className={styles.sidebarBtn}>
          <IoChatbubbleEllipses />
        </button>
        <button className={styles.sidebarBtn}>
          <IoShareSocialSharp />
        </button>
        <button className={styles.sidebarBtn}>
          <IoSearch />
        </button>
      </div>

      <div
        className={`
        ${styles.sidebarSP}
        ${showSidebar ? styles.slideUp : styles.slideDown}
        `}
      >
        <div className={styles.sidebarWrapper}>
          <button className={styles.sidebarBtn}>
            <img src="/articles-img/font-size-dark.svg" />
          </button>
          <button className={styles.sidebarBtn}>
            <IoHeart />
          </button>
          <button className={styles.sidebarBtn}>
            <IoChatbubbleEllipses />
          </button>
          <button className={styles.sidebarBtn}>
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
