import React from 'react'

export default function ToggleComment({
  onClick = () => {},
  group = 0,
  totalGroup = 0,
  remain = 0,
}) {
  return (
    <>
      <button
        onClick={onClick}
        style={{
          display: `${group < totalGroup ? 'flex' : 'none'}`,
        }}
      >
        ...查看其他{remain}則留言
      </button>
      <button
        onClick={onClick}
        style={{
          display: `${group < totalGroup ? 'none' : 'flex'}`,
        }}
      >
        隱藏留言
      </button>
    </>
  )
}
