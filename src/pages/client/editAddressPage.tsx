import React from "react";
import UserSidebar from "@/components/ui/sidebar/UserSidebar";
import AddressForm from "../../components/ui/AddressForm ";

const EditAddressPage = () => {
  const addressData = {
    id: 1,
    name: "Nguyễn Văn A",
    phone: "0999999999",
    city: "Cần Thơ",
    district: "Quận Cái Răng",
    ward: "Phường Lê Bình",
    address: "132a",
    type: "Nhà riêng",
    isDefault: false,
  };

  return (
    <div className="bg-[#F6F7FB] min-h-screen p-6 text-sm">
      <div className="max-w-[90%] mx-auto">
        {/* Breadcrumb */}
        <div className="text-gray-500 mb-4">
          <span className="text-gray-400">Trang chủ</span> &nbsp;&gt;&nbsp;
          <span className="text-gray-400">Sổ địa chỉ</span> &nbsp;&gt;&nbsp;
          <span className="font-medium text-gray-600">Chỉnh sửa địa chỉ</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <UserSidebar />
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-lg font-semibold mb-6">Chỉnh sửa địa chỉ</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm mx-auto w-[90%]">
              <AddressForm initialData={addressData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAddressPage;
