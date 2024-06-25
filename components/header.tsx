import { DarkModeToggle } from '@/components/dark-mode-toggle'

export default function Header() {
  return (
    <header className='flex w-full px-2 py-2'>
      <div className='ml-auto'>
        <DarkModeToggle />
      </div>
    </header>
  )
}
