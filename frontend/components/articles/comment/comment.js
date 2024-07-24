import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import CommentInput from './comment-input'
import CommentStrip from './comment-strip'
import ToggleComment from './toggle-comment'
import Reply from './reply'
import useGetComment from '@/hooks/article-comment/useGetComment'
import styles from './comment.module.css'

export default function Comment() {
  const router = useRouter()
  const [info, setInfo] = useState({ success: false, totalGroup: 0 })
  const [main, setMain] = useState([])
  const [visibleMain, setVisibleMain] = useState([])
  const [group, setGroup] = useState(1)
  const [remain, setRemain] = useState(0)
  const [replySect, setReplySect] = useState('none')
  // fetch main comments hook
  const getMain = useGetComment()

  const handleClick = () => {
    // TODO: try achieve no fetch everytime show prev fetched result
    if (group === info.totalGroup) {
      // if all comments are fetched, click to hide partial comments
      const nextVisibleMain = visibleMain.slice(0, -3)
      setVisibleMain(nextVisibleMain)
      const nextGroup = group - 1
      setGroup(nextGroup)
      const nextRemain = parseInt(info.totalRows) - nextGroup * info.perGroup
      setRemain(nextRemain)
    } else {
      // fetch the next 3(info.perGroup) comments
      const nextGroup = group + 1
      setGroup(nextGroup)
      getMain(router, nextGroup).then((res) => {
        setMain([...main, ...res.data])
        setVisibleMain([...visibleMain, ...res.data])
        setInfo(res.info)
        setRemain(res.nextRemain)
      })
    }
  }

  useEffect(() => {
    if (router.isReady) {
      getMain(router, group)
        .then((res) => {
          setMain(res.data)
          setVisibleMain(res.data)
          setInfo(res.info)
          setRemain(res.nextRemain)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [router.isReady])

  return (
    <>
      <div className={styles.commentContainer}>
        <div className={styles.mainComment}>
          <CommentInput />
        </div>
        <div className={styles.commentAreaBox}>
          <div className={styles.commentArea}>
            {visibleMain.map((v, i) => {
              return (
                <div key={i}>
                  <CommentStrip
                    data={v}
                    replySect={replySect}
                    setReplySect={setReplySect}
                  />
                  <Reply
                    totalGroup={info.totalGroup}
                    group={group}
                    show={replySect}
                  />
                </div>
              )
            })}
          </div>
          <div className={styles.togglePrevComment}>
            <ToggleComment
              onClick={handleClick}
              group={group}
              totalGroup={info.totalGroup}
              remain={remain}
            />
          </div>
        </div>
      </div>
    </>
  )
}
