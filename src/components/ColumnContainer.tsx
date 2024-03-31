import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { IssueCard } from './IssueCard'
import { Issue } from '@/types'
import { ScrollArea } from "@/components/ui/scroll-area"

type ColumnContainerProps = {
  column: string
  issues?: Issue[]
}

export function ColumnContainer({ column, issues }: ColumnContainerProps) {
  return (
    <Table className="flex flex-col items-center ">
      <TableHead className="text-center">{column}</TableHead>
      <TableBody className="flex flex-col gap-4">
        <ScrollArea className='h-[80vh] rounded-md border p-4 min-w-[360px]'>
        {issues?.map((issue) => <IssueCard data={issue} />)}
        </ScrollArea>       
      </TableBody>
      <TableFooter></TableFooter>
    </Table>
  )
}
