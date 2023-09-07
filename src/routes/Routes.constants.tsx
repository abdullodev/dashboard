import React, { lazy } from "react";

const Documents = lazy(() => import("pages/documents/container"));
const Employee = lazy(() => import("pages/employee/container"));
const Tasks = lazy(() => import("pages/tasks/container"));
const User = lazy(() => import("pages/user/container"));
const UserKpi = lazy(() => import("pages/userKpi/container"));
const Notfound = lazy(() => import("pages/notfound/Notfound"));

interface IRoutes {
  id: string;
  path: string;
  element: React.ReactNode;
}

export const ROUTE_LISTS: IRoutes[] = [
  {
    id: "notfound",
    path: "*",
    element: <Notfound />,
  },
  {
    id: "documents",
    path: "/document",
    element: <Documents />,
  },
  {
    id: "employee",
    path: "/employee",
    element: <Employee />,
  },
  {
    id: "tasks",
    path: "/tasks",
    element: <Tasks />,
  },
  {
    id: "user-kpi",
    path: "/user-info",
    element: <User />,
  },
  {
    id: "user-kpi",
    path: "/user-kpi",
    element: <UserKpi />,
  },
];
