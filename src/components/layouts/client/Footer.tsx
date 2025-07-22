import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";

const FooterClient: React.FC = () => {
  return (
    <footer className="w-full bg-white text-black">
      {/* Form đăng ký nhận tin */}
      <div className="max-w-[90%] mx-auto mt-8 px-4">
        <div className="bg-black text-white py-10 px-6 md:px-20 rounded-3xl">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
            {/* Text bên trái */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-semibold mb-2">
                Đăng ký để nhận được thông báo <br /> về sản phẩm mới từ Hồng Ân
              </h2>
              <p className="text-sm md:text-base">
                Giảm giá 20% cho đơn hàng đầu tiên của bạn chỉ bằng cách đăng ký
                nhận bản tin của chúng tôi
              </p>
            </div>
            {/* Form bên phải */}
            <div className="md:w-1/2 flex justify-center md:justify-end w-full">
              <div className="flex border border-white rounded-full p-1 w-full md:w-[80%]">
                <div className="flex items-center px-5 py-3 flex-grow">
                  <MdOutlineMailOutline className="mr-2 text-xl text-white" />
                  <input
                    type="email"
                    placeholder="Nhập email của bạn"
                    className="bg-transparent outline-none text-white placeholder-white w-full text-sm"
                  />
                </div>
                <button className="bg-white text-black px-4 text-sm font-semibold hover:bg-gray-200 rounded-full">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phần chính của footer */}
      <div className="max-w-[90%] mx-auto py-10 px-4 grid grid-cols-2 md:grid-cols-5 gap-10 text-sm">
        <div className="col-span-2 md:col-span-1 text-center md:text-left">
          <h1 className="text-3xl mb-4">
            <span className="font-bold text-black italic">H</span>
            <span className="text-gray-600">ồng Ân</span>
          </h1>
          <p className="text-gray-600 text-xs">
            Serving both practical & navigational purposes, a typical website
            footer includes elements such as copyright notices, privacy
            policies, terms of service, and contact details.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4 text-lg text-black">
            <FaFacebook className="cursor-pointer" />
            <FiTwitter className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaGoogle className="cursor-pointer" />
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Danh mục</h3>
          <ul className="space-y-1">
            <li>Sách mới</li>
            <li>Đồ chơi</li>
            <li>Trang trí</li>
            <li>Phụ kiện</li>
            <li>Dụng cụ học tập</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Danh mục</h3>
          <ul className="space-y-1">
            <li>Chính sách đổi trả</li>
            <li>Chính sách hoàn tiền</li>
            <li>Chính sách thanh toán</li>
            <li>Chính sách mua hàng</li>
            <li>Chính sách cửa hàng</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Cửa hàng</h3>
          <ul className="space-y-1">
            <li>Trang chủ</li>
            <li>Sản phẩm</li>
            <li>Giới thiệu</li>
            <li>Liên hệ</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Liên hệ chúng tôi</h3>
          <div className="flex items-center gap-2">
            <LuPhoneCall /> <span>+84 909988777</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <MdOutlineMailOutline /> <span>support@golden.vn</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs py-4 border-t border-gray-300">
        @Copyright Golden Bee IT Solution
      </div>
    </footer>
  );
};

export default FooterClient;
