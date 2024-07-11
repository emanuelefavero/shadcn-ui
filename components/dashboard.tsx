import { H1 } from '@/components/ui/typography'
import { SearchInput } from '@/components/search-input'
import { MainCard } from '@/components/main-card'
import { SalesAndRevenue } from '@/components/sales-and-revenue'
import { MarketingAnalysis } from '@/components/marketing-analysis'
import { TopRevenue } from '@/components/top-revenue'

function Dashboard() {
  return (
    <>
      <section className='w-full flex justify-between items-center mb-10 xs:mb-20'>
        <H1 className='font-semibold text-lg 2xxs:text-3xl select-none'>
          Dashboard
        </H1>
        <SearchInput />
      </section>

      {/* Set the section to flex direction column on small screens and flex direction row on the others*/}
      <section className='flex flex-row flex-wrap justify-center gap-8 pb-10'>
        <MainCard />
        <SalesAndRevenue />
        <MarketingAnalysis />
        <TopRevenue />
      </section>
    </>
  )
}

export { Dashboard }
