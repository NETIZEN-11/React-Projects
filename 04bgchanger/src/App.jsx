import React, { useState } from "react";


export default function App() {
  const [color, setColor] = useState("white");

  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "black",
    "gray",
    "brown",
    "teal",
    "lime",
  ];

  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-3xl font-bold mb-6">Background: {color}</h1>

      <div className="flex flex-wrap gap-3 justify-center px-5">
        {colors.map((clr) => (
          <button
            key={clr}
            onClick={() => setColor(clr)}
            className="px-4 py-2 rounded-lg text-white font-semibold shadow"
            style={{ backgroundColor: clr }}
          >
            {clr}
          </button>
        ))}
      </div>
    </div>
  );
}


