import React, { useCallback, useEffect, useRef, useState } from "react";

export default function App() {
  const [length, setLength] = useState(16);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");

  // ✅ useRef for input
  const passwordRef = useRef(null);

  // ✅ password generator
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}|;:,.<>?/";

    for (let i = 1; i <= length; i++) {
      const index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // ✅ auto generate when settings change
  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  // ✅ copy password using ref
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();                 // input select
    passwordRef.current?.setSelectionRange(0, 999); // mobile support

    window.navigator.clipboard.writeText(password);
    alert("Copied ✅");
  }, [password]);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-xl bg-gray-800 rounded-xl px-6 py-6 shadow-lg">
        <h1 className="text-white text-2xl font-bold text-center mb-6">
          Password Generator
        </h1>

        {/* ✅ password input + copy */}
        <div className="flex shadow rounded-lg overflow-hidden mb-6">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            className="outline-none w-full py-2 px-3 text-orange-500 font-semibold"
          />

          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 text-white px-6 py-2 font-semibold hover:bg-blue-700"
          >
            Copy
          </button>
        </div>

        {/* ✅ length slider */}
        <div className="flex items-center gap-x-2 text-white mb-4">
          <input
            type="range"
            min={6}
            max={30}
            value={length}
            className="cursor-pointer w-full"
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <span className="text-orange-500 font-bold">Length ({length})</span>
        </div>

        {/* ✅ checkboxes */}
        <div className="flex gap-x-6 text-white">
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label>Numbers</label>
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}
