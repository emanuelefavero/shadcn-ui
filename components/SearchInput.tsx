'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Search } from 'lucide-react'
import { SearchMenu } from '@/components/SearchMenu'

function SearchInput() {
  const [open, setOpen] = useState(false)

  const handleOpenChange = () => {
    setOpen((open) => !open)
  }

  return (
    <>
      {/* Search Input */}
      <div className='relative max-w-60 hidden xxs:block'>
        <Button
          className='w-full min-w-40 justify-start pl-9 pr-4 py-2 bg-purple-900 bg-opacity-5 text-slate-500 rounded-lg border hover:bg-purple-500 hover:bg-opacity-10 hover:text-foreground peer'
          onClick={handleOpenChange}
        >
          Search...
        </Button>
        <Search className='h-5 w-5 absolute left-2 top-2.5 text-slate-500 peer-hover:text-foreground' />
      </div>

      {/* Search Input Button */}
      <div className='block xxs:hidden'>
        <Button
          variant='outline'
          size='icon'
          onClick={handleOpenChange}
          className='group'
        >
          <Search className='h-5 w-5 text-slate-500 group-hover:text-foreground' />
          <span className='sr-only'>Search</span>
        </Button>
      </div>

      {/* Search Menu */}
      <SearchMenu open={open} onOpenChange={handleOpenChange} />
    </>
  )
}

export { SearchInput }
