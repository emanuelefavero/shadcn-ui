import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

function SearchInput() {
  return (
    <div className='relative max-w-60'>
      <Input
        type='search'
        placeholder='Search...'
        className='w-full pl-9 pr-4 py-2 bg-purple-900 bg-opacity-5 placeholder:text-slate-500'
      />
      <Search className='h-5 w-5 absolute left-2 top-2.5 text-slate-500' />
    </div>
  )
}

export { SearchInput }
