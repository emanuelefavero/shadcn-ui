'use client'

import React, { useState } from 'react'
import useWindowResize from '@/hooks/useWindowResize'
import './toast-resize.css'

function ToastResize() {
  const [show, setShow] = useState(false)

  useWindowResize(() => {
    setShow(true)
    setTimeout(() => setShow(false), 3000) // Hide after 3 seconds
  })

  return (
    <div className={`toast ${show ? 'show' : ''}`}>
      <p>Please refresh the page</p>
    </div>
  )
}

export { ToastResize }
