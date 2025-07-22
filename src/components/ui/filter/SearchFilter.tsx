import React from "react";
import { FaFilter } from "react-icons/fa";

const SearchFilter = () => {
  return (
    <div>
      <h3 className="font-semibold mb-2 flex items-center gap-1">
        <FaFilter className="w-3 h-3" />
        BỘ LỌC TÌM KIẾM
      </h3>

      <div className="mb-4">
        <p className="font-medium mb-2">Theo danh mục</p>
        <div className="space-y-1 pl-1">
          {["Sách", "Văn phòng phẩm", "Quà lưu niệm"].map((item, index) => (
            <label key={index} className="flex items-center gap-2">
              <input type="checkbox" />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <p className="font-medium mb-2">Thương hiệu</p>
        <div className="space-y-1 pl-1">
          {["Thiên Long", "Casio", "Deli"].map((brand, index) => (
            <label key={index} className="flex items-center gap-2">
              <input type="checkbox" />
              <span>{brand}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="font-medium mb-2">Khoảng giá</p>
        <div className="flex items-center gap-2 mb-4">
          <input
            type="number"
            placeholder="Từ"
            className="w-full border border-gray-300 rounded px-2 py-1"
          />
          <span>-</span>
          <input
            type="number"
            placeholder="Đến"
            className="w-full border border-gray-300 rounded px-2 py-1"
          />
        </div>
        <button className="w-full bg-red-600 text-white py-2 rounded">
          Áp dụng
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
