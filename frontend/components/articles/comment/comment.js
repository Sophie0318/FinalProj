import { useState, useEffect } from 'react'
import { API_SERVER } from '@/configs/api-path'
import Btn from '../buttons_test'
import CommentInput from './comment-input'
import { CommentStrip, SubComment } from './comment-strip'
import styles from './comment.module.css'

export default function Comment() {
  return (
    <>
      <div className={styles.commentContainer}>
        <div className={styles.mainComment}>
          <CommentInput />
        </div>
        <div className={styles.commentAreaBox}>
          <div className={styles.commentArea}>
            <CommentStrip showInput={true} />
            <div className={styles.replyComment}>
              <CommentStrip reply={true} showInput={true} />
              <CommentInput />
              <CommentStrip reply={true} />
              <CommentStrip reply={true} />
            </div>
            <CommentStrip />
            <CommentStrip />
            <CommentStrip />
          </div>
          <div className={styles.togglePrevComment}>
            <button>...查看先前3則留言</button>
          </div>
        </div>
      </div>
    </>
  )
}
