"use client";
import React, { useState } from "react";
const Quantity = () => {
  const [num, setnum] = useState(1);
  return (
    <>
      <div className="flex justify-center items-center gap-x-3">
        <div
          className="cursor-pointer border h-7 w-7 rounded-full flex justify-center items-center"
          onClick={() => {
            setnum(num <= 1 ? 1 : num - 1);
          }}
        >
          -
        </div>
        <span>{num}</span>

        <div
          className=" cursor-pointer border h-7 w-7 rounded-full flex justify-center items-center"
          onClick={() => {
            setnum(num + 1);
          }}
        >
          +
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Quantity;