import { cn } from "@/lib/utils";
import { NavLink } from "@remix-run/react";
import {
  CalendarDaysIcon,
  CircleIcon,
  LayoutDashboardIcon,
  MailIcon,
  SendIcon,
  UsersRoundIcon,
} from "lucide-react";

const navlinks: {
  name: string;
  href: string;
  icon: JSX.Element;
}[] = [
  { name: "Dashboard", href: "/", icon: <LayoutDashboardIcon /> },
  { name: "User Info", href: "/users", icon: <MailIcon /> },
  { name: "Roles", href: "/roles", icon: <UsersRoundIcon /> },
  { name: "User Roles", href: "/user-roles", icon: <CalendarDaysIcon /> },
  { name: "Access Policy", href: "/access-policy", icon: <SendIcon /> },
];

const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" min-h-screen w-full bg-slate-100">
      <div className="fixed left-0 top-0 z-40 flex w-full items-center justify-between bg-sky-700/90 p-8">
        <div className="flex items-center space-x-6">
          <div className="flex items-center gap-1">
            <CircleIcon size={10} fill="#fff" stroke="transparent" />
            <CircleIcon size={10} fill="#fff" stroke="transparent" />
          </div>
          <p className="text-xl font-bold uppercase text-white">ADMIN UI</p>
        </div>
      </div>
      <div className="flex">
        <div className="sticky left-0 top-0 z-30 h-screen pl-2 pr-6 pt-[var(--topbar-height)] shadow">
          {navlinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                cn("flex items-center space-x-4 rounded-md p-4", {
                  "bg-sky-200": isActive,
                })
              }
            >
              <span className="text-slate-400">{link.icon}</span>

              <span>{link.name}</span>
            </NavLink>
          ))}
        </div>
        <div className="min-h-screen flex-1 pl-6 pt-[var(--topbar-height)] ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
