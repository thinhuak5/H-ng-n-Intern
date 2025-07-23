import React from "react";

type ProductCardProps = {
  title: string;
  image: string;
  price?: number;
  discountPercent?: number;
  sold?: number;
  rating?: number;
  showProgressBar?: boolean;
  showRating?: boolean;
  showDiscountLabel?: boolean; // 👈 thêm prop mới
  noBorder?: boolean;

};

const ProductCard = ({
                       title,
                       image,
                       price,
                       discountPercent,
                       sold,
                       rating,
                       showProgressBar = false,
                       showRating = false,
                       showDiscountLabel = false, // 👈 mặc định không hiển thị
                     }: ProductCardProps) => {
  const discountedPrice =
      price && discountPercent
          ? Math.round(price * (1 - discountPercent / 100))
          : price;

  return (
      <div className="flex flex-col w-[160px] gap-2 border border-gray-200 p-2 rounded shadow-sm bg-white hover:shadow-md transition">
        <div className="relative w-full h-[200px]">
          <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded"
          />

          {/* ✅ Chỉ hiển thị nếu được yêu cầu */}
          {showDiscountLabel && discountPercent && (
              <span className="absolute top-1 left-1 bg-red-100 text-red-600 text-xs px-1.5 py-[2px] rounded backdrop-blur-sm bg-opacity-80">
    -{discountPercent}%
  </span>
          )}

        </div>

        <p className="text-sm font-medium line-clamp-2 h-[40px]">{title}</p>

        {price && (
            <div className="text-base text-red-600 font-bold">
              {discountedPrice?.toLocaleString("vi-VN")}₫
            </div>
        )}

        {showProgressBar && (
            <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
              <div className="h-2 bg-pink-300 rounded-full w-[50%]"></div>
            </div>
        )}

        {showRating && (
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex gap-[1px]">
                {Array(5)
                    .fill(0)
                    .map((_, i) => (
                        <span
                            key={i}
                            className={i < (rating ?? 0) ? "text-yellow-400" : "text-gray-300"}
                        >
                  ★
                </span>
                    ))}
              </div>
              <span>Đã bán {sold ?? 0}</span>
            </div>
        )}
      </div>
  );
};

export default ProductCard;
