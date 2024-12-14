import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/okra-logo.jpg"

function Navbar() {
  return (
    <div>
      <nav className="bg-green-600 text-yellow-100 py-4 px-6 flex justify-between items-center shadow-lg">
        <div className="flex items-center space-x-4">
          <Image src={logo} alt="Okra Logo" width={50} height={50} />
          <span className="text-2xl font-bold">Okra</span>
        </div>
        <div className="space-x-4 flex items-center">
          <Link href="/create-store">
            <p className="hover:text-yellow-300 cursor-pointer">Create Store</p>
          </Link>
          <Link href="/order-management">
            <p className="hover:text-yellow-300 cursor-pointer">
              Order Management
            </p>
          </Link>
          <Link href="/login">
            <p className="hover:text-yellow-300 cursor-pointer">Login</p>
          </Link>
          <Link href="/get-app">
            <p className="hover:text-yellow-300 cursor-pointer">Get App</p>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
