"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ backgroundColor: "#F7F7F7" }} className="p-4 mt-4">
      <div className="flex items-center justify-between px-4">
        {/* Logo */}
        <h1 className="font-bold text-[24px] sm:text-[30px]">Ddsgnr</h1>

        {/* Hamburger Icon */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-[70px] left-0 w-full bg-white md:flex md:static md:w-auto md:space-x-4 p-4 md:p-0 shadow-lg md:shadow-none`}
        >
          <nav className="flex flex-col items-start space-y-2 md:flex-row md:items-center md:space-y-0 md:space-x-4">
            <Link href="Home" className="hover:text-blue-500">
              Home
            </Link>
            <Link href="Courses" className="hover:text-blue-500">
              Courses
            </Link>
            <Link href="Services" className="hover:text-blue-500">
              Services
            </Link>
            <Link href="Achivement" className="hover:text-blue-500">
              Achievement
            </Link>
            <Link href="About Us" className="hover:text-blue-500">
              About Us
            </Link>
            <Link href="Testimonial" className="hover:text-blue-500">
              Testimonial
            </Link>
          </nav>

          <div className="flex flex-col items-start space-y-2 md:flex-row md:items-center md:space-y-0 md:space-x-4 mt-4 md:mt-0">
            <div className="border-2 border-black w-[82px] h-[45px] text-black rounded-lg flex items-center justify-center hover:bg-gray-200">
              Login
            </div>
            <div className="border-2 w-[100px] h-[50px] bg-black text-white rounded-lg flex items-center justify-center hover:bg-gray-200">
              Sign up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
