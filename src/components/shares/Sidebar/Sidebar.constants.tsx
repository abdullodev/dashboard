import Home from "components/assets/Home";
import Document from "components/assets/Document";
import Profile from "components/assets/Profile";
import Profile2 from "components/assets/Profile2";
import Presention from "components/assets/Presention";
import Logout from "components/assets/Logout";
import Settings from "components/assets/Settings";

interface ISidebarItems {
  icon: any;
  label: string;
}
export const ITEMS: ISidebarItems[] = [
  {
    icon: Home,
    label: "Document",
  },
  {
    icon: Profile2,
    label: "Employees",
  },
  {
    icon: Presention,
    label: "Tasks",
  },
  {
    icon: Profile,
    label: "User info",
  },
  {
    icon: Document,
    label: "User KPI",
  },
];

export const BOTTOMITEMS: ISidebarItems[] = [
  {
    icon: Settings,
    label: "Sozlamalar",
  },
  {
    icon: Logout,
    label: "Chiqish",
  },
];
