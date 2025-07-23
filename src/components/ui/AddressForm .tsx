import React from "react";

interface AddressData {
  name?: string;
  phone?: string;
  city?: string;
  district?: string;
  ward?: string;
  address?: string;
  type?: string;
  isDefault?: boolean;
}

interface Props {
  initialData: AddressData;
}

const AddressForm: React.FC<Props> = ({ initialData }) => {
  return (
    <form className="bg-white p-6 rounded-lg space-y-4 text-sm">
      <div className="flex items-center">
        <label className="w-40">Họ và tên:</label>
        <input
          type="text"
          placeholder="Nhập họ và tên"
          defaultValue={initialData.name || ""}
          className="flex-1 border rounded px-3 py-2"
        />
      </div>

      <div className="flex items-center">
        <label className="w-40">Số điện thoại:</label>
        <input
          type="text"
          placeholder="Nhập số điện thoại"
          defaultValue={initialData.phone || ""}
          className="flex-1 border rounded px-3 py-2"
        />
      </div>

      <div className="flex items-center">
        <label className="w-40">Tỉnh/Thành phố:</label>
        <select
          defaultValue={initialData.city || ""}
          className="flex-1 border rounded px-3 py-2"
        >
          <option value="">Chọn Tỉnh/Thành phố</option>
          <option value="Cần Thơ">Cần Thơ</option>
        </select>
      </div>

      <div className="flex items-center">
        <label className="w-40">Quận/Huyện:</label>
        <select
          defaultValue={initialData.district || ""}
          className="flex-1 border rounded px-3 py-2"
        >
          <option value="">Chọn Quận/Huyện</option>
          <option value="Quận Cái Răng">Quận Cái Răng</option>
          <option value="Quận Ninh Kiều">Quận Ninh Kiều</option>
        </select>
      </div>

      <div className="flex items-center">
        <label className="w-40">Phường/Xã:</label>
        <select
          defaultValue={initialData.ward || ""}
          className="flex-1 border rounded px-3 py-2"
        >
          <option value="">Chọn Phường/Xã</option>
          <option value="Phường Lê Bình">Phường Lê Bình</option>
          <option value="Phường Hưng Phú">Phường Hưng Phú</option>
        </select>
      </div>

      <div className="flex items-center">
        <label className="w-40">Địa chỉ cụ thể:</label>
        <input
          type="text"
          placeholder="Nhập địa chỉ cụ thể"
          defaultValue={initialData.address || ""}
          className="flex-1 border rounded px-3 py-2"
        />
      </div>

      <div className="flex items-center">
        <label className="w-40">Loại địa chỉ:</label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="type"
              value="Nhà riêng"
              defaultChecked={initialData.type === "Nhà riêng"}
            />
            Nhà riêng
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="type"
              value="Văn phòng"
              defaultChecked={initialData.type === "Văn phòng"}
            />
            Văn phòng
          </label>
        </div>
      </div>

      <div className="flex items-center pl-40">
        <input
          type="checkbox"
          defaultChecked={initialData.isDefault || false}
          className="form-checkbox text-red-600"
        />
        <label className="ml-2">Đặt làm địa chỉ mặc định</label>
      </div>

      <div className="pl-40 pt-2">
        <button
          type="button"
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Lưu
        </button>
      </div>
    </form>
  );
};

export default AddressForm;
