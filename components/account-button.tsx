import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { EllipsisVertical } from 'lucide-react'

function AccountButton() {
  return (
    <div className='flex justify-between w-full'>
      <div className='flex'>
        <Avatar className='mr-2'>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>EF</AvatarFallback>
        </Avatar>
        <div className='flex flex-col'>
          <span className='font-bold'>Emanuele</span>
          <a href='https://emanuelefavero.com/'>
            <small className='text-slate-500'>emanuelefavero.com</small>
          </a>
        </div>
      </div>
      <EllipsisVertical />
    </div>
  )
}

export { AccountButton }
