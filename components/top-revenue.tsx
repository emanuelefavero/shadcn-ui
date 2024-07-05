import React from 'react'
import { Card } from './ui/card'
import { TopRevenueChart } from './top-revenue-chart'

function TopRevenue() {
  return (
    <>
      <Card className='max-w-[500px] w-full rounded-xl overflow-hidden bg-purple-900 bg-opacity-5 py-6 px-5 flex flex-col justify-between'>
        <h2
          className={`font-semibold text-xl text-text-secondary mb-6 select-none`}
        >
          Top Revenue Channels
        </h2>
        <TopRevenueChart />
      </Card>
    </>
  )
}

export { TopRevenue }
