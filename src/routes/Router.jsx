import { createBrowserRouter, useLoaderData } from "react-router-dom";
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
import UpdateCar from "../Pages/UpdateCar/UpdateCar";
import Blogs from "../Pages/Blogs/Blogs";
import Spinner from "../Pages/Shared/Spinner/Spinner";

const router = createBrowserRouter([
      {
            path: '/',
            element: <MainLayout></MainLayout>,
            errorElement: <ErrorPage />,
            children: [
                  {
                        path: '/',
                        element: <Home />
                  },
                  {
                        path: 'login',
                        element: <Login />
                  },
                  {
                        path: 'register',
                        element: <Register />
                  },
                  {
                        path: ':name',
                        element: <Category />
                  },
                  {
                        path: 'all-toys',
                        element: <AllToys />,
                        loader: () => fetch('https://toy-car-land-server.vercel.app/toys')
                  },
                  {
                        path: 'toy-details/:id',
                        element: <PrivateRoute><ToyDetails /></PrivateRoute>,
                        loader: ({ params }) => fetch(`https://toy-car-land-server.vercel.app/toy/${params.id}`)
                  },
                  {
                        path: 'add-toy',
                        element: <PrivateRoute><AddToy /></PrivateRoute>
                  },
                  {
                        path: 'my-toys',
                        element: <PrivateRoute><MyToys /></PrivateRoute>,
                  },
                  {
                        path: 'update-Car/:id',
                        element: <UpdateCar />,
                        loader: ({ params }) => fetch(`https://toy-car-land-server.vercel.app/toy/${params.id}`)
                  },
                  {
                        path: 'blog',
                        element: <Blogs />
                  }
            ]
      }
])

const RoutedApp = () => {
      const loaderData = useLoaderData();

      if (!loaderData) {
            // Render the spinner if loaderData is not available
            return <Spinner />;
      }

      return router.render(loaderData);
};

export default router