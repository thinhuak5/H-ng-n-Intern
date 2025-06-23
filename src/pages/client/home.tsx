import ProductCard from "@/components/ui/card/ProductCard";

const product = {
  id: "1",
  name: "Sản phẩm mẫu",
  price: 100000,
  description: "Mô tả sản phẩm mẫu",
  imageUrl: "https://via.placeholder.com/150",
  category: "Điện tử",
  stock: 10,
  createdAt: "2023-01-01T00:00:00Z",
  updatedAt: "2023-01-01T00:00:00Z",
  isActive: true,
  rating: 4.5,
  reviewsCount: 100,
};

const Home = () => {
  return (
    <div>
      <p>Trang Chủ client</p>
      <ProductCard product={product} />
    </div>
  );
};

export default Home;
