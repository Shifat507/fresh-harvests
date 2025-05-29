import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Register from "../components/Register";
import ProductDetails from "../components/ProductDetails";
import AboutUs from "../Pages/AboutUs";
import AllProducts from "../components/AllProducts";
import Shop from "../components/Shop";
import Blog from "../components/Blog";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children : [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/productDetails/:id',
          element: <ProductDetails></ProductDetails>,
          loader : ({params}) => fetch(`https://code-commando.com/api/v1/products/${params.id}`)
        },
        {
          path: '/aboutUs',
          element: <AboutUs></AboutUs>
        },
        {
          path: '/shop',
          element: <Shop></Shop>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
        
    ]
  },
]);