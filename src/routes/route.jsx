import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ProductCards from "../components/ProductCards";

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
                        loader: () => fetch(`/product.json`)
                    },
                    {
                        path: '/category/:category',
                        element: <ProductCards />,
                        loader: () => fetch(`/product.json`)
                    }
                ]
            }
        ]
    }
]);

export default router