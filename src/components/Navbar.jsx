import { MapPin } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
import React from "react";
import { NavLink } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useCart } from "@/contextt/CartContext";

const Navbar = ({ location, getLoaction, setDrop, drop }) => {
  const toggle = () => {
    setDrop(!drop);
  };
  const { cartItem } = useCart();
  
  const items = (
    <>
      {[
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
      ].map((item) => (
        <li key={item.name} className="group relative">
          <NavLink
            to={item.path}
            className="text-sm text-white group-hover:text-gray-800 transition-colors duration-300"
          >
            {item.name}
            <span className="md:absolute left-0 md:-bottom-2 md:h-0.5 md:bg-yellow-500 transition-all duration-300 md:group-hover:w-full"></span>
          </NavLink>
        </li>
      ))}
    </>
  );

  return (
    <div className="navbar bg-blue-500 shadow-md px-4 md:px-16">
      {/* Left side */}
      <div className="navbar-start">
        {/* Mobile menu */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden hover:bg-white text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {items}
          </ul>
        </div>

        {/* Logo / Brand */}
        
        <div className="flex gap-2 font-bold">
          <MapPin className="text-red-500 text-lg ml-2 cursor-pointer hover:text-red-600" />
          <div className="font-semibold text-sm cursor-pointer line-clamp-2">
            {location ? (
              <div className="-space-y-2">
                <p className="f">
                  {location.amenity} {location.road} {", "}({location.state})
                </p>
              </div>
            ) : (
              "Add a location"
            )}
          </div>
          <FaCaretDown className="mt-1 cursor-pointer text-lg" onClick={toggle} />
        </div>
      </div>
      {drop ? (
        <div className="w-[250px] h-28 shadow-2xl z-50 bg-black/85 fixed top-16 left-16 border-2 p-5 border-yellow-500 rounded-md">
          <h1 className="text-lg font-semibold mb-4 flex justify-between text-white cursor-default">
            Location{" "}
            <span>
              <CgClose onClick={toggle} className="cursor-pointer" />
            </span>
          </h1>
          <button
            type="button"
            className="text-white bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2 text-center me-2 mb-2 dark:focus:ring-blue-900 cursor-pointer"
            onClick={getLoaction}
          >
            Detect My Location
          </button>
        </div>
      ) : (
        ""
      )}

      {/* Center navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white/80">{items}</ul>
      </div>

      {/* Right side icons */}
      <div className="navbar-end">
        {/* Cart - Fixed to handle navigation properly */}
        <NavLink 
          to="/cart" 
          className="indicator mr-4 p-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="badge badge-sm indicator-item bg-amber-500 border-none text-white">
            {cartItem.length}
          </span>
        </NavLink>

        {/* User authentication */}
        <div className="">
          <SignedOut>
            <SignInButton className="bg-yellow-500 hover:bg-white/80 cursor-pointer px-3 py-1 rounded-md font-semibold" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;