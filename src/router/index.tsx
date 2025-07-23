import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/components/layouts/client/MainLayout";
import Product from "@/pages/client/product";
import Productdetail from "@/pages/client/productdetail";
import Home from "@/pages/admin/home";
import UserSidebar from "@/components/ui/sidebar/UserSidebar";
import CategoryList from "@/components/ui/filter/CategoryList";
import SearchFilter from "@/components/ui/filter/SearchFilter";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },


      { path: "san-pham", element: <Product /> },
      { path: "san-pham/:id", element: <Productdetail /> },
      { path: "user", element: <UserSidebar /> },
{ path: "danh-muc", element: <CategoryList /> },
{ path: "danh-muc-tiem-kiem", element: <SearchFilter /> },

    ],
  },
]);
