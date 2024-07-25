import { useState, useEffect } from 'react'
import useGetComment from '@/hooks/article-comment/useGetComment'
import useToggleDisplay from '@/hooks/article-comment/useToggleDisplay'
import CommentStrip from './comment-strip'
import CommentInput from './comment-input'
import styles from './reply.module.css'

export default function Reply({ main = 1, article_id = 0, show }) {
  const { getSub } = useGetComment()
  const [info, setInfo] = useState({ success: false, totalGroup: 1 })
  const [sub, setSub] = useState([])
  const [group, setGroup] = useState(1)
  const [remain, setRemain] = useState(0)

  const actionOnToggle = () => {
    const nextGroup = group + 1
    setGroup(nextGroup)
    getSub(article_id, nextGroup, main, remain).then((res) => {
      setSub([...sub, ...res.data])
      setInfo(res.info)
      setRemain(res.nextRemain)
    })
  }

  const toggleReplyArea = useToggleDisplay(
    group,
    setGroup,
    sub,
    setSub,
    setRemain,
    info.totalGroup,
    info.totalRows,
    info.perGroup,
    actionOnToggle
  )

  useEffect(() => {
    if (show[main] && show[main] === 'reply') {
      getSub(article_id, group, main).then((res) => {
        setSub(res.data)
        setInfo(res.info)
        setRemain(res.nextRemain)
      })
    }
  }, [show])

  if (show[main] && show[main] === 'reply') {
    return (
      <>
        <div className={styles.replyComment} id={`reply${main}`}>
          <div className={styles.replyCommentArea}>
            {sub.map((v, i) => {
              return (
                <div key={i} className={styles.replyCommentBox}>
                  <CommentStrip data={v} reply={true} />
                  <CommentInput showInput={false} />
                </div>
              )
            })}
          </div>
          <div className={styles.togglePrevComment}>
            <button onClick={toggleReplyArea}>
              {/* <span>查看{remain}則回覆</span> */}
              <span
                style={{
                  display: `${group < info.totalGroup ? 'flex' : 'none'}`,
                }}
              >
                ...查看其他{remain > info.perGroup ? info.perGroup : remain}
                則留言
              </span>
              <span
                style={{
                  display: `${group < info.totalGroup ? 'none' : 'flex'}`,
                }}
              >
                隱藏所有留言
              </span>
            </button>
          </div>
        </div>
      </>
    )
  } else if (show[main] && show[main] === 'replyInput') {
    return (
      <>
        <div className={styles.replyComment} id={`replyInput${main}`}>
          <CommentInput main={main} sub={0} />
        </div>
      </>
    )
  } else {
    return null
  }
}
