import { Button } from '@/components/ui/button'
import Header from '@/components/header'

export default function Home() {
  return (
    <>
      <Header />

      <main className='px-4 py-2'>
        <h1 className='mb-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
          Title
        </h1>

        <p className='mb-4 leading-7 [&:not(:first-child)]:mt-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          ducimus at nam.
        </p>

        <Button>Click me</Button>
      </main>
    </>
  )
}
