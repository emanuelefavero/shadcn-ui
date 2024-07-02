import { Card } from '@/components/ui/card'
import { DealsAndRevenueChart } from './deals-and-revenue-chart'

function DealsAndRevenue() {
  return (
    <>
      <Card className='max-w-[500px] w-full rounded-xl overflow-hidden bg-purple-900 bg-opacity-5'>
        <DealsAndRevenueChart />
      </Card>
    </>
  )
}

export { DealsAndRevenue }
