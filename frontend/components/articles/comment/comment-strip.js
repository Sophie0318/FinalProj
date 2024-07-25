import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { API_SERVER } from '@/configs/api-path'
import { IoChatbubble } from 'react-icons/io5'
import { IoEllipsisHorizontal } from 'react-icons/io5'
import styles from './comment-strip.module.css'

export default function CommentStrip({
  data = {
    article_id_fk: 0,
    member_id_fk: 0,
    nick_name: '',
    avatar: 'default_avatar.jpg',
    comment_id: 0,
    create_at: '',
    update_at: '',
    comment_content: '',
    sub_count: 0,
  },
  reply = false,
  replySect = '',
  setReplySect = () => {},
}) {
  const [hiddenSubs, setHiddenSubs] = useState(0)

  const toggleReplySect = (e) => {
    // const newState =
    //   e.currentTarget.id === replySect ? 'none' : e.currentTarget.id
    // setReplySect(newState)

    // if (newState === 'reply') {
    //   if (hiddenSubs < 3) {
    //     setHiddenSubs(0)
    //   } else {
    //     const nextHiddenSubs = hiddenSubs - 3
    //     setHiddenSubs(nextHiddenSubs)
    //   }
    // } else if (newState === 'none' && e.currentTarget.id === 'reply') {
    //   setHiddenSubs(data.sub_count)
    // }

    if (e.currentTarget.id === 'reply') {
      setReplySect('reply')
      // set hidden sub count to display
      if (hiddenSubs < 3) {
        setHiddenSubs(0)
      } else {
        const nextHiddenSubs = hiddenSubs - 3
        setHiddenSubs(nextHiddenSubs)
      }
    } else if (e.currentTarget.id === 'replyInput') {
      setReplySect('replyInput')
    }
    if (e.currentTarget.id === replySect) {
      // if click the same toggle again, hide it
      setReplySect('none')
      if (e.currentTarget.id === 'reply') {
        // if hide replies, update hiddenSubs to set replyBtn
        setHiddenSubs(data.sub_count)
      }
    }
  }

  useEffect(() => {
    setHiddenSubs(data.sub_count)
  }, [data])
  return (
    <>
      <div
        id={data.comment_id}
        className={`${styles.commentStrip} ${reply ? styles.reply : ''}`}
      >
        <div className={styles.userCommentTitle}>
          <div className={styles.userInfo}>
            <div className={styles.userAvatar}>
              <img src={`${API_SERVER}/users/${data.avatar}`} />
            </div>
            <div className={styles.userCommentInfo}>
              <div className={styles.userName}>{data.nick_name}</div>
              <div className={styles.userCommentTime}>{data.update_at}</div>
            </div>
          </div>
          <div className={styles.reportBtnRow}>
            <button className={styles.reportBtn}>
              <IoEllipsisHorizontal className={styles.reportBtnIcon} />
            </button>
          </div>
        </div>
        <div className={styles.commentContent}>{data.comment_content}</div>
        <div className={styles.commentBtn}>
          <div className={styles.replyBtn}>
            <button id="replyInput" onClick={toggleReplySect}>
              <IoChatbubble className={styles.replyBtnIcon} />
              <span>回覆</span>
            </button>
          </div>
          <div
            className={styles.replyBtn}
            style={{ display: `${data.sub_count ? 'flex' : 'none'}` }}
          >
            <button id="reply" onClick={toggleReplySect}>
              {hiddenSubs < data.sub_count ? (
                <span>隱藏回覆</span>
              ) : (
                <span>查看{hiddenSubs}則回覆</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
