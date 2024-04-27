import { createId } from "@paralleldrive/cuid2";
import { create } from "zustand";

interface User {
  id: string;
  name: string;
  email: string;
  startDate: string;
  endDate: string;
}

interface TableStore {
  users: User[];
  addUser: (newUser: User) => void;
  updateUser: (updatedUser: User) => void;
  setEditingUser: (id: string | null) => void;
  editingUser: string | null;
  updatedUserData: User | null;
  setUpdatedUserData: (data: User) => void;
}

export const useTableStore = create<TableStore>((set) => ({
  users: [
    {
      id: createId(),
      name: "John Doe",
      email: "g@com",
      startDate: "2021-01-01",
      endDate: "2021-01-01",
    },
    {
      id: createId(),
      name: "Jane Doe",
      email: "j@com",
      startDate: "2021-01-01",
      endDate: "2021-01-01",
    },
    {
      id: createId(),
      name: "John Smith",
      email: "s@com",
      startDate: "2021-01-01",
      endDate: "2021-01-01",
    },
    {
      id: createId(),
      name: "Jane Smith",
      email: "js@com",
      startDate: "2021-01-01",
      endDate: "2021-01-01",
    },
  ],
  addUser: (newUser) => set((state) => ({ users: [newUser, ...state.users] })),
  updateUser: (updatedUser) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user,
      ),
    })),
  editingUser: null,
  updatedUserData: null,
  setUpdatedUserData: (data) =>
    set((state) => ({
      updatedUserData: data,
    })),
  setEditingUser: (id) => set((state) => ({ editingUser: id })),
}));
