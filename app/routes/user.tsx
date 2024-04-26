import Pageheader from "@/components/Pageheader";
import Searchbar from "@/components/Searchbar";
import { Button } from "@/components/ui/button";

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
    </div>
  );
};

export default user;
