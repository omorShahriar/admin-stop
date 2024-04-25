import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "AdminStop" },
    { name: "description", content: "Welcome to Admin Stop!" },
  ];
};

export default function Index() {
  return <div></div>;
}
