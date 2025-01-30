import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ProductCards from "../components/ProductCards";
import ProductDetails from "../layouts/ProductDetails";
import DashBoard from "../pages/DashBoard";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch(`/category.json`),
                children: [
                    {
                        path: '/',
                        element: <ProductCards />,
                        loader: () => fetch(`../product.json`)
                    },
                    {
                        path: '/category/:category',
                        element: <ProductCards />,
                        loader: () => fetch(`../product.json`)
                    }
                ]
            },
            {
                path: '/:name/:productId',
                element: <ProductDetails />,
                loader: () => fetch(`../product.json`),
            },
            {
                path: '/dashboard/',
                element: <DashBoard />,
                children:[
                    {
                        index:true,
                        element : <Navigate to='/dashboard/cart' replace/>,
                    },
                    {
                        path:'/dashboard/cart',
                        element : <Cart />,
                        loader: () => fetch(`../product.json`)
                    },
                    
                    {
                        path:'/dashboard/wishlist',
                        element : <Wishlist />,
                        loader: () => fetch(`../product.json`)
                    },
                ]
            }

        ],
    },

]);

export default router