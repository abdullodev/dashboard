import Home from "components/assets/Home";
import Document from "components/assets/Document";
import Profile from "components/assets/Profile";
import Profile2 from "components/assets/Profile2";
import Presention from "components/assets/Presention";
import Logout from "components/assets/Logout";
import Settings from "components/assets/Settings";

interface ISidebarItems {
  icon: any;
  path: string;
  label: string;
}
export const ITEMS: ISidebarItems[] = [
  {
    icon: Home,
    path: "/document",
    label: "Document",
  },
  {
    icon: Profile2,
    path: "/employee",
    label: "Employees",
  },
  {
    icon: Presention,
    path: "/tasks",
    label: "Tasks",
  },
  {
    icon: Profile,
    path: "/user-info",
    label: "User info",
  },
  {
    icon: Document,
    path: "/user-kpi",
    label: "User KPI",
  },
];

export const BOTTOMITEMS: ISidebarItems[] = [
  {
    icon: Settings,
    path: "/settings",
    label: "Sozlamalar",
  },
  {
    icon: Logout,
    path: "/logout",
    label: "Chiqish",
  },
];
