import { H1 } from '@/components/ui/typography'
import { MainCard } from './main-card'

function Dashboard() {
  return (
    <>
      <H1 className='font-semibold text-3xl mb-10 select-none'>Dashboard</H1>

      <MainCard />
    </>
  )
}

export { Dashboard }
