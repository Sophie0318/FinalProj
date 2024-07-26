import { useState, useEffect } from 'react'
import useGetComment from '@/hooks/article-comment/useGetComment'
import useToggleDisplay from '@/hooks/article-comment/useToggleDisplay'
import useToggleInput from '@/hooks/article-comment/useToggleInput'
import CommentStrip from './comment-strip'
import CommentInput from './comment-input'
import ReplyInput from './reply-input'
import ToggleComment from './toggle-comment'
import styles from './reply.module.css'

export default function Reply({ main = 1, article_id = 0, show }) {
  const { getSub } = useGetComment()
  const [info, setInfo] = useState({ success: false, totalGroup: 1 })
  const [sub, setSub] = useState([])
  const [group, setGroup] = useState(1)
  const [remain, setRemain] = useState(0)
  const [replyInput, setReplyInput] = useState({})

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

  const { toggleReplyInput } = useToggleInput(replyInput, setReplyInput)

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
                  <CommentStrip
                    data={v}
                    reply={true}
                    handleToggle={toggleReplyInput}
                  />
                  <ReplyInput
                    showInput={replyInput[v.sub]}
                    main={v.main}
                    sub={v.sub}
                  />
                </div>
              )
            })}
          </div>
          <ToggleComment
            onClick={toggleReplyArea}
            group={group}
            totalGroup={info.totalGroup}
            perGroup={info.perGroup}
            remain={remain}
          />
        </div>
      </>
    )
  } else if (show[main] && show[main] === 'replyInput') {
    return (
      <>
        <div className={styles.replyComment} id={`replyInput${main}`}>
          <CommentInput
            main={main}
            sub={info.totalRows ? info.totalRows : 0}
            showInput={true}
          />
        </div>
      </>
    )
  } else {
    return null
  }
}
