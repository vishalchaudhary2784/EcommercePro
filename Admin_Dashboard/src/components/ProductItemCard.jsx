import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";
import { FaEye, FaTrash } from "react-icons/fa";

const ProductItemCard = ({
  index,
  isDarkmode,
  isChecked,
  data: {
    image,
    name,
    des,
    category,
    brand,
    price,
    stock,
    rating,
    order,
    sales,
  },
}) => {
  const [isLocalChecked, setIsLocalChecked] = useState(false);

  useEffect(() => {
    setIsLocalChecked(isChecked);
  }, [isChecked]);

  const handleChecked = (e) => {
    setIsLocalChecked(e.target.checked);
  };

  return (
    <div
      className={`w-full flex h-[70px] ${
        index % 2
          ? isDarkmode
            ? "bg-[#071739]"
            : "bg-[#F8F8F8]"
          : "bg-transparent"
      } border-b-[1px] border-opacity-10 ${
        isDarkmode ? "border-white" : "border-black"
      } transition-all duration-200 ease-in-out`}
    >
      <div
        className={`w-[100px] h-[full] px-[10px] flex items-center gap-[5px] border-r-[1px] 
        border-opacity-10 ${isDarkmode ? "border-white" : "border-black"}`}
      >
        <input
          type="checkbox"
          className="w-[16px] h-[16px] accent-[#216AF8]"
          checked={isLocalChecked}
          onChange={handleChecked}
        />
        <h1
          className={`text-sm font-inter font-bold ${
            isDarkmode ? "text-gray-300" : "text-gray-500"
          }`}
        >
          # {index + 1}
        </h1>
      </div>

      <div
        className={`w-[180px] h-[full] px-[10px] flex items-center gap-[5px] border-r-[1px] 
        border-opacity-10 ${isDarkmode ? "border-white" : "border-black"}`}
      >
        <div className="w-[40px] h-[40px] p-[4px] bg-white rounded-md">
          <img src={image} alt="item" className="w-full h-full" />
        </div>
        <div className="flex flex-col gap-[5px]">
          <h1
            className={`w-[100px] truncate text-sm font-inter font-bold ${
              isDarkmode ? "text-white" : "text-black"
            }`}
          >
            {name}
          </h1>
          <h1
            className={`w-[100px] truncate text-xs font-inter font-bold ${
              isDarkmode ? "text-gray-300" : "text-gray-500"
            }`}
          >
            {des}
          </h1>
        </div>
      </div>

      <div
        className={`w-[120px] h-[full] px-[10px] flex items-center gap-[5px] border-r-[1px] 
        border-opacity-10 ${isDarkmode ? "border-white" : "border-black"}`}
      >
        <h1
          className={`text-sm font-inter font-normal ${
            isDarkmode ? "text-gray-300" : "text-gray-500"
          }`}
        >
          {category}
        </h1>
      </div>

      <div
        className={`w-[100px] h-[full] px-[10px] flex items-center gap-[5px] border-r-[1px] 
        border-opacity-10 ${isDarkmode ? "border-white" : "border-black"}`}
      >
        <h1
          className={`text-sm font-inter font-normal ${
            isDarkmode ? "text-gray-300" : "text-gray-500"
          }`}
        >
          {brand}
        </h1>
      </div>

      <div
        className={`w-[100px] h-[full] px-[10px] flex items-center gap-[5px] border-r-[1px] 
        border-opacity-10 ${isDarkmode ? "border-white" : "border-black"}`}
      >
        <div className="flex flex-col gap-[5px]">
          {price.discount != null && (
            <h1
              className={`text-sm font-inter line-through ${
                isDarkmode ? "text-gray-300" : "text-gray-500"
              }`}
            >
              {price.discount}
            </h1>
          )}
          <h1 className="text-base font-inter text-red-600">
            {price.original}
          </h1>
        </div>
      </div>

      <div
        className={`w-[100px] h-[full] px-[10px] flex items-center gap-[5px] border-r-[1px] 
        border-opacity-10 ${isDarkmode ? "border-white" : "border-black"}`}
      >
        <h1
          className={`text-sm font-inter font-normal ${
            isDarkmode ? "text-gray-300" : "text-gray-500"
          }`}
        >
          {stock}
        </h1>
      </div>

      <div
        className={`w-[120px] h-[full] px-[10px] flex items-center gap-[5px] border-r-[1px] 
        border-opacity-10 ${isDarkmode ? "border-white" : "border-black"}`}
      >
        <div className="flex items-center gap-[5px]">
          <AiFillStar size={17} color="#EDB213" />
          <h1
            className={`text-base font-inter font-bold ${
              isDarkmode ? "text-white" : "text-black"
            }`}
          >
            {rating[0]}
          </h1>
          <h1
            className={`text-sm font-inter font-normal ${
              isDarkmode ? "text-gray-300" : "text-gray-500"
            }`}
          >
            {`(${rating[1]})`}
          </h1>
        </div>
      </div>

      <div
        className={`w-[100px] h-[full] px-[10px] flex items-center gap-[5px] border-r-[1px] 
        border-opacity-10 ${isDarkmode ? "border-white" : "border-black"}`}
      >
        <h1
          className={`text-sm font-inter font-normal ${
            isDarkmode ? "text-gray-300" : "text-gray-500"
          }`}
        >
          {order}
        </h1>
      </div>

      <div
        className={`w-[100px] h-[full] px-[10px] flex items-center gap-[5px] border-r-[1px] 
        border-opacity-10 ${isDarkmode ? "border-white" : "border-black"}`}
      >
        <h1
          className={`text-sm font-inter font-normal ${
            isDarkmode ? "text-gray-300" : "text-gray-500"
          }`}
        >
          {sales}
        </h1>
      </div>

      <div className="w-[150px] h-[full] px-[10px] flex items-center gap-[5px]">
        <div className="flex gap-[10px] items-center">
          <div className="w-[35px] h-[35px] bg-purple-200 flex justify-center items-center rounded-md cursor-pointer">
            <FaEye className="text-lg text-purple-800" />
          </div>
          <div className="w-[35px] h-[35px] bg-green-200 flex justify-center items-center rounded-md cursor-pointer">
            <HiPencil className="text-lg text-green-800" />
          </div>
          <div className="w-[35px] h-[35px] bg-red-200 flex justify-center items-center rounded-md cursor-pointer">
            <FaTrash className="text-base text-red-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItemCard;
