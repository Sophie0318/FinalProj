import React from 'react'
import {
  IoHeart,
  IoSearch,
  IoChatbubbleEllipses,
  IoShareSocialSharp,
} from 'react-icons/io5'
import styles from './article-sidebar.module.css'

export default function ArticleSidebar() {
  return (
    <>
      <div className={styles.sidebar}>
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
    </>
  )
}
