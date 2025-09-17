import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loading from "../assets/loading.webm";
import Breadcrum from "@/Minor/Breadcrum";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/contextt/CartContext";

const Single = () => {
  const params = useParams();
  const [product, setProduct] = useState(" ");
  const { addToCart } = useCart();
  const singleProduct = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${params.id}`
      );
      const data = res.data; // res.data already contains the product object
      setProduct(data);
    } catch (error) {
      console.log("Error fetching product:", error);
    }
  };
  useEffect(() => {
    singleProduct();
  }, []);
  console.log(product.image);
  return (
    <div>
      {product ? (
        <div className="px-4 md:px-16">
          <div>
            <Breadcrum title={product.title} />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 max-w-4xl mx-auto gap-10 items-start">
            <div className="w-full flex justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="rounded-2xl max-h-[400px] object-contain w-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="md:text-3xl text-xl font-extrabold dark:text-white/90 cursor-default">
                {product.title}
              </h1>
              <div className="uppercase text-sm cursor-default">
                {product.category}
              </div>
              <div className="flex flex-row gap-2">
                <span className="text-red-500 font-semibold cursor-default">
                  ${product.price}
                </span>
              </div>
              <p className="text-sm cursor-default">{product.description}</p>
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium">Quantity:</label>
                <input
                  type="number"
                  min={1}
                  value={1}
                  className="w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <button
                onClick={() => addToCart(product)}
                className="text-white bg-gradient-to-r from-red-600 to-purple-600 hover:bg-gradient-to-br font-semibold rounded-lg text-sm px-3 py-2 mt-2 flex items-center gap-2"
              >
                <FaShoppingCart size={20} /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <video muted autoPlay loop>
            <source src={loading} type="video/webm" />
          </video>
        </div>
      )}
    </div>
  );
};

export default Single;
