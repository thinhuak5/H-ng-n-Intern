import React from "react";

const OrderSummary = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm text-sm space-y-2">
      <div className="flex justify-between">
        <span>Tổng tiền hàng</span>
        <span className="font-semibold">241.800₫</span>
      </div>
      <div className="flex justify-between ">
        <span>Giảm giá trực tiếp</span>
        <span>-35.900₫</span>
      </div>
      <hr />
      <div className="flex justify-between text-base font-bold text-red-600">
        <span>Tổng tiền thanh toán</span>
        <span>205.900₫</span>
      </div>
      <p className="text-xs text-green-600">Tiết kiệm 35.900₫</p>
      <p className="text-xs text-gray-500">(Đã bao gồm VAT nếu có)</p>
      <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 mt-2 rounded-md text-sm font-semibold">
        Đặt hàng
      </button>
    </div>
  );
};

export default OrderSummary;
