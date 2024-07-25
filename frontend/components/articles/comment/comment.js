import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import CommentInput from './comment-input'
import CommentStrip from './comment-strip'
import ToggleComment from './toggle-comment'
import Reply from './reply'
import useGetComment from '@/hooks/article-comment/useGetComment'
import useToggleDisplay from '@/hooks/article-comment/useToggleDisplay'
import styles from './comment.module.css'

export default function Comment() {
  const router = useRouter()
  const [info, setInfo] = useState({ success: false, totalGroup: 0 })
  const [main, setMain] = useState([])
  const [group, setGroup] = useState(1)
  const [remain, setRemain] = useState(0)
  const [replySect, setReplySect] = useState({})

  // fetch main comments hook
  const { getMain } = useGetComment()

  const actionOnToggle = () => {
    const nextGroup = group + 1
    setGroup(nextGroup)
    getMain(router, nextGroup, remain).then((res) => {
      setMain([...main, ...res.data])
      setInfo(res.info)
      setRemain(res.nextRemain)
    })
  }

  const toggleComment = useToggleDisplay(
    group,
    setGroup,
    main,
    setMain,
    setRemain,
    info.totalGroup,
    info.totalRows,
    info.perGroup,
    actionOnToggle
  )

  useEffect(() => {
    if (router.isReady) {
      getMain(router, group)
        .then((res) => {
          setMain(res.data)
          setInfo(res.info)
          setRemain(res.nextRemain)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [router])

  return (
    <>
      <div className={styles.commentContainer}>
        <div className={styles.mainComment}>
          <CommentInput
            main={info.totalRows}
            article_id={router.query.article_id || 0}
          />
        </div>
        <div className={styles.commentArea}>
          {main.map((v, i) => {
            return (
              <div className={styles.commentBox} key={i} id={v.main}>
                <CommentStrip
                  data={v}
                  replySect={replySect}
                  setReplySect={setReplySect}
                />
                <Reply
                  article_id={v.article_id_fk}
                  main={v.main}
                  show={replySect}
                />
              </div>
            )
          })}
          <div
            className={styles.togglePrevComment}
            style={{
              display: `${info.totalGroup === 1 ? 'none' : 'flex'}`,
            }}
          >
            <ToggleComment
              onClick={toggleComment}
              group={group}
              totalGroup={info.totalGroup}
              perGroup={info.perGroup}
              remain={remain}
            />
          </div>
        </div>
      </div>
    </>
  )
}
