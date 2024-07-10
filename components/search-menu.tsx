'use client'

import {
  User,
  LayoutDashboard,
  CircleDollarSign,
  Map,
  Settings,
} from 'lucide-react'

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'

interface Props {
  open: boolean
  onOpenChange: () => void
}

function SearchMenu({ open, onOpenChange }: Props) {
  return (
    <>
      <CommandDialog open={open} onOpenChange={onOpenChange}>
        <CommandInput placeholder='Search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading='Suggestions'>
            <span onClick={onOpenChange}>
              <CommandItem className='w-full cursor-pointer'>
                <LayoutDashboard className='mr-2 h-4 w-4' />
                <span>Dashboard</span>
              </CommandItem>
            </span>
            <span onClick={onOpenChange}>
              <CommandItem className='w-full cursor-pointer'>
                <CircleDollarSign className='mr-2 h-4 w-4' />
                <span>Revenue</span>
              </CommandItem>
            </span>
            <span onClick={onOpenChange}>
              <CommandItem className='w-full cursor-pointer'>
                <Map className='mr-2 h-4 w-4' />
                <span>Journey</span>
              </CommandItem>
            </span>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading='Settings'>
            <span onClick={onOpenChange}>
              <CommandItem className='w-full cursor-pointer'>
                <User className='mr-2 h-4 w-4' />
                <span>Profile</span>
              </CommandItem>
            </span>
            <span onClick={onOpenChange}>
              <CommandItem className='w-full cursor-pointer'>
                <Settings className='mr-2 h-4 w-4' />
                <span>Settings</span>
              </CommandItem>
            </span>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

export { SearchMenu }
