import { useState } from 'react'
import CommentStrip from './comment-strip'
import CommentInput from './comment-input'
import styles from './reply.module.css'

export default function Reply({ group = 0, totalGroup = 0, show = 'reply' }) {
  if (show === 'reply') {
    return (
      <>
        <div className={styles.replyComment}>
          <CommentStrip reply={true} />
          <CommentInput showInput={false} />
          <div
            className={styles.togglePrevComment}
            style={{
              display: `${group < totalGroup ? 'flex' : 'none'}`,
            }}
          >
            <button>...查看其他3則回覆</button>
          </div>
        </div>
      </>
    )
  } else if (show === 'replyInput') {
    return (
      <>
        <div className={styles.replyComment}>
          <CommentInput />
        </div>
      </>
    )
  } else {
    return null
  }
}
