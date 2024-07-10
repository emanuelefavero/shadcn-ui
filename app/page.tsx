import { ToastResize } from '@/components/ToastResize'
import { Header } from '@/components/Header'
import { Dashboard } from '@/components/Dashboard'
import { Footer } from '@/components/Footer'
import AnimatedCursor from 'react-animated-cursor'

export default function Home() {
  return (
    <>
      <ToastResize />

      <Header />

      <main className='px-4 py-2 w-full max-w-[1280px] mx-auto mb-20'>
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

      <Footer />
    </>
  )
}
