import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";

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
        }
    ]
  },
]);

export default router;