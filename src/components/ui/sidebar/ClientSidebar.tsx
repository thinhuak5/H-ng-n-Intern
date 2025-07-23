import React from 'react';

interface CategoryItem {
  name: string;
  image: string;
}

const categories: CategoryItem[] = [
  { name: 'Sách tâm lý', image: 'https://www.nxbtre.com.vn/Images/Book/nxbtre_full_18302023_113035.jpg' },
  { name: 'English Books', image: 'https://rabiabooks.com/wp-content/uploads/2020/11/0373-English-for-All-2018.jpg' },
  { name: 'Sách thiếu nhi', image: 'https://media-cdn-v2.laodong.vn/storage/newsportal/2023/7/16/1217249/Ngoi_Cung_Toi_Ban_Nh.jpg' },
  { name: 'Sách giáo khoa', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvLOTvDHIg3XHgiV1_v2zZIJ4BNJYQlRIl2g&s' },
  { name: 'Đồ chơi', image: 'https://product.hstatic.net/200000382533/product/7f16c0d41af14f5cb1e531a841475267_8c1e91d8b2724ca7a6473328e26add57.jpg' },
];

const ClientSidebar: React.FC = () => {
  return (
    <aside className="bg-white w-64 p-4">
      <h2 className="text-lg font-semibold mb-4">Danh mục</h2>
      <ul className="space-y-2">
        {categories.map((item, index) => (
          <li
            key={index}
            className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-10 h-10 object-contain"
            />
            <span className="text-sm whitespace-nowrap">{item.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ClientSidebar;
