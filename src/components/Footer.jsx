import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <hr className="mt-4 bg-white" />
      <div className="bg-blue-500 text-gray-900 py-4 text-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="mb-2 md:mb-0 cursor-default">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </div>
          <div className="mb-6 md:mb-0 flex flex-row gap-2 cursor-default">
            
            <p className="text-sm"><span className="font-semibold">Email:</span> abdullsamad@gmail.com, </p>
            <p className="text-sm"><span className="font-semibold">Phone:</span> (+92) 301-7815380</p>
          </div>

          <div className="flex space-x-6 items-center">
            <NavLink to="/about" className="hover:text-white transition">
              About
            </NavLink>
            <NavLink to="/contact" className="hover:text-white transition">
              Contact
            </NavLink>

            {/* Social Icons */}
            <div className="gap-2 flex flex-row">
              <a
                href="https://www.facebook.com/share/1C7jStusk4/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/abdul.samad.2812"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/923017815380"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <IoLogoWhatsapp />
              </a>
              <a
                href="https://www.linkedin.com/in/abdullsamad3800/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
