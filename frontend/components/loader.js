import React from 'react'
import { dotSpinner } from 'ldrs'

export default function Loader() {
  // Default values shown
  return (
    <>
      <l-dot-spinner size="40" speed="0.9" color="black"></l-dot-spinner>
    </>
  )
}

dotSpinner.register()

// Default values shown
