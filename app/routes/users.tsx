import Pageheader from "@/components/Pageheader";
import Searchbar from "@/components/Searchbar";
import { Button } from "@/components/ui/button";
import { columns } from "@/tables/users/columns";
import { DataTable } from "@/components/ui/data-table";
import { data } from "@/tables/users/dummy-data";
const user = () => {
  return (
    <div className="">
      <Pageheader title="User Info" description="Create/Modify Users" />
      <Searchbar />
      <div className="mt-4 grid grid-cols-12 gap-4">
        <div className="col-span-3 col-start-10 ">
          <Button className="bg-sky-100 text-sky-700 shadow hover:bg-sky-100 hover:text-sky-700">
            Save
          </Button>
        </div>
      </div>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default user;
