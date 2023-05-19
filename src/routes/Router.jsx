import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login/Login";

const router= createBrowserRouter([
      {
            path:'/',
            element:<MainLayout></MainLayout>,
            errorElement:<ErrorPage/>,
            children:[
                  {
                        path:'/',
                        element:<Home/>
                  },
                  {
                        path:'login',
                        element:<Login/>
                  }
            ]
      }
])

export default router