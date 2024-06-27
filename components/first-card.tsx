import { EllipsisVertical } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { convertLabelToId } from '@/utils/stringUtils'

const numbersData = [
  {
    label: 'Visitors',
    value: 30794,
    formattedValue: '30,794',
    percentage: 22,
  },
  {
    label: 'Contacts',
    value: 1983,
    formattedValue: '1,983',
    percentage: 21,
  },
  {
    label: 'Attributable Deals',
    value: 57,
    formattedValue: '57',
    percentage: 12.6,
  },
  {
    label: 'Revenue',
    value: 10622.21,
    formattedValue: '$10,622.21',
    percentage: 15.2,
  },
]

function FirstCard() {
  return (
    <Card className='grid grid-cols-[repeat(2,1fr)] max-w-[500px] w-full rounded-xl overflow-hidden bg-purple-900 bg-opacity-5 [&>*:nth-child(odd)]:border-r [&>*:nth-child(1)]:border-b [&>*:nth-child(2)]:border-b [&>*]:border-border'>
      {numbersData.map((data) => (
        <div key={data.label} className='flex flex-col p-5'>
          <div className='flex items-center justify-between mb-4'>
            <label
              htmlFor={convertLabelToId(data.label)}
              className='text-md font-medium select-none'
            >
              {data.label}
            </label>
            <EllipsisVertical className='h-4 w-4' />
          </div>
          <data
            id={convertLabelToId(data.label)}
            value={data.value}
            className='font-bold text-2xl mb-3'
          >
            {data.formattedValue}
          </data>
          <Badge className='max-w-fit bg-purple-500 dark:bg-purple-300 font-bold hover:bg-purple-600 dark:hover:bg-purple-200 select-none'>
            +{data.percentage}%
          </Badge>
        </div>
      ))}
    </Card>
  )
}

export { FirstCard }
