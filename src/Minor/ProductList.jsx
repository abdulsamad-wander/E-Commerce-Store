import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contextt/CartContext";

import { FaShoppingCart } from "react-icons/fa";

const ProductList = ({ item }) => {
  const navigate = useNavigate();
  const {addToCart} = useCart();
  return (
    <div className="w-[95%] mt-2 rounded-md space-y-4">
      <div
        className="p-2 bg-gray-700 flex items-center rounded-md "
        
      >
        <img
          src={item.image}
          alt={item.title}
          className="h-52 w-52 rounded-md cursor-pointer"
          onClick={() => navigate(`/products/${item.id}`)}
        />
        <div className="space-y-4  ml-12">
          <h1 className="line-clamp-3 font-medium font-serif text-xl cursor-default hover:text-red-400">
            {item.description}
          </h1>
          <span className="text-2xl hover:text-red-500 cursor-default"
          onClick={() => navigate(`/products/${item.id}`)}
          >
            ${item.price}
          </span>{" "}
          <br />
          <div className="flex">
            <button
              onClick={() => addToCart(item)}
              className="text-white/100 cursor-pointer bg-gradient-to-r from-red-600 to-purple-600  hover:bg-gradient-to-br font-sans font-semibold rounded-lg text-sm px-3 py-2 mt-2"
            >
              {" "}
              <FaShoppingCart
                size={20}
                className="inline-block mr-1 text-center"
              />{" "}
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
