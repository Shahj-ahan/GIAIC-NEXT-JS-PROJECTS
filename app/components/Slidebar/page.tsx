import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 p-4 border-r border-gray-300">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search Product"
          className="w-full p-2 border rounded"
        />
        <button className="mt-2 w-full bg-orange-500 text-white p-2 rounded">
          Search
        </button>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Category</h3>
        <ul className="space-y-1">
          {[
            "Sandwiches",
            "Burger",
            "Chicken Chap",
            "Drink",
            "Pizza",
            "Thai",
            "Non-Veg",
            "Uncategorized",
          ].map((category, index) => (
            <li key={index}>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <img
          src="/Hackathon/shop/slidbar-img.png"
          alt="Featured"
          className="w-full rounded"
        />
        <div className="mt-2 text-center">
          <h4 className="text-orange-500 font-semibold">Classic Restaurant</h4>
          <p>45.00$</p>
          <button className="mt-2 bg-orange-500 text-white p-2 rounded">
            Shop Now
          </button>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Filter By Price</h3>
        <input type="range" min="0" max="8000" className="w-full" />
        <button className="mt-2 w-full bg-orange-500 text-white p-2 rounded">
          Filter
        </button>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Latest Products</h3>
        <ul className="space-y-4">
          {["Pizza", "Cupcake", "Cookies", "Burger"].map((product, index) => (
            <li key={index} className="flex items-center">
              <img
                src="/Hackathon/shop/slidbar-product-img.png"
                alt={product}
                className="w-12 h-12 rounded"
              />
              <div className="ml-4">
                <p className="font-semibold">{product}</p>
                <p className="text-orange-500">25.00$</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Product Tags</h3>
        <div className="flex flex-wrap gap-2">
          {["Services", "Our Menu", "Pizza", "Cupcake", "Burger", "Cookies"].map(
            (tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-sm px-2 py-1 rounded"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
