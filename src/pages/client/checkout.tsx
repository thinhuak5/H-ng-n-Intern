import OrderSummary from "@/components/ui/OrderSummary";
import ShippingAddress from "@/components/ui/ShippingAddress";
import VoucherCard from "@/components/ui/VoucherCard";

const Checkout = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-6 text-sm">
      <div className="max-w-[90%] mx-auto">
        <div className="text-gray-500 mb-4">
          <span className="text-gray-400">Trang chủ</span> &gt;{" "}
          <span className="font-medium text-gray-600">Thanh toán</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="font-semibold text-base mb-3">Sản phẩm</h2>
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-start border-b py-3 last:border-b-0"
                >
                  <img
                    src="https://salt.tikicdn.com/cache/280x280/ts/product/17/aa/95/0c8cf2ec9eb8a99adac9e24fe5672ac5.jpg"
                    alt="product"
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div className="ml-4 flex-1">
                    <p className="font-medium leading-tight">
                      MoFii Kitty Cat Mixed – Bộ combo bàn phím giả cơ và chuột
                      không dây Geezer dùng cho Máy tính bàn, Laptop, Tivi,
                      Tablet
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      Phân loại: màu hồng
                    </p>
                    <p className="text-gray-500 text-xs">Số lượng x1</p>
                    <div className="flex items-center mt-1 space-x-2">
                      <span className="line-through text-gray-400 text-sm">
                        450.000₫
                      </span>
                      <span className="text-red-500 font-semibold text-sm">
                        440.000₫
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="font-semibold text-base mb-3">
                Phương thức thanh toán
              </h2>
              <div className="space-y-3">
                {[
                  "Thanh toán tiền mặt",
                  "Ví Momo",
                  "VNPAY",
                  "VNPAY QR",
                  "Thẻ tín dụng, ghi nợ",
                ].map((method, index) => (
                  <label key={index} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="payment"
                      className="accent-blue-500"
                    />
                    <span>{method}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <ShippingAddress />
            <VoucherCard />
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
