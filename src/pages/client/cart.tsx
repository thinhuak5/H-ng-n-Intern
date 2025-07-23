import { FiTrash2 } from "react-icons/fi";
import { FaTruckMoving } from "react-icons/fa6";
import VoucherCard from "@/components/ui/VoucherCard";
import OrderSummary from "@/components/ui/OrderSummary";

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      title: "Khi Mọi Điều Không Như Ý",
      price: 80600,
      oldPrice: 109000,
      quantity: 2,
      image:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/363/455/products/khi-moi-dieu-khong-nhu-y-01.jpg?v=1735008882967",
    },
    {
      id: 2,
      title: "Cùng Chơi Với Bé - Xin Chào! - 2023",
      price: 80600,
      oldPrice: 109000,
      quantity: 1,
      image:
        "https://product.hstatic.net/200000343865/product/cung-choi-voi-be_xin-chao_tb-2023_d0017afcabbe4acf8b59d752ff0656cd_large.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-6 text-sm">
      <div className="max-w-[90%] mx-auto">
        <div className="text-gray-500 mb-4">
          <span className="text-gray-400">Trang chủ</span> &gt;{" "}
          <span className="font-medium text-gray-600">Giỏ hàng</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm text-sm">
              <div className="flex items-center border-b pb-2 mb-2 font-medium text-gray-700">
                <input type="checkbox" className="mr-2 accent-blue-500" defaultChecked />
                <span>Tất cả ({cartItems.length} sản phẩm)</span>
                <div className="ml-auto grid grid-cols-3 w-[300px] text-center text-xs text-gray-400">
                  <span>Đơn giá</span>
                  <span>Số lượng</span>
                  <span>Thành tiền</span>
                </div>
              </div>

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center border-b py-3 last:border-b-0"
                >
                  <input type="checkbox" className="mr-2 accent-blue-500" defaultChecked />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-14 h-20 object-cover rounded"
                  />
                  <div className="ml-3 flex-1">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-xs text-gray-400">Có thể bọc bằng Bookcare</p>
                  </div>
                  <div className="grid grid-cols-3 w-[300px] text-center text-sm items-center">
                    <div>
                      <span className="text-red-500 font-semibold">
                        {item.price.toLocaleString()}₫
                      </span>
                      <br />
                      <span className="line-through text-gray-400 text-xs">
                        {item.oldPrice.toLocaleString()}₫
                      </span>
                    </div>
                    <div>
                      <div className="border rounded w-fit mx-auto flex items-center px-2 py-0.5">
                        <button className="text-lg font-bold px-1">-</button>
                        <span className="px-2">{item.quantity}</span>
                        <button className="text-lg font-bold px-1">+</button>
                      </div>
                    </div>
                    <div className="text-red-500 font-medium">
                      {(item.price * item.quantity).toLocaleString()}₫
                    </div>
                  </div>
                  <FiTrash2 className="text-gray-400 ml-3 cursor-pointer" />
                </div>
              ))}

              <div className="text-green-600 text-sm mt-4 flex items-center space-x-2">
                <FaTruckMoving className="w-4 h-4" />
                <span>Freeship 10k đơn từ 45k, Freeship 25k đơn từ 100k</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <VoucherCard />
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
