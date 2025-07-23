import React from "react";
import UserSidebar from "@/components/ui/sidebar/UserSidebar";
import { FaCheckCircle } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const addresses = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    address: "Phường Lê Bình, Quận Cái Răng, Cần Thơ",
    phone: "0999999999",
    isDefault: true,
  },
  {
    id: 2,
    name: "Nguyễn Văn A",
    address: "Phường Lê Bình, Quận Cái Răng, Cần Thơ",
    phone: "0999999999",
    isDefault: false,
  },
];

const AddressPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6 text-sm">
      <div className="max-w-[90%] mx-auto">
        <div className="text-gray-500 mb-4">
          <span className="text-gray-400">Trang chủ </span> &gt;{" "}
          <span className="font-medium text-gray-600">Sổ địa chỉ</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <UserSidebar />
          </div>
          <div className="lg:col-span-3 space-y-6">
            <h2 className="font-semibold text-base text-black mb-4">
              Sổ địa chỉ
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="border border-dashed border-gray-300 rounded-md py-4 px-4 flex items-center justify-center cursor-pointer hover:bg-gray-50">
                <button className="text-blue-500 flex items-center gap-2 text-sm font-medium">
                  <span className="text-xl leading-none">+</span> Thêm địa chỉ
                  mới
                </button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
              {addresses.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-lg p-4 flex justify-between items-start"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-black">
                        {item.name}
                      </span>
                      {item.isDefault && (
                        <span className="text-green-600 text-sm flex items-center gap-1">
                          <FaCheckCircle className="text-xs" />
                          <span>Địa chỉ mặc định</span>
                        </span>
                      )}
                    </div>
                    <div className="text-gray-500 text-sm mt-1">
                      Địa chỉ: {item.address}
                    </div>
                    <div className="text-gray-500 text-sm">
                      Điện thoại: {item.phone}
                    </div>
                  </div>
                  <div className="text-gray-500 hover:text-black cursor-pointer pl-2 pt-1">
                    <BsThreeDotsVertical />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressPage;
