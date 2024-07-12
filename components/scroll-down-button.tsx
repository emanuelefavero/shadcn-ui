'use client'

import { ChevronDown } from 'lucide-react'
import { useScrollDistance } from '@/hooks/useScrollDistance'

function ScrollDownButton() {
  const scrollDistance = useScrollDistance()

  if (scrollDistance > 130) return null

  return (
    <div className='block lg:hidden absolute bottom-3 left-1/2 z-50 text-3xl font-medium text-purple-400 text-opacity-50 dark:text-purple-600 dark:text-opacity-50 select-none animate-bounce'>
      <ChevronDown className='w-10 h-10' />
    </div>
  )
}

export { ScrollDownButton }
