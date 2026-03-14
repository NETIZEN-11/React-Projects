import React from "react";
import heroImg from "../hero.jpg.jpeg"; // ✅ image name hero.png

export default function Home() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="flex justify-center">
          <img src={heroImg} alt="hero" className="w-[380px]" />
        </div>

        {/* Right */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-gray-900">
            Download Now
          </h1>
          <h2 className="text-3xl font-bold text-gray-800 mt-2">Lorem Ipsum</h2>

          <button className="mt-8 bg-orange-600 text-white px-7 py-3 rounded-lg shadow hover:bg-orange-700 transition flex items-center gap-2 mx-auto md:mx-0">
            ▶ Download now
          </button>
        </div>
      </div>
    </section>
  );
}
