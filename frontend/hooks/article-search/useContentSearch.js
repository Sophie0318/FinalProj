import React from 'react'

export default function useContentSearch(content = '', setContent = () => {}) {
  const contentSearch = (e) => {
    if (e.target.value && e.key === 'Enter') {
      console.log(content)
    }
  }

  return contentSearch
}
