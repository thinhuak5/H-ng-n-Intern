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
import AddressPage from "@/pages/client/address";
import ChangePassword from "@/pages/client/changePassword";
import AddAddressPage from "@/pages/client/AddAddressForm ";
import EditAddressPage from "@/pages/client/editAddressPage";
import VoucherPage from "@/pages/client/VoucherPage";


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
      { path: "dia-chi", element: <AddressPage /> },
      { path: "doi-mat-khau", element: <ChangePassword /> },
      { path: "them-dia-chi", element: <AddAddressPage /> },
      { path: "sua-dia-chi", element: <EditAddressPage /> },
      { path: "khuyen-mai", element: <VoucherPage /> },
    ],
  },
]);
