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
            <CommandItem>
              <LayoutDashboard className='mr-2 h-4 w-4' />
              <span>Dashboard</span>
            </CommandItem>
            <CommandItem>
              <CircleDollarSign className='mr-2 h-4 w-4' />
              <span>Revenue</span>
            </CommandItem>
            <CommandItem>
              <Map className='mr-2 h-4 w-4' />
              <span>Journey</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading='Settings'>
            <CommandItem>
              <User className='mr-2 h-4 w-4' />
              <span>Profile</span>
            </CommandItem>
            <CommandItem>
              <Settings className='mr-2 h-4 w-4' />
              <span>Settings</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

export { SearchMenu }
