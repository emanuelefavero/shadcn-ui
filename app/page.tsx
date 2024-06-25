import { Button } from '@/components/ui/button'
import { DarkModeToggle } from '@/components/dark-mode-toggle'

export default function Home() {
  return (
    <>
      <header>
        <DarkModeToggle />
      </header>

      <h1>Shadcn/ui</h1>

      <Button>Click me</Button>
    </>
  )
}
