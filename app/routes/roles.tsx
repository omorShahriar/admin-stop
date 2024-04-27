import CreateNew from "@/components/CreateNew";
import Pageheader from "@/components/Pageheader";
import Searchbar from "@/components/Searchbar";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/tables/roles/columns";
import { data } from "@/tables/roles/dummy-data";
import { TableData } from "@/types";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "AdminStop | Roles" }];
};

const searchTableData: TableData[] = [
  { label: "Role ID", type: "text", placeholder: "Role ID" },
  { label: "Role Name", type: "text", placeholder: "Role Name" },
  { label: "Start Date", type: "date", placeholder: "" },
  { label: "End Date", type: "date", placeholder: "" },
];

const roles = () => {
  return (
    <div>
      <Pageheader title="Roles" description="Create/Modify User Roles" />
      <Searchbar data={searchTableData} />
      <CreateNew type="roles" />
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default roles;
