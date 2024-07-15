import React from 'react'
import { IoEllipsisHorizontal } from 'react-icons/io5'
import { TbThumbUpFilled } from 'react-icons/tb'
import styles from './comment-strip.module.css'

export function CommentStrip() {
  return (
    <>
      <div className={styles.commentStrip}>
        <div className={styles.userCommentTitle}>
          <div className={styles.userInfo}>
            <div className={styles.userAvatar}>
              <img src="/test_avatar.png" />
            </div>
            <div className={styles.userCommentInfo}>
              <div className={styles.userName}>林美玲</div>
              <div className={styles.userCommentTime}>幾分鐘前</div>
            </div>
          </div>
          <div className={styles.reportBtnRow}>
            <button className={styles.reportBtn}>
              <IoEllipsisHorizontal className={styles.reportBtnIcon} />
            </button>
          </div>
        </div>
        <div className={styles.commentContent}>
          對健身文章評論進行深入研究，在現今時代已經無法避免了。健身文章評論對我來說，已經成為了我生活的一部分。
        </div>
        <div className={styles.commentBtn}>
          <div className={styles.likeBtn}>
            <button>
              <TbThumbUpFilled className={styles.likeBtnIcon} />
              <span>105</span>
            </button>
          </div>
          <div className={styles.replyBtn}>
            <button>回覆(3)</button>
          </div>
        </div>
      </div>
    </>
  )
}

export function SubComment() {
  return (
    <>
      <div className={styles.subComment}>
        <div className={styles.subCommentStrips}>
          <div className={styles.commentStrip}>
            <div className={styles.userCommentTitle}>
              <div className={styles.userInfo}>
                <div className={styles.userAvatar}>
                  <img src="/test_avatar.png" />
                </div>
                <div className={styles.userCommentInfo}>
                  <div className={styles.userName}>林美玲</div>
                  <div className={styles.userCommentTime}>幾分鐘前</div>
                </div>
              </div>
              <div className={styles.reportBtn}>
                <button>
                  <IoEllipsisHorizontal />
                </button>
              </div>
            </div>
            <div className={styles.commentContent}>
              對健身文章評論進行深入研究，在現今時代已經無法避免了。健身文章評論對我來說，已經成為了我生活的一部分。
            </div>
            <div className={styles.commentBtn}>
              <div className={styles.likeBtn}>
                <button>
                  <TbThumbUpFilled />
                  <span>105</span>
                </button>
              </div>
              <div className={styles.replyBtn}>
                <button>回覆</button>
              </div>
            </div>
          </div>
          <div className={styles.commentStrip}>
            <div className={styles.userCommentTitle}>
              <div className={styles.userInfo}>
                <div className={styles.userAvatar}>
                  <img src="/test_avatar.png" />
                </div>
                <div className={styles.userCommentInfo}>
                  <div className={styles.userName}>林美玲</div>
                  <div className={styles.userCommentTime}>幾分鐘前</div>
                </div>
              </div>
              <div className={styles.reportBtn}>
                <button>
                  <IoEllipsisHorizontal />
                </button>
              </div>
            </div>
            <div className={styles.commentContent}>
              對健身文章評論進行深入研究，在現今時代已經無法避免了。健身文章評論對我來說，已經成為了我生活的一部分。
            </div>
            <div className={styles.commentBtn}>
              <div className={styles.likeBtn}>
                <button>
                  <TbThumbUpFilled />
                  <span>105</span>
                </button>
              </div>
              <div className={styles.replyBtn}>
                <button>回覆</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.toggleMore}>
        <div>
          <button>查看其他3則回覆</button>
        </div>
        <div>
          <button>隱藏回覆</button>
        </div>
      </div>
    </>
  )
}
