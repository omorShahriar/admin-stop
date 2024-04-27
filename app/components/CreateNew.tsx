import { PlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useTableStore } from "@/store";
import { createId } from "@paralleldrive/cuid2";

const UserForm = ({
  onChange,
}: {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="username" className="text-right">
          Username
        </Label>
        <Input
          onChange={onChange}
          id="username"
          name="username"
          placeholder="john"
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="email" className="text-right">
          Email Address
        </Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="2gc@xy.co"
          className="col-span-3"
          onChange={onChange}
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="startDate" className="text-right">
          Start Date
        </Label>
        <Input
          id="startDate"
          type="date"
          name="startDate"
          className="col-span-3"
          onChange={onChange}
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="endDate" className="text-right">
          End Date
        </Label>
        <Input
          id="endDate"
          name="endDate"
          type="date"
          className="col-span-3"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

const RoleForm = ({
  onChange,
}: {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="roleName" className="text-right">
          Role Name
        </Label>
        <Input
          id="roleName"
          placeholder="Admin"
          className="col-span-3"
          onChange={onChange}
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="startDate" className="text-right">
          Start Date
        </Label>
        <Input
          id="startDate"
          type="date"
          className="col-span-3"
          onChange={onChange}
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="endDate" className="text-right">
          End Date
        </Label>
        <Input
          id="endDate"
          type="date"
          className="col-span-3"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

const UserRoleForm = ({
  onChange,
}: {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="roleId" className="text-right">
          Role ID
        </Label>
        <Input
          id="roleId"
          placeholder="oczho6gluz40b2tfr2xgfxc5"
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="userid" className="text-right">
          User ID
        </Label>
        <Input
          id="userId"
          placeholder="bj2w2afmxl62cr9e3dvajv6g"
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="startDate" className="text-right">
          Start Date
        </Label>
        <Input id="startDate" type="date" className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="endDate" className="text-right">
          End Date
        </Label>
        <Input id="endDate" type="date" className="col-span-3" />
      </div>
    </div>
  );
};

const AccessPolicyForm = ({
  onChange,
}: {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="resourceType" className="text-right">
          Resource Type
        </Label>
        <Input id="resourceType" placeholder="Admin" className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="resourceName" className="text-right">
          Resource Name
        </Label>
        <Input id="resourceName" placeholder="Admin" className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="attribute" className="text-right">
          Attribute
        </Label>
        <Input id="attribute" placeholder="Admin" className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="startDate" className="text-right">
          Start Date
        </Label>
        <Input id="startDate" type="date" className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="endDate" className="text-right">
          End Date
        </Label>
        <Input id="endDate" type="date" className="col-span-3" />
      </div>
    </div>
  );
};

const CreateNew = ({ type }: { type: string }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const addNewUser = useTableStore((state) => state.addUser);
  let title = "";
  switch (type) {
    case "accessPolicy":
      title = "Access Policy";
      break;
    case "userRoles":
      title = "User-Role";
      break;
    case "roles":
      title = "Role";
      break;
    case "users":
      title = "User";
      break;
    default:
      title = "Create New";
      break;
  }
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const createNewInstance = (type, data) => {
    if (type === "users") {
      const user = {
        id: createId(),
        name: data.username,
        email: data.email,
        startDate: data.startDate,
        endDate: data.endDate,
      };
      addNewUser(user);
    }
    setOpen(false);
  };

  return (
    <div className="mt-8 grid grid-cols-12 gap-4">
      <div className="col-span-3 col-start-10 ">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-sky-100 text-sky-700 shadow hover:bg-sky-100 hover:text-sky-700">
              <div className="flex items-center space-x-1">
                <PlusIcon />
                <span>Create New</span>
              </div>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                createNewInstance(type, formData);
              }}
            >
              <DialogHeader>
                <DialogTitle>Add New {title}</DialogTitle>
              </DialogHeader>
              {type === "users" && <UserForm onChange={handleInputChange} />}
              {type === "roles" && <RoleForm onChange={handleInputChange} />}
              {type === "userRoles" && (
                <UserRoleForm onChange={handleInputChange} />
              )}
              {type === "accessPolicy" && (
                <AccessPolicyForm onChange={handleInputChange} />
              )}
              <DialogFooter>
                <Button
                  type="submit"
                  className="bg-sky-100 text-sky-700 shadow hover:bg-sky-100 hover:text-sky-700"
                >
                  Save changes
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default CreateNew;
