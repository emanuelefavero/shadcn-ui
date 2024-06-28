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
  RefreshCcw,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { EllipsisVertical } from 'lucide-react'
import { MainData } from '@/types/mainData'

interface Props {
  data: MainData
}

function FirstCardMenu({ data }: Props) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='p-1'>
            <EllipsisVertical
              className={`h-4 w-4 ${
                data.selected && 'text-white dark:text-background'
              }`}
            />
            <span className='sr-only'>Open {data.label} menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='max-w-50'>
          <DropdownMenuItem className='group cursor-pointer'>
            <RefreshCcw className='h-4 w-4 mr-3 group-hover:text-green-500 transition-colors duration-200' />
            Refresh {data.label}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export { FirstCardMenu }