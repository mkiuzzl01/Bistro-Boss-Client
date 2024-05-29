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
import Update_Menu_Item from "../Pages/Dashboard/Update_Menu_Item/Update_Menu_Item";
import Manage_Items from "../Pages/Dashboard/Manage_Items/Manage_Items";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Payment_History from "../Pages/Dashboard/Payment_History/Payment_History";
import Admin_Home from "../Pages/Dashboard/Admin_Home/Admin_Home";
import User_Home from "../Pages/Dashboard/User_Home/User_Home";

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
      //normal user routes
      {
          path:'User_Home',
          element:<User_Home></User_Home>,
      },
      {
        path: "Cart",
        element: <Cart></Cart>,
      },
      {
        path:"Payment",
        element:<Payment></Payment>
      },
      {
       path:'Payment_History',
       element:<Payment_History></Payment_History>
      },
      //Admin Related Route
      {
        path:'Admin_Home',
        element:<AdminRoute><Admin_Home></Admin_Home></AdminRoute>
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
      {
        path: "Manage_Items",
        element: (
          <AdminRoute>
            <Manage_Items></Manage_Items>
          </AdminRoute>
        ),
      },
      {
        path:"Update_Menu_Item/:id",
        loader:({params})=> fetch(`http://localhost:5000/menu/${params.id}`),
        element: (
          <AdminRoute>
            <Update_Menu_Item></Update_Menu_Item>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
