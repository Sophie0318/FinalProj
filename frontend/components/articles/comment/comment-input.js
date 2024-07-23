import React from 'react'
import { useRouter } from 'next/router'
import Btn from '../buttons_test'
import LoginAlert from '@/hooks/login-alert/login-alert'
import styles from './comment-input.module.css'

export default function CommentInput() {
  const router = useRouter()
  const loginalert = LoginAlert('要登入才能留言喔~')
  const handleClick = () => {
    loginalert.fire().then((result) => {
      if (result.isConfirmed) {
        router.push('/users/sign_in')
      }
    })
  }
  return (
    <>
      <div className={styles.userComment}>
        <textarea placeholder="輸入文字來留下你的看法..."></textarea>
      </div>
      <div className={styles.userCommentBtn}>
        <div className={styles.wordCount}>剩餘字數(50/50)</div>
        <div className={styles.submitBtn}>
          <Btn
            size="sm"
            bgColor="midnightgreen"
            maxWidth="94px"
            width="100%"
            onClick={handleClick}
          >
            送出
          </Btn>
        </div>
      </div>
    </>
  )
}
