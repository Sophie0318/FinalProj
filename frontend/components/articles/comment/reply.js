import { useState, useEffect } from 'react'
import useGetComment from '@/hooks/article-comment/useGetComment'
import CommentStrip from './comment-strip'
import CommentInput from './comment-input'
import styles from './reply.module.css'

export default function Reply({
  main = 1,
  article_id = 0,
  show,
  // info = { success: false },
  // group = 1,
  // totalGroup = 1,
}) {
  const { getSub } = useGetComment()
  const [info, setInfo] = useState({ success: false, totalGroup: 1 })
  const [sub, setSub] = useState([])
  const [visibleSub, setVisibleSub] = useState([])
  const [group, setGroup] = useState(1)
  const [remain, setRemain] = useState(0)

  useEffect(() => {
    if (show === 'reply') {
      getSub(article_id, group, main).then((res) => {
        // const { data, info, nextRemain } = res
        setSub(res.data)
        setVisibleSub(res.data)
        setInfo(res.info)
        setRemain(res.nextRemain)
      })
    }
  }, [show])

  if (show === 'reply') {
    return (
      <>
        <div className={styles.replyComment}>
          <CommentStrip reply={true} />
          <CommentInput showInput={false} />
          <div
            className={styles.togglePrevComment}
            style={{
              display: `${group < info.totalGroup ? 'flex' : 'none'}`,
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
