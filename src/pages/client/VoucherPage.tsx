import TabbedContent from "@/components/ui/TabbedContent";
import UserSidebar from "@/components/ui/sidebar/UserSidebar";

const VoucherPage = () => {
  const voucherTabs = [
    { label: "Tất cả", key: "all" },
    { label: "Hết hiệu lực", key: "expired" },
    { label: "Đã sử dụng", key: "used" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="ml-[100px]">
        <UserSidebar />
      </div>

      <div className="flex-1 max-w-[90%] p-6">
        <h1 className="text-xl font-semibold mb-4">Kho voucher</h1>
        <div className="flex items-center gap-4 mb-4 bg-white p-4 rounded-md">
          <span className="text-sm font-medium min-w-[90px]">Mã voucher</span>
          <input
            type="text"
            placeholder="Nhập mã voucher tại đây"
            className="border border-gray-300 rounded-md px-4 py-2 w-80 text-sm"
          />

          <button className="bg-gray-200 text-gray-500 px-4 py-2 text-sm rounded-md cursor-not-allowed">
            Lưu
          </button>
        </div>

        <TabbedContent
          tabs={voucherTabs}
          emptyImage="/images/empty-voucher.png"
          emptyText="Chưa có voucher"
        />
      </div>
    </div>
  );
};

export default VoucherPage;
