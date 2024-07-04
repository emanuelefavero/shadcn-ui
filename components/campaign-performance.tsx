import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

function CampaignPerformance() {
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
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell className='flex'>
              <Avatar className='mr-3'>
                <AvatarImage src='https://picsum.photos/id/82/50/?blur' />
                <AvatarFallback>ROQ</AvatarFallback>
              </Avatar>
              <div className='flex flex-col'>
                <span>ROQ</span>
                <span>Search/brand</span>
              </div>
            </TableCell>
            <TableCell>1,181</TableCell>
            <TableCell>217</TableCell>
            <TableCell>150</TableCell>
            <TableCell>26.9</TableCell>
            <TableCell className='text-right'>$78.29</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}

export { CampaignPerformance }
