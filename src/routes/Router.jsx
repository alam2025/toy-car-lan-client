import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import Category from "../Pages/Category/Category";
import AllToys from "../Pages/ALLToys/AllToys";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import AddToy from "../Pages/AddToy/AddToy";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../Pages/MyToys/MyToys";

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
                  },
                  {
                        path:'register',
                        element:<Register/>
                  },
                  {
                        path:':name',
                        element: <Category/>  
                  },
                  {
                        path:'all-toys',
                        element: <AllToys/>,
                        loader:()=>fetch('http://localhost:3000/toys')
                  },
                  {
                        path:'toy-details/:id',
                        element:<PrivateRoute><ToyDetails/></PrivateRoute>,
                        loader : ({params})=>fetch(`http://localhost:3000/toy/${params.id}`)
                  },
                  {
                        path:'add-toy',
                        element:<PrivateRoute><AddToy/></PrivateRoute>
                  },
                  {
                        path:'my-toys',
                        element:<PrivateRoute><MyToys/></PrivateRoute>,
 
                  }
            ]
      }
])

export default router