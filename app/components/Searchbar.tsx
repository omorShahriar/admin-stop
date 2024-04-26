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
import { TableData } from "@/types";

const Searchbar = ({ data }: { data: TableData[] }) => {
  return (
    <div>
      <div className="my-4 grid grid-cols-12 items-end gap-4">
        <div className="col-span-9">
          <Table>
            <TableHeader>
              <TableRow>
                {data.map((d, i) => (
                  <TableHead key={i} className="">
                    {d.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                {data.map((d, i) => (
                  <TableCell key={i} className="pb-1">
                    <Input type={d.type} placeholder={d.placeholder} />
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="col-span-3">
          <Button className=" mb-1 bg-sky-100 text-sky-700 shadow hover:bg-sky-100 hover:text-sky-700">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
