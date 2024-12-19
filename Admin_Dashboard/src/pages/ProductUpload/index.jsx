import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductUpload = ({ isDarkmode, productId, initialData }) => {
  // Set initial states based on provided `initialData` (if editing)
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [category, setCategory] = useState(initialData?.category || "");
  const [brand, setBrand] = useState(initialData?.brand || "");
  const [regularPrice, setRegularPrice] = useState(initialData?.regularPrice || "");
  const [discountPrice, setDiscountPrice] = useState(initialData?.discountPrice || "");
  const [shippingFee, setShippingFee] = useState(initialData?.shippingFee || "");
  const [taxRate, setTaxRate] = useState(initialData?.taxRate || "");
  const [tags, setTags] = useState(initialData?.tags || "");
  const [images, setImages] = useState(initialData?.images || []);
  
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) =>
      URL.createObjectURL(file)
    );
    setImages((prev) => [...prev, ...newImages]);
  };

  const handleUpdate = async () => {
    const formData = new FormData();

    // Append all the fields for updating
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("brand", brand);
    formData.append("regularPrice", regularPrice);
    formData.append("discountPrice", discountPrice);
    formData.append("shippingFee", shippingFee);
    formData.append("taxRate", taxRate);
    formData.append("tags", tags);
    images.forEach((image) => formData.append("images", image.file));

    try {
      const response = await fetch(`http://localhost:5000/api/products/update/${productId}`, {
        method: "PUT", // Use PUT for updating an existing product
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Product updated:", result);

      // Navigate to the product detail page after update
      navigate(`/product/${productId}`);
    } catch (error) {
      console.error("Error in fetch request:", error);
    }
  };

  return (
    <div
      className={`w-full h-auto p-[20px] ${isDarkmode ? "bg-[#071739]" : "bg-white"} 
      transition-all duration-200 ease-in-out`}
    >
      <h1
        className={`text-2xl font-bold ${isDarkmode ? "text-white" : "text-[#403E57]"}`}
      >
        Update Product
      </h1>

      {/* Form Fields */}
      <div className="mt-[20px] grid grid-cols-1 lg:grid-cols-1 gap-[20px]">
        {/* Basic Information */}
        <div
          className={`col-span-2 p-[20px] rounded-md shadow-sm ${
            isDarkmode ? "bg-[#112143]" : "bg-[#F9F9F9]"
          }`}
        >
          <h2
            className={`font-semibold mb-[10px] ${
              isDarkmode ? "text-white" : "text-black"
            }`}
          >
            Basic Information
          </h2>
          <div className="grid grid-cols-1 gap-[10px]">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`p-[10px] rounded-md border ${
                isDarkmode ? "bg-[#0B2149] text-white" : "bg-white text-black"
              } outline-none`}
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={`p-[10px] col-span-2 rounded-md border ${
                isDarkmode ? "bg-[#0B2149] text-white" : "bg-white text-black"
              } outline-none`}
              rows="3"
            ></textarea>
            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={`p-[10px] rounded-md border ${
                isDarkmode ? "bg-[#0B2149] text-white" : "bg-white text-black"
              } outline-none`}
            />
            <input
              type="text"
              placeholder="Brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className={`p-[10px] rounded-md border ${
                isDarkmode ? "bg-[#0B2149] text-white" : "bg-white text-black"
              } outline-none`}
            />
            <input
              type="number"
              placeholder="Regular Price"
              value={regularPrice}
              onChange={(e) => setRegularPrice(e.target.value)}
              className={`p-[10px] rounded-md border ${
                isDarkmode ? "bg-[#0B2149] text-white" : "bg-white text-black"
              } outline-none`}
            />
            <input
              type="number"
              placeholder="Discount Price"
              value={discountPrice}
              onChange={(e) => setDiscountPrice(e.target.value)}
              className={`p-[10px] rounded-md border ${
                isDarkmode ? "bg-[#0B2149] text-white" : "bg-white text-black"
              } outline-none`}
            />
            <input
              type="number"
              placeholder="Shipping Fee"
              value={shippingFee}
              onChange={(e) => setShippingFee(e.target.value)}
              className={`p-[10px] rounded-md border ${
                isDarkmode ? "bg-[#0B2149] text-white" : "bg-white text-black"
              } outline-none`}
            />
            <input
              type="text"
              placeholder="Tax Rate"
              value={taxRate}
              onChange={(e) => setTaxRate(e.target.value)}
              className={`p-[10px] rounded-md border ${
                isDarkmode ? "bg-[#0B2149] text-white" : "bg-white text-black"
              } outline-none`}
            />
            <input
              type="text"
              placeholder="Tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className={`p-[10px] col-span-2 rounded-md border ${
                isDarkmode ? "bg-[#0B2149] text-white" : "bg-white text-black"
              } outline-none`}
            />
          </div>
        </div>
      </div>

      {/* Media and Publish */}
      <div
        className={`mt-[20px] p-[20px] rounded-md shadow-sm ${
          isDarkmode ? "bg-[#112143]" : "bg-[#F9F9F9]"
        }`}
      >
        <h2
          className={`font-semibold mb-[10px] ${
            isDarkmode ? "text-white" : "text-black"
          }`}
        >
          Media and Publish
        </h2>
        <div className="flex gap-[10px] flex-wrap">
          {images.map((img, idx) => (
            <div key={idx} className="relative w-[100px] h-[100px]">
              <img
                src={img}
                alt="Uploaded"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          ))}
          <label
            className={`w-[100px] h-[100px] border-dashed border-2 rounded-md flex items-center justify-center cursor-pointer ${
              isDarkmode ? "border-[#0B2149]" : "border-gray-300"
            }`}
          >
            <input
              type="file"
              multiple
              className="hidden"
              onChange={handleImageUpload}
            />
            Upload
          </label>
        </div>
      </div>

      {/* Publish Button */}
      <div className="mt-[20px] flex justify-center">
        <button
          onClick={handleUpdate}
          className="px-[20px] py-[10px] bg-[#0858F7] text-white rounded-md"
        >
          Update and View
        </button>
      </div>
    </div>
  );
};

export default ProductUpload;
