import { createId } from "@paralleldrive/cuid2";

export const data = [
  {
    id: createId(),
    name: "admin",
    startDate: "2021-01-01",
    endDate: "2021-01-01",
  },
  {
    id: createId(),
    name: "user",
    startDate: "2021-01-01",
    endDate: "2021-01-01",
  },
  {
    id: createId(),
    name: "guest",
    startDate: "2021-01-01",
    endDate: "2021-01-01",
  },
  {
    id: createId(),
    name: "superuser",
    startDate: "2021-01-01",
    endDate: "2021-01-01",
  },
];
