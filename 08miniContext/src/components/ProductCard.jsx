import React from "react";

import { useTheme } from "../context/ThemeContext";

export default function ProductCard() {
  const { theme } = useTheme();

  return (
    <div
      className={`w-[340px] rounded-2xl shadow-lg overflow-hidden transition-all duration-300 
      ${theme === "dark" ? "bg-slate-800 text-white" : "bg-white text-black"}`}
    >
      {/* Image */}
      <div className="p-4">
        <div className="rounded-xl overflow-hidden">
          <img
            src="https://i.ibb.co/4V9C6fS/apple-watch.jpg"
            alt="product"
            className="w-full h-44 object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pb-5">
        <h2 className="font-semibold text-lg leading-snug">
          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <div className="flex text-yellow-400">
            {"★★★★★".split("").map((star, i) => (
              <span key={i}>{star}</span>
            ))}
          </div>
          <span className="text-sm px-2 py-1 rounded bg-blue-500 text-white">
            4.0
          </span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-5">
          <p className="text-2xl font-bold">$599</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
