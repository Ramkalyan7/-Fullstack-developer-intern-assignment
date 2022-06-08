import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header className="text-white bg-blue-300 fixed top-0 left-0 right-0 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <Link
            to="/"
            className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl text-[#2c7594] font-extrabold">
              Brandname
            </span>
          </Link>
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <Link to="/" className="mr-5 hover:text-gray-300">
              First Link
            </Link>
            <Link to="/" className="mr-5 hover:text-gray-300">
              Second Link
            </Link>
            <Link to="/" className="mr-5 hover:text-gray-300">
              Third Link
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
