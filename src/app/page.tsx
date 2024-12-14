import Navbar from "@/Components/Navbar";
import Link from "next/link";

const Home = () => {
  return (
    <div className="font-Manrope min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-4 py-16 flex-grow">
        <h1 className="text-5xl font-bold text-yellow-300 mb-4">
          Manage Your Cloud Kitchen with Ease
        </h1>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl">
          Welcome to the Admin Dashboard! Streamline your operations by creating
          stores, managing orders, and ensuring top-notch service for your
          customers across multiple aggregators like Zomato, Swiggy, and more.
        </p>
        <div className="space-y-4">
          <Link href="/create-store">
            <p className="block bg-green-500 text-white text-lg font-semibold py-3 px-6 rounded-2xl hover:bg-green-600 m-4">
              Create Store
            </p>
          </Link>
          <Link href="/manage-orders">
            <p className="block bg-yellow-500 text-gray-900 text-lg font-semibold py-3 px-6 rounded-2xl hover:bg-yellow-600 m-4">
              Manage Orders
            </p>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-800 text-yellow-100 py-4 text-center fixed bottom-0 w-full">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Okra. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
