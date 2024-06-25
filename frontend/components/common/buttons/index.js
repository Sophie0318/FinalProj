import React from 'react'
import styles from './button.module.css'
// 建議搭配 <div className="col"> 包起來使用, 比較可以控制大小

export function BtnLg({ children, size = 'btn-lg' }) {
  // 或許可以簡化Button元件, 接受prop來決定要用哪一個大小
  return (
    <>
      <button
        className={`${styles.btnLg} btn btn-lg btn-primary text-white h4-font rounded-pill`}
      >
        {children}
      </button>
    </>
  )
}
