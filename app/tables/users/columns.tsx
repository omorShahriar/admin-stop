import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Link } from "@remix-run/react";
import { ClipboardPenLineIcon, Trash2Icon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export type User = {
  id: string;
  name: string;
  email: string;
  startDate: string;
  endDate: string;
};

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "id",
    header: "User ID",
  },
  {
    accessorKey: "name",
    header: "User Name",
  },
  {
    accessorKey: "email",
    header: "Email Address",
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
  },
  {
    accessorKey: "endDate",
    header: "End Date",
  },
  {
    id: "access",
    header: "Access",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <Button asChild variant="ghost" size="icon">
          <Link to={`/access-policy/${user.id}`}>
            <ClipboardPenLineIcon className="text-sky-500" />
          </Link>
        </Button>
      );
    },
  },
  {
    id: "action",
    header: "Action",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="icon">
            <ClipboardPenLineIcon className="text-sky-500" />
          </Button>
          <Button variant="ghost" size="icon">
            <Trash2Icon className="text-red-500" />
          </Button>
        </div>
      );
    },
  },
];
