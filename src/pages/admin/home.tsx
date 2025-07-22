import ClientSidebar from '@/components/ui/sidebar/ClientSidebar';
import ClientBanner from "../../components/ui/banner/ClientBanner";


const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <div className="max-w-[90%] mx-auto">
        <div className="flex gap-6">
          {/* Sidebar bên trái */}
          <ClientSidebar />

          {/* Phần bên phải gồm banner và nội dung */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Banner */}
            <ClientBanner />

            {/* Nội dung chính */}
            <div>
              <p className="text-xl font-semibold mb-4">Trang chủ</p>
              {/* Thêm nội dung chính ở đây */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
