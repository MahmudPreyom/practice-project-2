import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage";
import Home from "../components/home/Home";
import About from "../components/home/about/About";
import Blog from "../components/home/blog/Blog";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    // errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "Home",
    //   }
    // ]
  }
]);