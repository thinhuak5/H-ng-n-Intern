import React, { useRef, useState, useEffect } from "react";
import ProductCard from "@/components/ui/ProductCard";
import IconBar from "@/components/ui/IconBar";


export default function HomePage() {
  // Scroll logic Flash Sale
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const [showLeft1, setShowLeft1] = useState(false);
  const [showRight1, setShowRight1] = useState(true);

  const handleScroll1 = () => {
    if (!scrollRef1.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef1.current;
    setShowLeft1(scrollLeft > 0);
    setShowRight1(scrollLeft + clientWidth < scrollWidth - 5);
  };

  // Scroll logic Tủ sách nổi bật
  const scrollRef2 = useRef<HTMLDivElement>(null);
  const [showLeft2, setShowLeft2] = useState(false);
  const [showRight2, setShowRight2] = useState(true);

  const handleScroll2 = () => {
    if (!scrollRef2.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef2.current;
    setShowLeft2(scrollLeft > 0);
    setShowRight2(scrollLeft + clientWidth < scrollWidth - 5);
  };

  const scrollByAmount = 300;

  const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollBy({ left: scrollByAmount, behavior: "smooth" });
  };

  useEffect(() => {
    handleScroll1();
    handleScroll2();
  }, []);

  // ======================== Dữ liệu ======================== //
  const flashSale = [
    { id: 1, title: "Đầu tư từ đâu?", image: "/images/product/flash1.png", price: 180000, discountPercent: 51 },
    { id: 2, title: "Chữa lành nỗi đau", image: "/images/product/flash2.png", price: 180000, discountPercent: 51 },
    { id: 3, title: "Nguyên lý Marketing", image: "/images/product/flash3.png", price: 180000, discountPercent: 51 },
    { id: 4, title: "Ta tư duy ta tồn tại", image: "/images/product/flash4.png", price: 180000, discountPercent: 51 },
    { id: 5, title: "Bố già", image: "/images/product/flash5.png", price: 180000, discountPercent: 51 },
    { id: 6, title: "Kẻ trộm sách", image: "/images/product/flash6.png", price: 180000, discountPercent: 51 },
    { id: 7, title: "Dấn thân", image: "/images/product/flash7.png", price: 180000, discountPercent: 51 },
    { id: 8, title: "Đầu tư từ đâu?", image: "/images/product/flash1.png", price: 180000, discountPercent: 51,},
    { id: 9, title: "Chữa lành nỗi đau", image: "/images/product/flash2.png", price: 180000, discountPercent: 51,},
    { id: 10, title: "Nguyên lý Marketing", image: "/images/product/flash3.png", price: 180000, discountPercent: 51,}
  ];

  const featuredBooks = [
    { id: 1, title: "Ôn thi THPT", image: "/images/product/book1.png" },
    { id: 2, title: "Kinh dị - Bí ẩn", image: "/images/product/book2.png" },
    { id: 3, title: "Tô màu cảm xúc", image: "/images/product/book3.png" },
    { id: 4, title: "Văn học Việt Nam", image: "/images/product/book4.png" },
    { id: 5, title: "Nguyễn Nhật Ánh", image: "/images/product/book5.png" },
    { id: 6, title: "Trinh thám cổ điển", image: "/images/product/book6.png" },
    { id: 7, title: "Sách thiếu nhi", image: "/images/product/book7.png" },
  ];

  const iconData = [
    { id: 1, label: "TOP DEAL", image: "/images/icon/icon1.png", color: "text-red-500" },
    { id: 2, label: "Flash Sale", image: "/images/icon/icon2.png" },
    { id: 3, label: "Coupon siêu hot", image: "/images/icon/icon3.png" },
    { id: 4, label: "Xả kho giảm nửa giá", image: "/images/icon/icon4.png" },
    { id: 5, label: "Rẻ chấn động", image: "/images/icon/icon5.png" },
    { id: 6, label: "Sản phẩm mới", image: "/images/icon/icon6.png" },
    { id: 7, label: "Hạ nhiệt thần tốc", image: "/images/icon/icon7.png" },
    { id: 8, label: "Đón đầu xu hướng", image: "/images/icon/icon8.png" },
    { id: 9, label: "Minh Long", image: "/images/icon/icon9.png" },
    { id: 10, label: "Alpha Books", image: "/images/icon/icon10.png" },
  ];

  const productList = [
    { id: 1, title: "TƯ DUY NGƯỢC - Nguyễn An Dũng", image: "/images/product/product1.png", price: 5850000, discountPercent: 7, rating: 4, sold: 100 },
    { id: 2, title: "Khi Mọi Điều Không Như Ý - Haemin", image: "/images/product/product2.png", price: 68000, discountPercent: 12, rating: 4, sold: 80 },
    { id: 3, title: "ChatGPT thực chiến", image: "/images/product/product3.png", price: 145000, discountPercent: 10, rating: 4, sold: 80 },
    { id: 4, title: "Đắc nhân tâm", image: "/images/product/product4.png", price: 100000, discountPercent: 15, rating: 5, sold: 120 },
    { id: 5, title: "Tâm lý học tội phạm", image: "/images/product/product5.png", price: 110000, discountPercent: 9, rating: 4, sold: 60 },
    { id: 6, title: "Tư duy nhanh và chậm", image: "/images/product/product6.png", price: 140000, discountPercent: 5, rating: 5, sold: 200 },
  ];

  return (
      <div className="p-4">
        <div className="space-y-10 max-w-[1040px] ml-auto">
          {/* IconBar */}
          <div className="w-full">
            <IconBar icons={iconData} />
          </div>

          {/* Flash Sale */}
          <div className="rounded-xl p-4 bg-gray-50 border border-gray-200 w-full">
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-xl font-bold">Flash Sale</h2>
              <span className="text-red-500 font-semibold">02:12:22</span>
            </div>

            <div className="relative">
              {showLeft1 && (
                  <button
                      onClick={() => scrollLeft(scrollRef1)}
                      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow px-2 py-1 rounded-full text-red-500"
                  >
                    &lt;
                  </button>
              )}
              {showRight1 && (
                  <button
                      onClick={() => scrollRight(scrollRef1)}
                      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow px-2 py-1 rounded-full text-red-500"
                  >
                    &gt;
                  </button>
              )}

              <div
                  ref={scrollRef1}
                  onScroll={handleScroll1}
                  className="overflow-x-auto scroll-smooth"
              >
                <div className="flex gap-4 w-max flex-row-reverse">
                  {flashSale.map((p) => (
                      <ProductCard
                          key={p.id}
                          title={p.title}
                          image={p.image}
                          price={p.price}
                          discountPercent={p.discountPercent}
                          showProgressBar
                          showDiscountLabel
                      />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tủ sách nổi bật */}
          <div className="rounded-xl p-4 bg-pink-50 border border-pink-200 w-full">
            <h2 className="text-xl font-bold mb-3">Tủ sách nổi bật</h2>
            <div className="relative">
              {showLeft2 && (
                  <button
                      onClick={() => scrollLeft(scrollRef2)}
                      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow px-2 py-1 rounded-full text-red-500"
                  >
                    &lt;
                  </button>
              )}
              {showRight2 && (
                  <button
                      onClick={() => scrollRight(scrollRef2)}
                      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow px-2 py-1 rounded-full text-red-500"
                  >
                    &gt;
                  </button>
              )}

              <div
                  ref={scrollRef2}
                  onScroll={handleScroll2}
                  className="overflow-x-auto scroll-smooth"
              >
                <div className="flex gap-4 w-max flex-row-reverse">
                  {featuredBooks.map((p) => (
                      <ProductCard key={p.id} title={p.title} image={p.image} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sản phẩm nổi bật */}
          <div className="w-full">
            <h2 className="text-xl font-bold mb-3">Sản phẩm nổi bật</h2>
            <div className="flex flex-row-reverse flex-wrap gap-4 justify-end">
              {productList.map((p) => (
                  <ProductCard
                      key={p.id}
                      title={p.title}
                      image={p.image}
                      price={p.price}
                      discountPercent={p.discountPercent}
                      rating={p.rating}
                      sold={p.sold}
                      showRating
                  />
              ))}
            </div>
          </div>
        </div>
      </div>
  );

}
