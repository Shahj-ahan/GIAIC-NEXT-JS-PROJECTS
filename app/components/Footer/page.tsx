import React from "react";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className=" flex mb-10 gap-96">
          <h3 className="text-xl font-semibold">
            <span className="text-orange-500">Still</span> You Need Our Support?
            <p className="text-white text-[12px] mt-2">
              Don't wait; raise a query! A logical quote feels pretty easy.
            </p>
          </h3>
          <div className="mt-4 flex justify-center items-center">
            <input
              type="email"
              placeholder="Enter Your Email "
              className="px-4 py-2  bg-yellow-400  "
            />
            <button className="bg-white text-yellow-400 px-4 py-2 ">
              Subscribe Now
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
          <div>
            <h4 className="text-orange-500 font-medium mb-3">About Us</h4>
            <p className="text-white">
              Corporate clients and leisure travelers have been relying on
              Groundstar for dependable service.
            </p>
            <div className="mt-4">
              <div className="flex items-center text-white">
                <span className="text-orange-500 text-lg mr-2">🌙 </span>
                <div>
                  <p>Mon - Sat: 9:00 - 18:00</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-3">Useful Links</h4>
            <ul className="text-white space-y-2">
              <li>About</li>
              <li>News</li>
              <li>Partners</li>
              <li>Team</li>
              <li>Menu</li>
              <li>Contacts</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-3">Help</h4>
            <ul className="text-white space-y-2">
              <li>FAQ</li>
              <li>Terms & Conditions</li>
              <li>Reporting</li>
              <li>Documentation</li>
              <li>Support Policy</li>
              <li>Privacy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-3">Recent Posts</h4>
            <ul className="space-y-4">
              <li>
                <p className="text-white">2022-09-28</p>
                <p className="text-white">Keep Your Business on Top</p>
              </li>
              <li>
                <p className="text-white">2022-08-28</p>
                <p className="text-white">Keep Your Business Safe</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-4 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-gray-500">
            Copyright © 2023 by Ayemma. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-4">
            <span className="w-8 h-8 bg-white rounded-sm flex items-center justify-center text-gray-500 hover:text-blue-500 cursor-pointer">
              <FaFacebook className=" text-[120px]" />
            </span>
            <span className="w-8 h-8 bg-white p-2 flex rounded-sm items-center justify-center text-gray-500 hover:text-orange-500 cursor-pointer">
              <FaTwitter className="text-black  text-[120px]" />
            </span>
            <span className="w-8 h-8 p-2 bg-white rounded-sm flex items-center justify-center text-gray-500 hover:text-orange-500 cursor-pointer">
              <FaInstagram className="text-black  text-[120px]" />
            </span>
            <span className="w-8 h-8 p-1 bg-white rounded-sm flex items-center justify-center text-gray-500 hover:text-orange-500 cursor-pointer">
              <FaYoutube className="text-red-500 text-[120px]" />
            </span>
            <span className="w-8 h-8 p-1 bg-white rounded-sm flex items-center justify-center text-gray-500 hover:text-orange-500 cursor-pointer">
              <FaPinterest className="text-black text-[120px]" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


