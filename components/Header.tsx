import { DarkModeToggle } from '@/components/DarkModeToggle'
import { Sidebar } from '@/components/Sidebar'

function Header() {
  return (
    <header className='flex justify-between w-full max-w-[1280px] mx-auto px-4 py-2 mb-6'>
      <Sidebar />
      <DarkModeToggle />
    </header>
  )
}

export { Header }
