import React from "react";

type IconItem = {
  id: number;
  label: string;
  image: string;
  color?: string;
  active?: boolean; // Thêm field để xác định item được chọn
};

export default function IconBar({ icons }: { icons: IconItem[] }) {
  return (
    <div className="flex justify-between items-center bg-white rounded-xl p-4 shadow border border-gray-200 max-w-[1040px] mx-auto">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className={`flex flex-col items-center w-16 text-center text-xs rounded-md p-2 transition-colors
            ${icon.active ? "bg-blue-150" : "hover:bg-blue-100"}
          `}
        >
          <img src={icon.image} alt={icon.label} className="w-10 h-10 mb-1" />
          <span
            className={`${
              icon.active ? "text-blue-600 font-medium" : "text-gray-600"
            }`}
          >
            {icon.label}
          </span>
        </div>
      ))}
    </div>
  );
}
