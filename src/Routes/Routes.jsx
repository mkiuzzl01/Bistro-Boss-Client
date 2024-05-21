import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Our_Shop from "../Pages/Our_Shop/Our_Shop";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/Menu',
          element:<Menu></Menu>
        },
        {
          path:'/Shop/:category',
          element:<Our_Shop></Our_Shop>
        },
        {
          path:'/Login',
          element:<Login></Login>
        }
    ]
  },
]);

export default router;