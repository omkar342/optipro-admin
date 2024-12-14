"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { api } from "../../../utils/url";
import { toast } from "react-hot-toast";

const CreateStore = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    aggregators: [] as string[],
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAggregatorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      aggregators: checked
        ? [...prev.aggregators, value]
        : prev.aggregators.filter((agg) => agg !== value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await api({
      url: "/store/create-store",
      type: "post",
      data: formData,
    });

    if (response.status === 201) {
      toast.success("New store created successfully!");
      setFormData({ name: "", username: "", password: "", aggregators: [] });
    } else {
      toast.error("Failed to create store. Please try again.");
    }
  };

  return (
    <div className="font-Manrope min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="max-w-lg w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-yellow-300 mb-5 text-center">
          Create Store
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-2 text-green-400">
              Store Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="e.g. Aishwarya's Kitchen"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-700 bg-gray-900 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-green-400">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="e.g. test123"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-gray-700 bg-gray-900 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium mb-2 text-green-400">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-700 bg-gray-900 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-10 right-4 text-gray-400 hover:text-white focus:outline-none"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-green-400">
              Aggregators
            </label>
            <div className="flex flex-wrap gap-3">
              {["Zomato", "Swiggy", "UberEats", "DoorDash", "Deliveroo"].map(
                (agg) => (
                  <label key={agg} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={agg}
                      checked={formData.aggregators.includes(agg)}
                      onChange={handleAggregatorChange}
                      className="form-checkbox text-yellow-500 bg-gray-900 border-gray-700 focus:ring-yellow-500"
                    />
                    <span className="text-white">{agg}</span>
                  </label>
                )
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold rounded-2xl py-3 hover:bg-green-600 focus:outline-none"
          >
            Create Store
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateStore;
