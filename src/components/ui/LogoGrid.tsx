import React from "react";

type LogoItem = {
  id: number;
  image: string;
};

export default function LogoGrid({ logos }: { logos: LogoItem[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 bg-white p-6 rounded-xl shadow border border-gray-200 max-w-[1040px] mx-auto">
      {logos.map((logo) => (
        <div
          key={logo.id}
          className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex items-center justify-center"
        >
          <img
            src={logo.image}
            alt={`Logo ${logo.id}`}
            className="w-32 h-32 object-contain"
          />
        </div>
      ))}
    </div>
  );
}
