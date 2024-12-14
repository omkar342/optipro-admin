import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/okra-logo.jpg";

function Navbar() {
  return (
    <nav className="bg-green-600 text-yellow-100 py-4 px-6 flex justify-between items-center shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <Image src={logo} alt="Okra Logo" width={50} height={50} />
        <span className="text-2xl font-bold">Okra</span>
      </div>
      {/* Navigation Links */}
      <div className="ml-auto flex space-x-4 hidden sm:flex">
        <Link href="/create-store">
          <p className="hover:text-yellow-300 cursor-pointer">Create Store</p>
        </Link>
        <Link href="/manage-orders">
          <p className="hover:text-yellow-300 cursor-pointer">Manage Orders</p>
        </Link>
        <Link href="/login">
          <p className="hover:text-yellow-300 cursor-pointer">Login</p>
        </Link>
        <Link href="/get-app">
          <p className="hover:text-yellow-300 cursor-pointer">Get App</p>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
