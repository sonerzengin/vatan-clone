import React from "react";
import Cart from "./Cart";
import Login from "./Login";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Header: React.FC = () => {
  return (
    <div className="bg-[#1564c0] fixed top-0 z-50 w-full flex justify-center py-2 border-b border-gray-400">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <SearchBar />
        <div className="flex items-center">
        <Login />
        <Cart />
        </div>
      </div>
    </div>
  );
};

export default Header;
