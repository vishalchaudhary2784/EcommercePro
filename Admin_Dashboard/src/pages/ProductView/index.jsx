import React from "react";

const ProductView = ({ isDarkmode }) => {
  return (
    <div
      className={`min-h-screen p-5 ${
        isDarkmode ? "bg-[#071739] text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Product Container */}
      <div
        className={`max-w-6xl mx-auto shadow-lg rounded-lg overflow-hidden ${
          isDarkmode ? "bg-[#0A1F44]" : "bg-white"
        }`}
      >
        {/* Product Header */}
        <div className="flex flex-col md:flex-row">
          {/* Product Image Section */}
          <div
            className={`md:w-1/2 p-5 flex flex-col items-center border-b md:border-r ${
              isDarkmode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <img
              src="https://via.placeholder.com/350"
              alt="product"
              className="w-full h-auto rounded"
            />
            <div className="flex space-x-2 mt-4">
              {[1, 2, 3].map((_, index) => (
                <img
                  key={index}
                  src="https://via.placeholder.com/80"
                  alt="thumb"
                  className={`w-16 h-16 border rounded-lg ${
                    isDarkmode ? "border-gray-600" : "border-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 p-5">
            <h2 className="text-2xl font-bold mb-2">
              Formal suits for men wedding slim fit 3 piece dress business party
              jacket
            </h2>
            <ul className="text-sm mb-4">
              <li>
                <strong>Brand:</strong> Ecstasy
              </li>
              <li>
                <strong>Category:</strong> Man's
              </li>
              <li>
                <strong>Price:</strong>{" "}
                <span className="line-through text-red-500">$42.00</span>{" "}
                <span className="text-green-500 font-bold">$37.00</span>
              </li>
              <li>
                <strong>Color:</strong> Red, Blue, Green, Yellow, Purple
              </li>
              <li>
                <strong>Size:</strong> SM, MD, LG, XL, XXL
              </li>
              <li>
                <strong>Stock:</strong> (68) Pieces
              </li>
              <li>
                <strong>Published:</strong> 02 Feb 2020
              </li>
            </ul>
          </div>
        </div>

        {/* Product Description */}
        <div
          className={`p-5 border-t ${
            isDarkmode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <h3 className="text-lg font-semibold mb-2">Product Description</h3>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            repellendus expedita esse cupiditate quos doloremque rerum.
            Consequatur voluptate deserunt repellat tenetur debitis!
          </p>
        </div>

        {/* Rating Analytics */}
        <div
          className={`p-5 border-t ${
            isDarkmode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <h3 className="text-lg font-semibold mb-2">Rating Analytics</h3>
          <div className="flex justify-between items-center">
            <div>
              {[
                { label: "5 Star", count: 22 },
                { label: "4 Star", count: 6 },
                { label: "3 Star", count: 5 },
                { label: "2 Star", count: 3 },
                { label: "1 Star", count: 2 },
              ].map((item, index) => (
                <p key={index} className="mb-1">
                  {item.label}: ({item.count})
                </p>
              ))}
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">4.9</p>
              <p className="text-yellow-500 text-lg">★★★★★</p>
              <p className="text-sm text-gray-500">Your Average Rating Star</p>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <div
          className={`p-5 border-t ${
            isDarkmode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>

          {/* Review Cards */}
          {["Miron Mahmud", "Tahmina Bonny", "Labonno Khan"].map(
            (name, index) => (
              <div
                key={index}
                className={`border p-4 rounded-lg mb-3 shadow-sm ${
                  isDarkmode ? "bg-[#0A2540] border-gray-600" : "bg-gray-50"
                }`}
              >
                <p className="font-semibold mb-1">{name}</p>
                <p className="text-sm">{index === 0 ? "25 minutes ago" : index === 1 ? "3 weeks ago" : "15 days ago"}</p>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo
                  nostrum dolore fugiat ducimus labore debitis unde!
                </p>
              </div>
            )
          )}

          {/* Reply Form */}
          <div className="mt-6">
            <textarea
              rows="4"
              placeholder="Write your reply here"
              className={`w-full p-3 border rounded-md focus:outline-none ${
                isDarkmode ? "bg-[#071739] text-white border-gray-600" : ""
              }`}
            ></textarea>
            <button
              className={`px-5 py-2 rounded-md mt-2 ${
                isDarkmode
                  ? "bg-blue-600 text-white"
                  : "bg-blue-500 text-white"
              }`}
            >
              Drop Your Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
