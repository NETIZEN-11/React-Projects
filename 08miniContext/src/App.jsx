import React from "react";
import ProductCard from "./components/ProductCard";
import { useTheme } from "./context/ThemeContext";


export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-all duration-300
      ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}
    >
      {/* Toggle */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition
          ${theme === "dark" ? "bg-blue-500" : "bg-gray-400"}`}
          onClick={toggleTheme}
        >
          <div
            className={`h-5 w-5 bg-white rounded-full shadow-md transform transition
            ${theme === "dark" ? "translate-x-7" : "translate-x-0"}`}
          />
        </div>
        <span className="font-medium text-lg">
          {theme === "dark" ? "Dark" : "Light"} Theme
        </span>
      </div>

      {/* Card */}
      <ProductCard />
    </div>
  );
}

