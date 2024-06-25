import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import Header from '@/components/header'

export default function Home() {
  return (
    <>
      <Header />

      <main className='px-4 py-2'>
        <Typography variant='h1' className='mb-4'>
          Title
        </Typography>
        <Typography variant='p' className='mb-4 text-muted-foreground'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          ducimus at nam.
        </Typography>

        <Button>Click me</Button>
      </main>
    </>
  )
}
