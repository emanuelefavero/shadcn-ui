import { Button } from '@/components/ui/button'
import Header from '@/components/header'

export default function Home() {
  return (
    <>
      <Header />

      <main className='px-2 py-2'>
        <h1>Shadcn/ui</h1>

        <Button>Click me</Button>
      </main>
    </>
  )
}
