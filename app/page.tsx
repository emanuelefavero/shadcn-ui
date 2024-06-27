import { Header } from '@/components/header'
import { Dashboard } from '@/components/dashboard'

export default function Home() {
  return (
    <>
      <Header />

      <main className='px-4 py-2'>
        <Dashboard />
      </main>
    </>
  )
}
