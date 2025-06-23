import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/components/layouts/client/MainLayout";
import Product from "@/pages/client/product";
import Productdetail from "@/pages/client/productdetail";
import Home from "@/pages/admin/home";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "san-pham", element: <Product /> },
      { path: "san-pham/:id", element: <Productdetail /> },
    ],
  },
]);
