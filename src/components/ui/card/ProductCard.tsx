import React from "react";

type ProductCard ={
  title: string;
  name: string;
  image: string;
};

const ProductCard = ({title, name, image}: ProductCard) => {
  return (
    <div className="border p-4 rounded-xl shadow-md max-w-sm">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-lg mb-2"
      />
      <p className="text-red-800">{name}</p>
    </div>
  );
};

export default ProductCard;
