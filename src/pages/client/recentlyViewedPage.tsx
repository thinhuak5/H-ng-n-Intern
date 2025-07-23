import ProductCard from "@/components/ui/ProductCard";

const mockProducts = Array(18).fill({
  title: "TƯ DUY NGƯỢC - Nguyễn An Dũng",
  image: "https://imgv2-1-f.scribdassets.com/img/document/768474519/original/5a87ef5866/1?v=1",
  price: 5850000,
  discountPercent: 7,
  sold: 100,
  rating: 5,
  showRating: true,
  showDiscountLabel: true,
});

const RecentlyViewedPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <div className="max-w-[90%] mx-auto px-6">
        <nav className="text-sm text-gray-500 mb-4">
          <span className="cursor-pointer hover:underline">Trang chủ</span> &gt;{" "}
          <span className="text-black">Sản phẩm đã xem</span>
        </nav>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Đã xem gần đây</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {mockProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default RecentlyViewedPage;
