import { Card } from '@/components/ui/card'
import { SalesAndRevenueChart } from '@/components/sales-and-revenue-chart'

function SalesAndRevenue() {
  return (
    <>
      <Card className='animate-slide-in-right max-w-[500px] w-full rounded-xl overflow-hidden bg-purple-900 bg-opacity-5 py-6 px-5 hidden 2xxs:flex flex-col justify-between'>
        <h2
          className={`font-semibold text-base 2xxs:text-xl text-text-secondary mb-2 select-none`}
        >
          Sales and Revenue
        </h2>
        <SalesAndRevenueChart />
      </Card>
    </>
  )
}

export { SalesAndRevenue }
