import { H1 } from '@/components/ui/typography'
import { MainCard } from '@/components/main-card'
import { SearchInput } from '@/components/search-input'

function Dashboard() {
  return (
    <>
      <section className='flex justify-between'>
        <H1 className='font-semibold text-3xl mb-10 select-none'>Dashboard</H1>
        <SearchInput />
      </section>

      <MainCard />
    </>
  )
}

export { Dashboard }
