import Pageheader from "@/components/Pageheader";
import Searchbar from "@/components/Searchbar";
import { columns } from "@/tables/users/columns";
import type { MetaFunction } from "@remix-run/node";
import { TableData } from "@/types";
import { ClientOnly } from "remix-utils/client-only";
import CreateNew from "@/components/CreateNew";
import { useTableStore } from "@/store";
import { DataTable } from "@/components/ui/data-table";

export const meta: MetaFunction = () => {
  return [{ title: "AdminStop | Users" }];
};

const searchTableData: TableData[] = [
  { label: "User ID", type: "text", placeholder: "User ID" },
  { label: "User Name", type: "text", placeholder: "User Name" },
  { label: "Email Address", type: "email", placeholder: "Email Address" },
  { label: "Start Date", type: "date", placeholder: "" },
  { label: "End Date", type: "date", placeholder: "" },
];

const user = () => {
  const userData = useTableStore((state) => state.users);

  return (
    <div className="">
      <Pageheader title="User Info" description="Create/Modify Users" />
      <Searchbar data={searchTableData} />
      <CreateNew type="users" />
      <div className="container mx-auto py-10">
        <ClientOnly fallback={null}>
          {() => <DataTable columns={columns} data={userData} />}
        </ClientOnly>
      </div>
    </div>
  );
};

export default user;
