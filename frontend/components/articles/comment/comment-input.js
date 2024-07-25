import { useState } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/context/auth-context'
import { ArticlesComment } from '@/configs/articles'
import axios from 'axios'
import CommentModal from '../comment-modal'
import Btn from '../buttons_test'
import LoginAlert from '@/hooks/login-alert/login-alert'
import 'animate.css'
import styles from './comment-input.module.css'

export default function CommentInput({
  showInput = true,
  // article_id = 0,
  main = 0,
  sub = undefined,
}) {
  const router = useRouter()
  const { auth } = useAuth()
  const [comment, setComment] = useState('')
  const [wordCount, setWordCount] = useState(50)
  const [error, setError] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [showModal, setShowModal] = useState(false)
  const maxWordCount = 50

  const loginalert = LoginAlert('要登入才能留言喔~')

  const handleModalClose = () => {
    setShowModal(false)
    router.reload()
  }

  const textAreaChange = (e) => {
    const str = e.target.value
    let nextComment = str
    let nextWordCount = maxWordCount - nextComment.length

    if (nextWordCount > 0) {
      setError(false)
      setErrorText('')
    }
    if (nextWordCount < 0) {
      console.log(nextWordCount)
      nextComment = str.slice(0, 50)
      nextWordCount = 0
      setError(true)
      setErrorText('字數已到上限囉~')
    }

    setComment(nextComment)
    setWordCount(nextWordCount)
  }

  const submitComment = (e) => {
    if (e.type === 'click' || e.key === 'Enter') {
      if (!auth.id) {
        loginalert.fire().then((result) => {
          if (result.isConfirmed) {
            router.push('/users/sign_in')
          }
        })
      } else {
        if (!comment.trim()) {
          setError(true)
          setErrorText('留言不能是空的喔~')
        } else {
          let insertMain = 0
          let insertSub = 0

          console.log(sub, main)
          if (sub === undefined) {
            insertMain = main + 1
          } else if (sub >= 0) {
            insertMain = main
            insertSub = sub + 1
          }

          const url = `${ArticlesComment}`
          axios
            .post(
              url,
              {
                article_id: router.query.article_id,
                main: insertMain,
                sub: insertSub,
                member_id: auth.id,
                comment_content: comment,
              },
              {
                headers: {
                  Authorization: `Bearer ${auth.token}`,
                  'Content-Type': 'application/json',
                },
              }
            )
            .then((res) => {
              if (res.data.success) {
                setShowModal(true)
              }
            })
            .catch((error) => {
              console.log(error)
            })
        }
      }
    }
  }

  const handleClick = () => {
    if (!auth.id) {
      loginalert.fire().then((result) => {
        if (result.isConfirmed) {
          router.push('/users/sign_in')
        }
      })
    }
  }

  return (
    <>
      <div style={{ display: `${showInput ? 'block' : 'none'}` }}>
        <div className={styles.userComment}>
          <textarea
            className={`${
              error && error !== 'wordCount'
                ? styles.error
                : styles.normalBorder
            }`}
            onClick={handleClick}
            onChange={textAreaChange}
            onKeyDown={submitComment}
            placeholder="輸入文字來留下你的看法..."
            value={comment}
          />
        </div>
        <div className={styles.userCommentBtn}>
          <div
            className={`${styles.errorText} ${error ? styles.showError : ''}`}
          >
            {errorText}
          </div>
          <div className={styles.wordCount}>
            剩餘字數({wordCount}/{maxWordCount})
          </div>
          <div className={styles.submitBtn}>
            <Btn
              size="sm"
              bgColor="midnightgreen"
              maxWidth="94px"
              width="100%"
              onClick={submitComment}
            >
              送出
            </Btn>
          </div>
        </div>
      </div>
      {showModal && <CommentModal onClose={handleModalClose} />}
    </>
  )
}
