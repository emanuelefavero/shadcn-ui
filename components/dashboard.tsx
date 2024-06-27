import { EllipsisVertical } from 'lucide-react'
import { H1 } from '@/components/ui/typography'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

function Dashboard() {
  return (
    <>
      <H1 className='font-semibold text-3xl mb-10'>Dashboard</H1>

      <Card className='grid grid-cols-[repeat(2,1fr)] max-w-[500px] w-full rounded-xl overflow-hidden bg-purple-900 bg-opacity-5 [&>*:nth-child(odd)]:border-r [&>*:nth-child(1)]:border-b [&>*:nth-child(2)]:border-b [&>*]:border-border'>
        <div className='flex flex-col p-5'>
          <div className='flex items-center justify-between mb-4'>
            <label htmlFor='visitors' className='text-md font-medium'>
              Visitors
            </label>
            <EllipsisVertical className='h-4 w-4' />
          </div>
          <data id='visitors' value={30794} className='font-bold text-2xl mb-3'>
            30,794
          </data>
          <Badge className='max-w-fit bg-purple-200 font-bold hover:bg-purple-300'>
            +22%
          </Badge>
        </div>
        <div className='p-5'></div>
        <div className='p-5'></div>
        <div className='p-5'></div>
      </Card>
    </>
  )
}

export { Dashboard }
