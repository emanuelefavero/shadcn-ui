import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import Header from '@/components/header'

export default function Home() {
  return (
    <>
      <Header />

      <main className='px-2 py-2'>
        <Typography variant='h1'>Shadcn/ui</Typography>

        <Button>Click me</Button>
      </main>
    </>
  )
}
