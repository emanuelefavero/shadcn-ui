import {
  Database,
  LayoutDashboard,
  Map,
  Menu,
  Hexagon,
  CircleDollarSign,
  Zap,
  MessageSquareText,
  Settings,
} from 'lucide-react'

import { Button } from '@/components/ui/Button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu'
import { AccountButton } from '@/components/AccountButton'

function Sidebar() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>
          <Menu className='h-6 w-6' />
          <span className='sr-only'>Open sidebar</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel className='uppercase flex items-center'>
          <Hexagon className='mr-2 h-4 w-4' />
          <span>My Account</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <LayoutDashboard className='mr-2 h-4 w-4' />
            <span>Dashboard</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CircleDollarSign className='mr-2 h-4 w-4' />
            <span>Revenue</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Map className='mr-2 h-4 w-4' />
            <span>Journey</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Zap className='mr-2 h-4 w-4' />
            <span>Performance</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Database className='mr-2 h-4 w-4' />
            <span>Data</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Settings className='mr-2 h-4 w-4' />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MessageSquareText className='mr-2 h-4 w-4' />
          <span>Help</span>
        </DropdownMenuItem>

        {/* Whitespace */}
        <div className='h-20'></div>

        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <AccountButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { Sidebar }
