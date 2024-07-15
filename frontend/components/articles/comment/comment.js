import React from 'react'
import Btn from '../buttons_test'
import { CommentStrip, SubComment } from './comment-strip'
import styles from './comment.module.css'

export default function Comment() {
  return (
    <>
      <div className={styles.commentContainer}>
        <form name="mainComment" className={styles.mainComment}>
          <div className={styles.userCommentTitle}>
            <div className={styles.userAvatar}>
              <img src="/test_avatar.png" />
            </div>
            <div className={styles.userCommentInfo}>
              <div className={styles.userName}>林美玲</div>
            </div>
          </div>
          <div className={styles.userComment}>
            <textarea defaultValue="輸入文字來留下你的看法..."></textarea>
          </div>
          <div className={styles.userCommentBtn}>
            <div className={styles.wordCount}>剩餘字數(50/50)</div>
            <div className={styles.submitBtn}>
              <Btn
                size="sm"
                bgColor="midnightgreen"
                maxWidth="94px"
                width="100%"
              >
                送出
              </Btn>
            </div>
          </div>
        </form>
        <div className={styles.commentArea}>
          <div className={styles.togglePrevComment}>
            <button>...查看先前5則留言</button>
          </div>
          <CommentStrip />
          <div className={styles.replyComment}>
            <CommentStrip />
          </div>
          <CommentStrip />
          <CommentStrip />
        </div>
      </div>
    </>
  )
}
