import React from "react";
import TabbedContent from "@/components/ui/TabbedContent";
import UserSidebar from "@/components/ui/sidebar/UserSidebar";

const OrderPage = () => {
  const orderTabs = [
    { label: "Tất cả đơn", key: "all" },
    { label: "Chờ thanh toán", key: "pending" },
    { label: "Đang xử lý", key: "processing" },
    { label: "Đang vận chuyển", key: "shipping" },
    { label: "Đã giao", key: "delivered" },
    { label: "Đã hủy", key: "cancelled" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
        <div className="ml-[100px]">
        <UserSidebar />
      </div>
      <div className="flex-1 p-6">
        <h1 className="text-xl font-semibold mb-4">Thông tin đơn hàng</h1>
        <TabbedContent
          tabs={orderTabs}
          emptyImage="/images/empty-order.png" // đường dẫn ảnh rỗng (như ảnh bạn up)
          emptyText="Chưa có đơn hàng nào"
        />
      </div>
    </div>
  );
};

export default OrderPage;
