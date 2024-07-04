import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { campaignData } from '@/data/campaignData'

function CampaignPerformance() {
  if (!campaignData) return null

  return (
    <>
      <h2 className={`font-semibold text-xl text-text-secondary select-none`}>
        Campaign Performance
      </h2>

      <Table>
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
    </>
  )
}

export { CampaignPerformance }
