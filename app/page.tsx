import { Button } from '@/components/ui/button'
import { H1, P } from '@/components/ui/typography'
import Header from '@/components/header'

export default function Home() {
  return (
    <>
      <Header />

      <main className='px-4 py-2'>
        <H1>Title</H1>

        <P className='mb-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          ducimus at nam.
        </P>

        <Button>Click me</Button>
      </main>
    </>
  )
}
