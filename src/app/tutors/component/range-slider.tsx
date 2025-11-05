"use client";
import React, { useState, useEffect, useRef } from "react";

const RangeSlider = () => {
  const [value, setValue] = useState(50);
  const rangeRef = useRef<HTMLInputElement>(null);

  // Update gradient dynamically as the slider moves
  useEffect(() => {
    if (rangeRef.current) {
      const min = Number(rangeRef.current.min);
      const max = Number(rangeRef.current.max);
      const percent = ((value - min) / (max - min)) * 100;
      rangeRef.current.style.background = `linear-gradient(to right, #84cc16 ${percent}%, #E1EFC6 ${percent}%)`;
    }
  }, [value]);

  return (
    <div className="w-full max-w-md">
      <label
        htmlFor="price_range"
        className="text-sm text-brandBlack font-medium mb-2 block"
      >
        Price Range (per hour)
      </label>

      <input
        ref={rangeRef}
        type="range"
        id="price_range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="range-custom w-full"
      />

      <div className="flex justify-between text-sm mt-1 text-[#565D6D]">
        <span>₦0</span>
        <span>₦{value * 100}</span>
      </div>

      <style jsx>{`
        .range-custom {
          appearance: none;
          width: 100%;
          height: 6px;
          border-radius: 5px;
          background: linear-gradient(to right, #84cc16 50%, #e1efc6 50%);
          outline: none;
          cursor: pointer;
          transition: background 0.1s linear;
        }

        /* WebKit browsers (Chrome, Safari, Edge) */
        .range-custom::-webkit-slider-thumb {
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #fff;
          border: 2px solid #84cc16;
          cursor: pointer;
          margin-top: -6px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .range-custom::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 0 0 4px rgba(132, 204, 22, 0.2);
        }

        /* Firefox */
        .range-custom::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #fff;
          border: 2px solid #84cc16;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .range-custom::-moz-range-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 0 0 4px rgba(132, 204, 22, 0.2);
        }

        .range-custom::-moz-range-track {
          background: transparent;
        }
      `}</style>
    </div>
  );
};

export default RangeSlider;
