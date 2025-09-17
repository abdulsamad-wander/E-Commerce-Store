import { useCart } from "@/contextt/CartContext";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate()
  const {addToCart} = useCart();
  return (
    <div className="relative border border-gray-100 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-max ">
      <img
        src={product.image}
        alt={product.title}
        onClick={()=>navigate(`/products/${product.id}`)}
        className="bg-gray-100 aspect-square overflow-hidden h-1/2 w-full object-cover "
      />
      <h1 className="line-clamp-1 font-semibold p-1">{product.title}</h1>
      <p className="my-1 text-lg text-gray-100 font-bold ">${product.price}</p>
      <button className="text-white/100 cursor-pointer bg-gradient-to-r from-red-500 to-purple-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-sans font-semibold rounded-lg text-sm px-3 py-2 text-center me-2 mb-2" onClick={()=>addToCart(product)}>
        <FaShoppingCart size={24} className="inline-block mr-1" /> Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
