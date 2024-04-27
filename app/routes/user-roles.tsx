import CreateNew from "@/components/CreateNew";
import Pageheader from "@/components/Pageheader";
import Searchbar from "@/components/Searchbar";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/tables/user-roles/columns";
import { data } from "@/tables/user-roles/dummy-data";
import { TableData } from "@/types";

const searchTableData: TableData[] = [
  { label: "User Role ID", type: "text", placeholder: "User Role ID" },
  { label: "Role ID", type: "text", placeholder: " Role ID" },
  { label: "User ID", type: "text", placeholder: "User ID" },
  { label: "Start Date", type: "date", placeholder: "" },
  { label: "End Date", type: "date", placeholder: "" },
];
const userRoles = () => {
  return (
    <div>
      <Pageheader title="User Roles" description="Create/Modify User roles" />
      <Searchbar data={searchTableData} />
      <CreateNew type="userRoles" />
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default userRoles;
