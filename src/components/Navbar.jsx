import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Sooraj Crop Sciences</h1>
      <div className="space-x-4">
        <a href="/" className="hover:text-green-200">Home</a>
        <a href="/about" className="hover:text-green-200">About</a>
        <a href="/products" className="hover:text-green-200">Products</a>
        <a href="/contact" className="hover:text-green-200">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
