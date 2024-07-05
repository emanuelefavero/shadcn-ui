import React from 'react'
import { Card } from './ui/card'
import { TopRevenueChart } from './top-revenue-chart'
import './top-revenue.css'

function TopRevenue() {
  return (
    <div className='w-full xs:w-fit flex justify-center'>
      <Card className='dottedOutsideBorder relative max-w-[320px] w-full rounded-xl bg-gradient-to-tr from-[rgba(182,27,243,0.1)] dark:from-[rgba(182,27,243,0.24)] to-transparent py-6 px-5 flex flex-col justify-between'>
        <h2
          className={`font-semibold text-xl text-text-secondary mb-6 select-none`}
        >
          Top Revenue Channels
        </h2>
        <TopRevenueChart />

        {/* Center span inside card */}
        <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl mt-[0.37rem] tracking-wider font-semibold text-text-primary select-none'>
          $4,271
        </span>
      </Card>
    </div>
  )
}

export { TopRevenue }
