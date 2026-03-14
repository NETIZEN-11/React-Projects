import React from "react";
import aboutImg from "../about.jpg";



export default function About() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        {/* Left */}
        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="about"
            className="w-[520px] rounded-xl shadow-lg"
          />
        </div>

        {/* Right */}
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 leading-snug">
            React development is carried out <br />
            by passionate developers
          </h1>

          <p className="text-gray-600 mt-5 leading-7">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis
            voluptatem accusantium nemo perspiciatis delectus atque autem!
            Voluptatum tenetur beatae unde aperiam, repellat expedita
            consequuntur! Officiis id consequuntur atque doloremque!
          </p>

          <p className="text-gray-600 mt-5 leading-7">
            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
            expedita at? Asperiores nemo possimus nesciunt dicta veniam
            aspernatur quam mollitia.
          </p>
        </div>
      </div>
    </section>
  );
}
