import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import DashboardTemp from "../templates/DashboardTemp";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardTemp></DashboardTemp>,
    children: [
      {
        path: '',
        element: <Dashboard></Dashboard>
      }
    ]
  }
]);