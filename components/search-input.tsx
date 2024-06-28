import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

function SearchInput() {
  return (
    <>
      {/* Search Input */}
      <div className='relative max-w-60 hidden xs:block'>
        <Input
          type='search'
          placeholder='Search...'
          className='w-full pl-9 pr-4 py-2 bg-purple-900 bg-opacity-5 placeholder:text-slate-500'
        />
        <Search className='h-5 w-5 absolute left-2 top-2.5 text-slate-500' />
      </div>

      {/* Search Input Button */}
      <div className='block xs:hidden'>
        <Button variant='outline' size='icon' className='hover:bg-transparent'>
          <Search className='h-5 w-5 text-slate-500 hover:text-foreground' />
          <span className='sr-only'>Search</span>
        </Button>
      </div>
    </>
  )
}

export { SearchInput }
