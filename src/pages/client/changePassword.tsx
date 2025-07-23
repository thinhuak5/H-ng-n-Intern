import UserSidebar from "@/components/ui/sidebar/UserSidebar";
import { FiEye } from "react-icons/fi";
const FormGroup = ({
  label,
  placeholder,
  autoComplete,
}: {
  label: string;
  placeholder: string;
  autoComplete?: string;
}) => (
  <div className="mx-auto w-[70%]">
    <label className="block mb-1 font-medium text-gray-700">{label}</label>
    <div className="relative">
      <input
        type="password"
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full border border-gray-300 rounded px-4 py-2 pr-10 focus:outline-none focus:ring focus:border-blue-400"
      />
      <FiEye className="absolute right-3 top-3 text-gray-500 cursor-pointer" />
    </div>
  </div>
);
const ChangePassword = () => {
  return (
    <div className="bg-[#F6F7FB] min-h-screen p-6 text-sm">
      <div className="max-w-[90%] mx-auto">
        <div className="text-gray-500 mb-4">
          <span className="text-gray-400">Trang chủ</span> &nbsp;&gt;&nbsp;
          <span className="text-gray-400">Quản lý tài khoản</span>{" "}
          &nbsp;&gt;&nbsp;
          <span className="font-medium text-gray-600">Đổi mật khẩu</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <UserSidebar />
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-lg font-semibold mb-6">Đổi mật khẩu</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <form className="space-y-4">
                <FormGroup
                  label="Mật khẩu hiện tại"
                  placeholder="Nhập mật khẩu hiện tại"
                  autoComplete="new-password"
                />

                <FormGroup
                  label="Mật khẩu mới"
                  placeholder="Nhập mật khẩu mới"
                />

                <FormGroup
                  label="Mật lại khẩu mới"
                  placeholder="Nhập lại mật khẩu mới"
                />

                <button
                  type="button"
                  disabled
                  className="w-[70%] mx-auto bg-gray-300 text-white py-2 px-4 rounded cursor-not-allowed block"
                >
                  Lưu thay đổi
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
