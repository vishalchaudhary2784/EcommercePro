import React from "react";
import Products from "../../components/Products";

const ProductList = ({ isDarkmode }) => {

  return (
    <div
      className={`p-[20px] w-full min-h-screen ${
        isDarkmode ? "bg-[#071739]" : "bg-[#F8F8F8]"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-[20px]">
        <h1
          className={`text-2xl font-bold ${
            isDarkmode ? "text-white" : "text-gray-800"
          }`}
        >
          Product List
        </h1>
        <span
          className={`font-inter font-medium ${
            isDarkmode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Home → Products → Product List
        </span>
      </div>

      {/* Summary Cards */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-[20px] mb-[30px]">
        <div className="bg-[#2d9cdb] text-white rounded-lg p-[20px]">
          <h2 className="text-lg font-bold">547</h2>
          <p>Total Products</p>
        </div>
        <div className="bg-[#27ae60] text-white rounded-lg p-[20px]">
          <h2 className="text-lg font-bold">605</h2>
          <p>Total Categories</p>
        </div>
        <div className="bg-[#9b51e0] text-white rounded-lg p-[20px]">
          <h2 className="text-lg font-bold">249</h2>
          <p>Total Brands</p>
        </div>
      </div>

      {/* Table */}
        <Products isDarkmode={isDarkmode} />
      {/* Pagination */}
      
    </div>
  );
};

export default ProductList;
