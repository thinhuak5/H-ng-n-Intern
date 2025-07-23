import React from "react";
import { FaTruckMoving } from "react-icons/fa6"; 

const VoucherCard = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm text-sm space-y-3">
      <p className="font-medium">Hồng Ẩn Khuyến Mãi</p>
      <div className="border border-blue-500 rounded-lg p-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
            <FaTruckMoving className="w-5 h-5" />
          </div>
          <span className="font-semibold text-blue-600">Giảm 25K</span>
        </div>
        <button className="text-blue-600 text-sm font-medium">Bỏ chọn</button>
      </div>
      <button className="text-blue-600 text-xs">+ Thêm mã khuyến mãi</button>
    </div>
  );
};

export default VoucherCard;
