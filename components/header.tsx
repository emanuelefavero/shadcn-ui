import { DarkModeToggle } from '@/components/dark-mode-toggle'
import { Sidebar } from '@/components/sidebar'

export default function Header() {
  return (
    <header className='flex justify-between w-full px-2 py-2'>
      <Sidebar />
      <DarkModeToggle />
    </header>
  )
}
