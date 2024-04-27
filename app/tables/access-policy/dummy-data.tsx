import { createId } from "@paralleldrive/cuid2";

export const data = [
  {
    id: createId(),
    roleId: "2",
    resourceType: "User",
    resourceName: "John Doe",
    attribute: "Read",
    startDate: "2021-01-01",
    endDate: "2022-01-01",
    active: true,
  },
  {
    id: createId(),
    roleId: "3",
    resourceType: "User",
    resourceName: "Jane Doe",
    attribute: "Write",
    startDate: "2021-02-01",
    endDate: "2022-02-01",
    active: false,
  },
  {
    id: createId(),
    roleId: "1",
    resourceType: "Admin",
    resourceName: "Admin User",
    attribute: "Read/Write",
    startDate: "2021-03-01",
    endDate: "2022-03-01",
    active: true,
  },
  {
    id: createId(),
    roleId: "4",
    resourceType: "Guest",
    resourceName: "Guest User",
    attribute: "Read",
    startDate: "2021-04-01",
    endDate: "2022-04-01",
    active: false,
  },
];
