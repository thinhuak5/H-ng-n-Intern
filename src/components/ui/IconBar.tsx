import React from "react";

type IconItem = {
    id: number;
    label: string;
    image: string;
    color?: string;
};

export default function IconBar({ icons }: { icons: IconItem[] }) {
    return (
        <div className="flex justify-between items-center bg-white rounded-xl p-4 shadow border border-gray-200 max-w-[1040px] mx-auto">
            {icons.map((icon) => (
                <div key={icon.id} className="flex flex-col items-center w-16 text-center text-xs">
                    <img src={icon.image} alt={icon.label} className="w-10 h-10 mb-1" />
                    <span className={icon.color || ""}>{icon.label}</span>
                </div>
            ))}
        </div>
    );
}
