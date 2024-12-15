import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/okra-logo.jpg";

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
        <Link href="/create-store" className="hover:text-yellow-300 cursor-pointer">
          Create Store
        </Link>
        <Link href="/manage-orders" className="hover:text-yellow-300 cursor-pointer">
          Manage Orders
        </Link>
        <Link href="/login" className="hover:text-yellow-300 cursor-pointer">
          Login
        </Link>
        <Link href="/get-app" className="hover:text-yellow-300 cursor-pointer">
          Get App
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
