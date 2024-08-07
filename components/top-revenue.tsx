'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { TopRevenueChart } from '@/components/top-revenue-chart'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import './top-revenue.css'
import { useScrollVisibility } from '@/hooks/useScrollVisibility'

function TopRevenue() {
  const [scrollVisibilityRef, isVisible] = useScrollVisibility()

  return (
    <div
      ref={scrollVisibilityRef}
      className={`${
        isVisible ? 'animate-slide-in-bottom' : 'opacity-0 translate-y-1/2'
      } w-fit flex justify-center`}
    >
      <Card className='dottedOutsideBorder relative max-w-[190px] 2xxs:max-w-[320px] 2xxs:max-h-[380px] 2xxs:w-full rounded-xl bg-gradient-to-tr from-[rgba(182,27,243,0.1)] dark:from-[rgba(182,27,243,0.24)] to-transparent py-5 px-5 flex flex-col justify-between'>
        <div className='w-full flex justify-between items-center mb-6'>
          <h2
            className={`font-semibold text-base 2xxs:text-xl text-text-secondary select-none`}
          >
            Top Revenue Streams
          </h2>
          <Button variant='outline' size='icon' className='bg-transparent'>
            <ChevronRight />
            <span className='sr-only'>View more</span>
          </Button>
        </div>
        <TopRevenueChart />

        {/* Center span inside card */}
        <span className='hidden 2xxs:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl mt-[0.9rem] tracking-wider font-semibold text-text-primary select-none'>
          $6,250
        </span>
      </Card>
    </div>
  )
}

export { TopRevenue }
