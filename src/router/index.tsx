import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/components/layouts/client/MainLayout";
import Product from "@/pages/client/product";
import Productdetail from "@/pages/client/productdetail";
import Home from "@/pages/client/home";
import UserSidebar from "@/components/ui/sidebar/UserSidebar";
import CategoryList from "@/components/ui/filter/CategoryList";
import SearchFilter from "@/components/ui/filter/SearchFilter";
import Checkout from "@/pages/client/checkout";
import CartPage from "@/pages/client/cart";
import ProfilePage from "@/pages/client/profile";

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
      { path: "don-hang", element: <Checkout /> },
      { path: "gio-hang", element: <CartPage /> },
      { path: "thong-tin-tai-khoan", element: <ProfilePage /> },

    ],
  },
]);
