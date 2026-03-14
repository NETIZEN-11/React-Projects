import React from "react";

export default function Contact() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 flex justify-center">
        <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 items-center">
          {/* Left box */}
          <div className="bg-gray-50 p-8 rounded-xl shadow">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Get in touch:
            </h2>
            <p className="text-gray-600 mt-2">
              Fill in the form to start a conversation
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-white shadow">
                  📍
                </div>
                <p className="text-gray-700 font-medium leading-6">
                  Acme Inc, Street, <br /> State, Postal Code
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-white shadow">
                  📞
                </div>
                <p className="text-gray-700 font-medium">+44 1234567890</p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-white shadow">
                  ✉️
                </div>
                <p className="text-gray-700 font-medium">info@acme.org</p>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="bg-white p-8 rounded-xl shadow border">
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="text"
                placeholder="Telephone Number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
              />

              <button
                type="submit"
                className="w-40 bg-orange-600 text-white font-semibold py-3 rounded-lg hover:bg-orange-700 transition shadow"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
