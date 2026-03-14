import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold">
            your<span className="text-orange-600">logo</span>
          </h1>
        </div>

        {/* Resources */}
        <div>
          <h2 className="font-semibold text-gray-800 mb-4 uppercase text-sm tracking-wide">
            Resources
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li className="hover:text-orange-600 cursor-pointer">Home</li>
            <li className="hover:text-orange-600 cursor-pointer">About</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="font-semibold text-gray-800 mb-4 uppercase text-sm tracking-wide">
            Follow Us
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li className="hover:text-orange-600 cursor-pointer">Github</li>
            <li className="hover:text-orange-600 cursor-pointer">Discord</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h2 className="font-semibold text-gray-800 mb-4 uppercase text-sm tracking-wide">
            Legal
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li className="hover:text-orange-600 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-orange-600 cursor-pointer">
              Terms & Conditions
            </li>
          </ul>
        </div>
      </div>

      {/* bottom */}
      <div className="border-t border-gray-200 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <h1 className="text-xl font-bold">
            your<span className="text-orange-600">logo</span>
          </h1>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
