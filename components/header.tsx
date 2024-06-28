import { DarkModeToggle } from '@/components/dark-mode-toggle'
import { Sidebar } from '@/components/sidebar'

function Header() {
  return (
    <header className='flex justify-between w-full max-w-screen-2xl m-auto px-4 py-2 mb-6'>
      <Sidebar />
      <DarkModeToggle />
    </header>
  )
}

export { Header }
