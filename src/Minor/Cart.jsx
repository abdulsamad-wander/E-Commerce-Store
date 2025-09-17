import { useCart } from "@/contextt/CartContext";
import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import emptyCart from "../assets/empty-cart.png";

const Cart = ({ location, getLocation }) => {
  const { user } = useUser();
  const navigate = useNavigate();
  const { cartItem, updateQuantity, deleteItem } = useCart();

  const [fullName, setFullName] = useState(user?.fullName || "");
  const [address, setAddress] = useState(location?.amenity || "");
  const [city, setCity] = useState(location?.city || "");
  const [country, setCountry] = useState(location?.country || "");
 
  const totalPrice = cartItem.reduce((total, item) => total + (item.price * item.quantity), 1);
  return (
    <div className="max-w-screen-2xl px-4 md:px-16">
      <div className="mt-10 mb-5 mx-auto">
        {cartItem.length > 0 ? (
          <div>
            <h1 className="font-semibold text-xl">
              My cart ({cartItem.length})
            </h1>
            <div className="mt-10">
              {cartItem.map((item, indx) => (
                <div
                  key={indx}
                  className="md:p-5 p-2 rounded-md flex items-center justify-between mt-3 w-full dark:bg-gray-700"
                >
                  <div className="flex items-center justify-center gap-1.5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-20 w-20 rounded-2xl"
                    />
                    <div>
                      <h1 className="md:w-[300px] w-[150px] sm:w-[100px] line-clamp-2 md:line-clamp-2 font-serif font-stretch-ultra-condensed">
                        {item.title}
                      </h1>
                      <p className="font-semibold text-lg text-red-500">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                  <div className="bg-blue-400 text-red-600 flex gap-2 md:gap-4 md:p-1 p-0.5 rounded-xl font-extrabold text-lg">
                    <button
                      onClick={() =>
                        updateQuantity(cartItem, item.id, "decrease")
                      }
                      className="cursor-pointer"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(cartItem, item.id, "increase")
                      }
                      className="cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <span className="hover:shadow-2xl transition-all hover:scale-105 duration-300 rounded-md">
                    <FaTrashAlt
                      onClick={() => deleteItem(item.id)}
                      className="text-red-600 md:text-2xl sm:text-lg text-xl cursor-pointer"
                    />
                  </span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 ">
              <div className="rounded-xl bg-gray-700 p-5">
                <div className="md:px-5 px-1">
                  <h1 className="font-bold text-2xl mt-2 font-sans text-white/100">
                    Delivery Info
                  </h1>
                  <div className="flex flex-col">
                    <label
                      className="text-lg mt-2 font-semibold text-white/90"
                      htmlFor=""
                    >
                      Full Name
                    </label>
                    <input
                      className="mt-2 border-2 border-gray-300 rounded-md p-2 w-full mb-2"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your name..."
                    />
                    <label
                      className="text-lg mt-2 font-semibold text-white/90"
                      htmlFor=""
                    >
                      Address
                    </label>
                    <input
                      className="border-2 border-gray-300 rounded-md p-2 w-full mb-2"
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Enter your address..."
                    />
                  </div>

                  <div className="flex flex-col md:flex-row  gap-6 mt-2 md:mt-4 ">
                    <div className="flex flex-col w-full">
                      <label
                        className="text-lg mt-2 font-semibold text-white/90"
                        htmlFor=""
                      >
                        City
                      </label>
                      <input
                        className="border-2 border-gray-300 rounded-md p-2 w-full mt-2"
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter your city..."
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <label
                        className="text-lg md:mt-2 font-semibold text-white/90"
                        htmlFor=""
                      >
                        Postal Code
                      </label>
                      <input
                        className="mt-2 border-2 border-gray-300 rounded-md p-2  w-full"
                        type="number"
                        placeholder="Enter your postal code..."
                        // value={location.postcode}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-6 mt-4 ">
                    <div className="flex flex-col w-full">
                      <label
                        className="text-lg mt-2 font-semibold text-white/90"
                        htmlFor=""
                      >
                        Country
                      </label>
                      <input
                        className="border-2 border-gray-300 rounded-md p-2 w-full md:mt-2"
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="Enter your country..."
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <label
                        className="text-lg md:mt-2  font-semibold text-white/90"
                        htmlFor=""
                      >
                        Phone no
                      </label>
                      <input
                        className="mt-2 border-2 border-gray-300 rounded-md p-2  w-full"
                        type="number"
                        placeholder="Enter your mobile no..."
                      />
                    </div>
                  </div>
                  <div className="justify-center items-center flex">
                    <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm font-sans px-3 py-2 me-2 mb-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mt-6 cursor-pointer">
                    Submit
                  </button>
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-xl">----- OR -----</div>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm font-sans px-3 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mt-2 cursor-pointer"
                    onClick={getLocation}
                  >
                    Detect Location
                  </button>
                </div>
              </div>
              <div className="rounded-2xl bg-gray-700 p-5">
                <div className="px-4">
                  <h1 className="text-2xl font-bold font-sans mt-4">
                    Bill Details
                  </h1>
                  <div className="shadow-2xl rounded-md mt-3 p-4">
                    <div className="flex justify-between space-y-3 ml-1">
                      <div className="flex justify-start items-start  gap-1">
                        <FaListAlt className="text-center mt-[15px] text-lg" />
                        <span className="mt-2.5 text-center text-lg font-semibold">
                          Items total{" "}
                        </span>
                      </div>
                      <div className="mt-3 text-lg">${totalPrice}</div>
                    </div>
                    <div className="flex justify-between space-y-3 ml-1">
                      <div className="flex justify-start items-start  gap-1">
                        <MdDeliveryDining className="text-center mt-[15px] text-lg" />
                        <span className="mt-2.5 text-center text-lg font-semibold">
                          Delivery Charges{" "}
                        </span>
                      </div>
                      <div className="mt-3 text-lg text-red-500 space-x-1">
                        <span className="line-through text-white/80">$10 </span>{" "}
                        FREE
                      </div>
                    </div>
                    <div className="flex justify-between space-y-3 ml-1">
                      <div className="flex justify-start items-start  gap-1">
                        <FaBagShopping className="text-center mt-[15px] text-lg" />
                        <span className="mt-2.5 text-center text-lg font-semibold">
                          Handling Charges{" "}
                        </span>
                      </div>
                      <div className="mt-3 text-lg">$5.00</div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-0 px-4 p-1">
                    <div className="flex justify-start items-start  gap-1">
                      <span className="mt-2.5 text-center text-lg font-semibold">
                        Grand total{" "}
                      </span>
                    </div>
                    <div className="mt-3 text-lg font-bold">
                      ${totalPrice + 5}
                    </div>
                  </div>
                  <div>
                    <h1 className="font-semibold text-gray-50 mb-3 mt-7">
                      Apply Promo Code
                    </h1>
                    <div className="flex gap-3">
                      <input
                        type="text"
                        placeholder="Enter code"
                        className="p-2 rounded-md w-full"
                      />
                      <button className="bg-white text-black border border-gray-200 px-4 cursor-pointer py-1 rounded-md">
                        Apply
                      </button>
                    </div>

                    <button className="bg-red-500 text-white px-3 py-2 rounded-md w-full cursor-pointer mt-3">
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3 justify-center items-center h-[600px]">
            <h1 className="text-red-500/80 font-bold text-5xl">
              Oh no! Your cart is empty
            </h1>
            <img src={emptyCart} alt="" className="w-[400px]" />
            <button
              onClick={() => navigate("/products")}
              className="bg-red-500 text-white px-3 py-2 rounded-md cursor-pointer "
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
