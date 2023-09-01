import React, { lazy } from "react";

const Documents = lazy(() => import("pages/documents/container"));

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
];
