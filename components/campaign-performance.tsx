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
      <h2>CampaignPerformance</h2>

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
              <TableCell>{campaign.id}</TableCell>
              <TableCell className='flex'>
                <Avatar className='mr-3'>
                  <AvatarImage
                    src={campaign.campaign.image}
                    alt={campaign.campaign.alt}
                  />
                  <AvatarFallback>
                    {campaign.campaign.avatarFallback}
                  </AvatarFallback>
                </Avatar>
                <div className='flex flex-col'>
                  <span>{campaign.campaign.name}</span>
                  <span>{campaign.campaign.type}</span>
                </div>
              </TableCell>
              <TableCell>{campaign.visitors}</TableCell>
              <TableCell>{campaign.contacts}</TableCell>
              <TableCell>{campaign.companies}</TableCell>
              <TableCell>{campaign.leads}</TableCell>
              <TableCell className='text-right'>${campaign.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export { CampaignPerformance }
