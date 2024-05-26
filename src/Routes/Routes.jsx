import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Our_Shop from "../Pages/Our_Shop/Our_Shop";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import PrivateRoutes from "./PrivateRoutes";
import All_Users from "../Pages/Dashboard/All_Users/All_Users";
import AdminRoute from "./AdminRoute";
import Add_Items from "../Pages/Dashboard/Add_Items/Add_Items";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Menu",
        element: <Menu></Menu>,
      },
      {
        path: "/Shop/:category",
        element: <Our_Shop></Our_Shop>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/Registration",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "/Dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "Cart",
        element: <Cart></Cart>,
      },
      {
        path: "All_Users",
        element: (
          <AdminRoute>
            <All_Users></All_Users>
          </AdminRoute>
        ),
      },
      {
        path: "Add_Items",
        element: (
          <AdminRoute>
            <Add_Items></Add_Items>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
