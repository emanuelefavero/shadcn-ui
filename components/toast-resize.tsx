'use client'

import { useState } from 'react'
import useWindowResize from '@/hooks/useWindowResize'
import { Card } from '@/components/ui/card'

function ToastResize() {
  const [show, setShow] = useState(false)

  useWindowResize(() => {
    setShow(true)
    setTimeout(() => setShow(false), 3000)
  })

  return (
    <Card
      className={`fixed left-1/2 transform -translate-x-1/2 text-base text-foreground bg-purple-900 bg-opacity-5 pl-3 pr-6 py-2 rounded-lg transition-all duration-250 z-50 cursor-pointer hover:bg-rose-500/10 group ${
        show ? 'top-5' : '-top-20'
      }`}
      onClick={() => setShow(false)}
    >
      <span>Refresh the page to resize the charts</span>
      <span className='absolute top-0 right-0 px-2.5 py-1 text-sm text-rose-500 hidden group-hover:inline'>
        X
      </span>
    </Card>
  )
}

export { ToastResize }
