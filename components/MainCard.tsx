'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { convertLabelToId } from '@/utils/stringUtils'
import { mainData } from '@/data/mainData'
import { MainCardMenu } from './MainCardMenu'

function MainCard() {
  const [data, setData] = useState(mainData)

  const handleSelect = (label: string) => {
    setData((prevData) =>
      prevData.map((data) => ({
        ...data,
        selected: data.label === label,
      }))
    )
  }

  return (
    <Card className='animate-slide-in-top grid grid-cols-[repeat(2,1fr)] max-w-[500px] w-full rounded-xl overflow-hidden bg-purple-900 bg-opacity-5 [&>*:nth-child(odd)]:border-r [&>*:nth-child(1)]:border-b [&>*:nth-child(2)]:border-b [&>*]:border-border'>
      {data.map((data) => (
        <div
          key={data.label}
          role='group'
          onClick={() => {
            handleSelect(data.label)
          }}
          className={`flex flex-col p-3 2xxs:p-5 text-sm 2xxs:text-base hover:bg-purple-500 hover:bg-opacity-5 ${
            data.selected
              ? 'bg-gradient-to-br from-purple-500 to-purple-300 dark:from-purple-500 dark:to-purple-300'
              : 'cursor-pointer'
          }`}
        >
          <div className='flex items-center justify-between mb-4'>
            <label
              htmlFor={convertLabelToId(data.label)}
              className={`text-md font-medium select-none ${
                data.selected && 'text-white dark:text-background'
              }`}
            >
              {data.label}
            </label>
            <MainCardMenu data={data} />
          </div>
          <data
            id={convertLabelToId(data.label)}
            value={data.value}
            className={`font-bold text-sm 2xxs:text-2xl mb-3 ${
              data.selected && 'text-white dark:text-background'
            }`}
          >
            {data.formattedValue}
          </data>
          <Badge
            className={`max-w-fit bg-purple-500 dark:bg-purple-300 hover:bg-purple-600 dark:hover:bg-purple-200 font-bold select-none ${
              data.selected && 'text-white dark:text-background'
            }`}
          >
            +{data.percentage}%
          </Badge>
        </div>
      ))}
    </Card>
  )
}

export { MainCard }
