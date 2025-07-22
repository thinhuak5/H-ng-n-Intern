import React from "react";
import { FaChevronDown } from "react-icons/fa";

const CategoryList = () => {
  return (
    <div>
      <h3 className="font-semibold mb-2">Khám phá theo danh mục</h3>
      <div className="space-y-2">
        {["English book", "Sách tiếng Việt", "Văn phòng phẩm", "Quà lưu niệm"].map((item, index) => (
          <div key={index} className="flex justify-between items-center border-b pb-1">
            <span>{item}</span>
            <FaChevronDown className="w-3 h-3" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
