import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
const Searchbar = () => {
  return (
    <div>
      <div className="my-4 grid grid-cols-12 items-end gap-4">
        <div className="col-span-9">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="">User ID</TableHead>
                <TableHead>User Name</TableHead>
                <TableHead>Email Address</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="pb-0">
                  <Input type="text" placeholder="User ID" />
                </TableCell>
                <TableCell className="pb-0">
                  <Input type="text" placeholder="User Name" />
                </TableCell>
                <TableCell className="pb-0">
                  <Input type="email" placeholder="Email Address" />
                </TableCell>
                <TableCell className="pb-0">
                  <Input type="date" placeholder="Start Date" />
                </TableCell>
                <TableCell className="pb-0">
                  <Input type="date" placeholder="End Date" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="col-span-3">
          <Button className=" bg-sky-100 text-sky-700 shadow hover:bg-sky-100 hover:text-sky-700">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
