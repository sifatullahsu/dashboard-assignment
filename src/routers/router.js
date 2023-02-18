import { createBrowserRouter } from "react-router-dom";
import Course from "../pages/Course";
import Dashboard from "../pages/Dashboard";
import Mentor from "../pages/Mentor";
import DashboardTemp from "../templates/DashboardTemp";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardTemp></DashboardTemp>,
    children: [
      {
        path: '',
        element: <Dashboard></Dashboard>
      },
      {
        path: 'course',
        element: <Course></Course>
      },
      {
        path: 'mentor',
        element: <Mentor></Mentor>
      },
    ]
  }
]);