import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Finished } from "./pages/Admin/Finished";
import { Dashboard } from "./pages/Admin/Dashboard";
import { Active } from "./pages/Admin/Active";
import { Maintenance } from "./pages/Admin/Maintenance";
import { PrivateRoute } from "./components/PrivateRotue";
import { Notfound } from "./pages/Notfound";
import { Layout } from "./layout";
export const router = createBrowserRouter([
  {
    element: <Home/>,
    path:"/"
  },
  {
    element: <Signup/>,
    path:"/signup"
  },
  {
    element: <Login/>,
    path: "/login"
  },
  {
    element: <PrivateRoute/>,
    children:[
      {
        element: <Layout/>,
        children:[
          {
            element: <Dashboard/>,
            path:"admin/dashboard"
          },
          {
            element: <Active/>,
            path: "admin/active"
          },
          {
            element: <Maintenance/>,
            path:"admin/maintenance"
          },
          {
            element: <Finished/>,
            path:"admin/finished"
          }
        ]
      }
    ]
  },
  {
    element: <Notfound/>,
    path:"*"
  }
])