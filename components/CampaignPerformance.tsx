'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar'
import { campaignData } from '@/data/campaignData'
import { useScrollVisibility } from '@/hooks/useScrollVisibility'

function CampaignPerformance() {
  const [scrollVisibilityRef, isVisible] = useScrollVisibility()

  if (!campaignData) return null

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
        Campaign Performance
      </h2>

      {/* TODO: add max-w-fit to Table */}
      <Table className='lg:max-w-fit'>
        <TableHeader>
          <TableRow>
            <TableHead>NO.</TableHead>
            <TableHead>CAMPAIGN</TableHead>
            <TableHead>VISITORS</TableHead>
            <TableHead>CONTACTS</TableHead>
            <TableHead>COMPANIES</TableHead>
            <TableHead>LEADS</TableHead>
            <TableHead className='text-right'>VALUE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {campaignData.map((campaign) => (
            <TableRow key={campaign.id}>
              <TableCell className='text-muted-foreground'>
                {campaign.id}
              </TableCell>
              <TableCell className='flex items-center min-w-max'>
                <Avatar className='mr-3 select-none'>
                  <AvatarImage
                    src={campaign.campaign.image}
                    alt={campaign.campaign.alt}
                  />
                  <AvatarFallback>
                    {campaign.campaign.avatarFallback}
                  </AvatarFallback>
                </Avatar>
                <div className='flex flex-col'>
                  <span className='text-base text-foreground mb-1'>
                    {campaign.campaign.name}
                  </span>
                  <span className='select-none text-xs text-muted-foreground'>
                    {campaign.campaign.type}
                  </span>
                </div>
              </TableCell>
              <TableCell>{campaign.visitors}</TableCell>
              <TableCell>{campaign.contacts}</TableCell>
              <TableCell>{campaign.companies}</TableCell>
              <TableCell className='text-foreground'>
                {campaign.leads}
              </TableCell>
              <TableCell className='text-right text-purple-500'>
                ${campaign.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export { CampaignPerformance }
