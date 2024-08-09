import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-blue-900 rounded-lg">
      <div className="container mx-auto flex justify-between items-center p-2 ">
        <div className="text-2xl font-bold">
          <img className="w-16" src="public\RafinHasan.gif" alt="" />
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="p-2 font-semibold text-gray-700 rounded-md bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500"
            >
              Home
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/shop"
              className="p-2 font-semibold text-gray-700 rounded-md bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500"
            >
              Shop
            </Link>
            {isDropdownOpen && (
              <div className="absolute top-full left-[-120px] bg-white shadow rounded-xl m-2">
                {/* Dropdown content here */}
                <div className="p-4 bg-black text-white w-96 gap-5 flex flex-wrap hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                  <Link
                    className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-2"
                    to=""
                  >
                    Laptop
                  </Link>
                  <Link
                    className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-2"
                    to=""
                  >
                    Mobile
                  </Link>
                  <Link
                    className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-2"
                    to=""
                  >
                    TV
                  </Link>
                  <Link
                    className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-2"
                    to=""
                  >
                    Monitor
                  </Link>
                  <Link
                    className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-2"
                    to=""
                  >
                    Keyboard
                  </Link>
                  <Link
                    className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-2"
                    to=""
                  >
                    Mouse
                  </Link>
                  <Link
                    className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-2"
                    to=""
                  >
                    Printer
                  </Link>
                  <Link
                    className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-2"
                    to=""
                  >
                    Headphone
                  </Link>
                  <Link
                    className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-2"
                    to=""
                  >
                    Speaker
                  </Link>
                  <Link
                    className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-2"
                    to=""
                  >
                    Mic
                  </Link>
                  <Link
                    className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-2"
                    to=""
                  >
                    PC
                  </Link>
                  <Link
                    className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-2"
                    to=""
                  >
                    Graphics Card
                  </Link>
                  <Link
                    className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-2"
                    to=""
                  >
                    Ram
                  </Link>
                  <Link
                    className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-2"
                    to=""
                  >
                    Processor
                  </Link>
                  <Link
                    className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-2"
                    to=""
                  >
                    Cooling fan
                  </Link>
                  <Link
                    className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-2"
                    to=""
                  >
                    Casing
                  </Link>
                </div>
              </div>
            )}
          </li>
          <li>
            <Link
              to="/support"
              className="p-2 text-gray-700 font-semibold rounded-md bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500"
            >
              Support
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
