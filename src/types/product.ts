export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  stock: number;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  rating: number;
  reviewsCount: number;
  discount?: number;
};
