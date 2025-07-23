import UserSidebar from "@/components/ui/sidebar/UserSidebar";
import {
  FaPhone,
  FaEnvelope,
  FaLock,
  FaUserCircle,
  FaPen,
} from "react-icons/fa";

const ProfilePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6 text-sm">
      <div className="max-w-[90%] mx-auto">
        <div className="text-gray-500 mb-4">
          <span className="text-gray-400">Trang chủ </span> &gt;{" "}
          <span className="font-medium text-gray-600">Thông tin tài khoản</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <UserSidebar />
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="md:col-span-2 space-y-4">
                  <h2 className="font-semibold text-base mb-2">
                    Thông tin tài khoản
                  </h2>

                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full border-2 border-red-500 flex items-center justify-center text-blue-500 bg-white text-5xl">
                        <FaUserCircle />
                      </div>
                      <button className="absolute bottom-0 right-0 bg-black rounded-full p-1 text-white text-xs border-2 border-white">
                        <FaPen size={10} />
                      </button>
                    </div>

                    <div className="space-y-3 flex-1">
                      <div>
                        <label className="block mb-1 font-medium">
                          Họ và tên
                        </label>
                        <input
                          type="text"
                          defaultValue="Nguyễn Văn A"
                          className="w-full border rounded px-3 py-2 outline-none focus:ring focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block mb-1 font-medium">
                          Ngày sinh
                        </label>
                        <input
                          type="date"
                          className="w-full border rounded px-3 py-2 outline-none focus:ring focus:border-blue-500"
                        />
                      </div>

                      <div className="flex items-center gap-4">
                        <label className="font-medium">Giới tính</label>
                        <label className="flex items-center gap-1">
                          <input
                            type="radio"
                            name="gender"
                            className="accent-red-500"
                          />{" "}
                          Nam
                        </label>
                        <label className="flex items-center gap-1">
                          <input
                            type="radio"
                            name="gender"
                            className="accent-red-500"
                          />{" "}
                          Nữ
                        </label>
                        <label className="flex items-center gap-1">
                          <input
                            type="radio"
                            name="gender"
                            className="accent-red-500"
                          />{" "}
                          Khác
                        </label>
                      </div>

                      <button className="bg-red-500 text-white px-4 py-2 rounded mt-2">
                        Lưu thay đổi
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 text-black">
                  <h3 className="font-semibold text-base">
                    Số điện thoại và Email
                  </h3>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-lg font-medium">
                      <FaPhone className="text-xl" />
                      <span>0999999999</span>
                    </div>
                    <button className="border border-red-500 text-red-500 px-4 py-1 rounded-full text-base font-medium">
                      Cập nhật
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-lg font-medium">
                      <FaEnvelope className="text-xl" />
                      <span>user@gmail.com</span>
                    </div>
                    <button className="border border-red-500 text-red-500 px-4 py-1 rounded-full text-base font-medium">
                      Cập nhật
                    </button>
                  </div>

                  <hr className="border-gray-300" />

                  <h3 className="font-semibold text-base">Bảo mật</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-lg font-medium">
                      <FaLock className="text-xl" />
                      <span>Đổi mật khẩu</span>
                    </div>
                    <button className="border border-red-500 text-red-500 px-4 py-1 rounded-full text-base font-medium">
                      Cập nhật
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
