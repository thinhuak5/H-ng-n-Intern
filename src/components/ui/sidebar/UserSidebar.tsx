import React from "react";
import {
  FaUser,
  FaMapMarkerAlt,
  FaEye,
  FaTicketAlt
} from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";

const UserSidebar = () => {
  return (
    <div className="w-64 p-4 bg-gray-100">
      <div className="flex flex-col items-start gap-1 mb-6">
        <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center text-white text-xl">
          <FaUser />
        </div>
        <div className="mt-2 font-semibold">Nguyễn Văn A</div>
        <div className="text-sm text-gray-700">user@gmail.com</div>
      </div>

      <div className="flex flex-col gap-4 text-sm text-black">
        <div className="flex items-center gap-2">
          <FaUser className="w-4 h-4" />
          <span>Thông tin tài khoản</span>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineShoppingBag className="w-4 h-4" />
          <span>Quản lý đơn hàng</span>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="w-4 h-4" />
          <span>Sổ địa chỉ</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEye className="w-4 h-4" />
          <span>Sản phẩm đã xem</span>
        </div>
        <div className="flex items-center gap-2">
          <FaTicketAlt className="w-4 h-4" />
          <span>Kho voucher</span>
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;
