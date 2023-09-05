import React, { lazy } from "react";

const Documents = lazy(() => import("pages/documents/container"));
const Employee = lazy(() => import("pages/employee/container"));

interface IRoutes {
  id: string;
  path: string;
  element: React.ReactNode;
}

export const ROUTE_LISTS: IRoutes[] = [
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
];
