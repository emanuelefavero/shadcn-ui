import { Header } from '@/components/header'
import { Dashboard } from '@/components/dashboard'
import AnimatedCursor from 'react-animated-cursor'

export default function Home() {
  return (
    <>
      <Header />

      <main className='px-4 py-2'>
        <Dashboard />
      </main>

      <AnimatedCursor
        innerSize={1}
        outerSize={8}
        color='168, 85, 247'
        outerAlpha={0.2}
        innerScale={0.5}
        outerScale={4}
        showSystemCursor={true}
        trailingSpeed={8}
      />
    </>
  )
}
