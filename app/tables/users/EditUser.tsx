import { Button } from "@/components/ui/button";
import { useTableStore } from "@/store";
import { CheckCircle2Icon, ClipboardPenLineIcon } from "lucide-react";

const EditUser = ({ id }: { id: string }) => {
  const isEditing = useTableStore((state) => state.editingUser);
  const setEditingUser = useTableStore((state) => state.setEditingUser);
  const updatedUserData = useTableStore((state) => state.updatedUserData);
  const updateUser = useTableStore((state) => state.updateUser);

  const updateUserData = () => {
    // Update user data here
    if (updatedUserData) {
      updateUser(updatedUserData);
      setEditingUser(null);
      return;
    } else {
      alert("No data updated");
    }
  };

  return (
    <>
      {isEditing !== id ? (
        <Button variant="ghost" size="icon" onClick={() => setEditingUser(id)}>
          <ClipboardPenLineIcon className="text-sky-500" />
        </Button>
      ) : (
        <Button variant="ghost" size="icon" onClick={updateUserData}>
          <CheckCircle2Icon className="text-green-500" />
        </Button>
      )}
    </>
  );
};

export default EditUser;
