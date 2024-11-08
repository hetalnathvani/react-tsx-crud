import { createBrowserRouter } from "react-router-dom";
import { EmployeeList } from "../view/employee";
import { ProjectList } from "../view/projects";
import Layout from "../components/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "employees",
        element: <EmployeeList />,
      },
      {
        path: "projects",
        element: <ProjectList />,
      },
    ],
  },
]);
