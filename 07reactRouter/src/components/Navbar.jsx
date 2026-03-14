import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `font-medium transition ${
      isActive ? "text-orange-600" : "text-gray-700 hover:text-orange-600"
    }`;

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          your<span className="text-orange-600">logo</span>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-10 text-[15px]">
          <li>
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/github" className={linkClass}>
              Github
            </NavLink>
          </li>
        </ul>

        {/* Right Buttons */}
        <div className="flex items-center gap-5">
          <button className="text-gray-700 font-medium hover:text-orange-600 transition">
            Log in
          </button>

          <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition">
            Get started
          </button>
        </div>
      </div>
    </nav>
  );
}
