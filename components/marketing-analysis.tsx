'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { marketingData } from '@/data/marketingData'
import { useScrollVisibility } from '@/hooks/useScrollVisibility'

function MarketingAnalysis() {
  const [scrollVisibilityRef, isVisible] = useScrollVisibility()

  if (!marketingData) return null

  return (
    <div
      ref={scrollVisibilityRef}
      className={`${
        isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-y-1/2'
      } overflow-scroll w-full lg:w-[678px] xl:w-fit`}
    >
      <h2
        className={`font-semibold text-xl text-text-secondary mb-6 select-none`}
      >
        Marketing Analysis
      </h2>

      {/* TODO: add max-w-fit to Table */}
      <Table className='lg:max-w-fit'>
        <TableHeader>
          <TableRow>
            <TableHead>NO.</TableHead>
            <TableHead>MARKETING</TableHead>
            <TableHead>USERS</TableHead>
            <TableHead>RELATIONS</TableHead>
            <TableHead>BUSINESSES</TableHead>
            <TableHead>BUYERS</TableHead>
            <TableHead className='text-right'>PROFITS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {marketingData.map((marketing) => (
            <TableRow key={marketing.id}>
              <TableCell className='text-muted-foreground'>
                {marketing.id}
              </TableCell>
              <TableCell className='flex items-center min-w-max'>
                <Avatar className='mr-3 select-none'>
                  <AvatarImage
                    src={marketing.marketing.image}
                    alt={marketing.marketing.alt}
                  />
                  <AvatarFallback>
                    {marketing.marketing.avatarFallback}
                  </AvatarFallback>
                </Avatar>
                <div className='flex flex-col'>
                  <span className='text-base text-foreground mb-1'>
                    {marketing.marketing.name}
                  </span>
                  <span className='select-none text-xs text-muted-foreground'>
                    {marketing.marketing.type}
                  </span>
                </div>
              </TableCell>
              <TableCell>{marketing.users}</TableCell>
              <TableCell>{marketing.relations}</TableCell>
              <TableCell>{marketing.businesses}</TableCell>
              <TableCell className='text-foreground'>
                {marketing.buyers}
              </TableCell>
              <TableCell className='text-purple-500'>
                ${marketing.profits}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export { MarketingAnalysis }
