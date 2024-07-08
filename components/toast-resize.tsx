'use client'

import React, { useState } from 'react'
import useWindowResize from '@/hooks/useWindowResize'

function ToastResize() {
  const [show, setShow] = useState(false)

  useWindowResize(() => {
    setShow(true)
    setTimeout(() => setShow(false), 3000) // Hide after 3 seconds
  })

  return (
    <div
      className={`fixed left-1/2 transform -translate-x-1/2 bg-gray-800 text-white py-3 px-6 rounded shadow-lg transition-all duration-500 z-50 ${
        show ? 'top-5' : '-top-20'
      }`}
    >
      <span>Refresh the page to resize the charts</span>
    </div>
  )
}

export { ToastResize }
