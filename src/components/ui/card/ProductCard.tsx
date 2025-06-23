import type { Product } from "@/types/product";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
    </div>
  );
};

export default ProductCard;
