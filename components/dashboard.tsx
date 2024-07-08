import { H1 } from '@/components/ui/typography'
import { SearchInput } from '@/components/search-input'
import { MainCard } from '@/components/main-card'
import { DealsAndRevenue } from '@/components/deals-and-revenue'
import { CampaignPerformance } from './campaign-performance'
import { TopRevenue } from './top-revenue'

function Dashboard() {
  return (
    <>
      <section className='w-full flex justify-between mb-10'>
        <H1 className='font-semibold text-3xl mb-10 select-none'>Dashboard</H1>
        <SearchInput />
      </section>

      {/* Set the section to flex direction column on small screens and flex direction row on the others*/}
      <section className='flex flex-row flex-wrap justify-center gap-8 pb-10'>
        <MainCard />
        <DealsAndRevenue />
        <CampaignPerformance />
        <TopRevenue />
      </section>
    </>
  )
}

export { Dashboard }
