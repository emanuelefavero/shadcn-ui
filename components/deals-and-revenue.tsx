import { Card } from '@/components/ui/card'
import { DealsAndRevenueChart } from './deals-and-revenue-chart'

function DealsAndRevenue() {
  return (
    <>
      <Card className='max-w-[500px] w-full rounded-xl overflow-hidden bg-purple-900 bg-opacity-5 py-6 px-5 flex flex-col justify-between items-center'>
        <h2
          className={`w-full font-semibold text-xl text-text-secondary mb-2 select-none`}
        >
          Deals and Revenue
        </h2>
        <DealsAndRevenueChart />
      </Card>
    </>
  )
}

export { DealsAndRevenue }
