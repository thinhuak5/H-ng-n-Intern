import React from "react";

const ShippingAddress = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm text-sm space-y-2">
      <div className="flex justify-between items-center font-medium">
        <span>Địa chỉ giao hàng</span>
        <button className="text-blue-500 text-xs">Thay đổi</button>
      </div>
      <div>
        <p className="font-semibold">Hồ Trân | 0912022074</p>
        <p className="text-gray-600">
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full mr-2">
            văn phòng
          </span>
          FPT Polytechnic, Phường Thường Thạnh, Quận Cái Răng, Cần Thơ
        </p>
      </div>
    </div>
  );
};

export default ShippingAddress;
