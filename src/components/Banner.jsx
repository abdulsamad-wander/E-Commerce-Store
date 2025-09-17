import React from "react";
import banner from "../assets/banner1.jpg";

const Banner = () => {
  return (
    <div className="bg-black md:py-20 px-4 md:px-16">
      <div
        className="relative max-w-7xl mx-auto  md:rounded-xl pt-28 bg-cover h-[550px] md:h-[600px] "
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/50 md:rounded-2xl bg-opacity-50 flex justify-center items-center">
          <div className="text-white text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 font-serif">
              Next-Gen Electrics at Your Fingertips
            </h1>
            <p className="text-lg md:text-xl mb-4 font-sans">
              Discover the latest innovation with unbeatable prices and Free
              shopping on all orders
            </p>
            <button className="text-white/100 cursor-pointer bg-gradient-to-r from-red-500 to-purple-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-sans font-semibold rounded-lg text-sm px-3 py-2 text-center me-2 mb-2">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
