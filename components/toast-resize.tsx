'use client'

import { useState } from 'react'
import useWindowResize from '@/hooks/useWindowResize'
import { Card } from '@/components/ui/card'
import { RefreshCcw } from 'lucide-react'

function ToastResize() {
  const [show, setShow] = useState(false)

  useWindowResize(() => {
    setShow(true)
    setTimeout(() => setShow(false), 8000)
  })

  return (
    <Card
      className={`fixed left-1/2 transform -translate-x-1/2 text-base text-foreground bg-[rgba(6,10,29,0.5)] backdrop-blur-md pl-3 pr-6 py-2 rounded-lg transition-all duration-250 z-50 cursor-pointer select-none hover:bg-[rgba(15,14,41,0.6)] group/card ${
        show ? 'top-5' : '-top-20'
      }`}
      onClick={() => setShow(false)}
    >
      <button
        type='button'
        onClick={() => {
          // e.stopPropagation()
          window.location.reload()
        }}
        className='font-medium text-green-600 dark:text-green-500 hover:underline hover:text-green-500 dark:hover:text-green-400 active:scale-90 transition-transform duration-150 peer group/refresh'
      >
        <RefreshCcw className='h-3.5 w-3.5 inline relative -top-[1px] group-hover/refresh:animate-spin-slow' />{' '}
        Refresh
      </button>{' '}
      the page to resize the charts
      <span className='absolute top-0 right-0 px-2.5 py-1 font-semibold text-sm text-rose-500 hidden group-hover/card:inline peer-hover:hidden'>
        X
      </span>
    </Card>
  )
}

export { ToastResize }
