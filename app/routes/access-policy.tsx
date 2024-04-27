import CreateNew from "@/components/CreateNew";
import Pageheader from "@/components/Pageheader";
import Searchbar from "@/components/Searchbar";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/tables/access-policy/columns";
import { data } from "@/tables/access-policy/dummy-data";
import { TableData } from "@/types";

const searchTableData: TableData[] = [
  { label: "Policy ID", type: "text", placeholder: "Policy ID" },
  { label: "Role ID", type: "text", placeholder: " Role ID" },
  { label: "Resource Type", type: "text", placeholder: "Resource Type" },
  { label: "Resource Name", type: "text", placeholder: "Resource Name" },
  { label: "Action", type: "text", placeholder: "Action" },
  { label: "Attribute", type: "text", placeholder: "Attribute" },
  { label: "Start Date", type: "date", placeholder: "" },
  { label: "End Date", type: "date", placeholder: "" },
];

const AccessPolicy = () => {
  return (
    <div>
      <Pageheader
        title="Access Policy"
        description="Create/Modify Access Policy"
      />
      <Searchbar data={searchTableData} />
      <CreateNew type="accessPolicy" />
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default AccessPolicy;
