import React from 'react'

export default function useArticleSearch(url = '', setData = () => {}) {
  const nextData = async () => {
    const data = await fetch(url)
    const resData = await data.json()
  }
}
