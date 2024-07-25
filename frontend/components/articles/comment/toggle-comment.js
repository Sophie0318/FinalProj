import React from 'react'

export default function ToggleComment({
  onClick = () => {},
  group = 0,
  totalGroup = 0,
  perGroup = 0,
  remain = 0,
}) {
  return (
    <>
      <button onClick={onClick}>
        <span
          style={{
            display: `${group < totalGroup ? 'flex' : 'none'}`,
          }}
        >
          ...查看其他{remain > perGroup ? perGroup : remain}則留言
        </span>
        <span
          style={{
            display: `${group < totalGroup ? 'none' : 'flex'}`,
          }}
        >
          隱藏部分留言
        </span>
      </button>
    </>
  )
}
