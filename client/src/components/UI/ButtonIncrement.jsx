// import React from 'react'
import { useState } from "react";

const ButtonIncrement = () => {
  const [qty, setQty] = useState("1");
  return (
    <>
      <button
        onClick={() => {
          setQty((prev) => +prev + 1);
        }}
      >
        <span className="material-symbols-outlined">add_circle</span>
      </button>
      <span>
        <input
          className="bg-transparent border rounded-md w-[3em] text-center pl-2 "
          type="number"
          value={qty}
          min="1"
          style={{ overflowY: "auto" }}
          onChange={(e) => setQty(e.currentTarget.value)}
        />
      </span>
      <button
        onClick={() => {
          if (qty > 1) {
            setQty((prev) => +prev - 1);
          }
        }}
      >
        <span className="material-symbols-outlined">do_not_disturb_on</span>
      </button>
    </>
  );
};

export default ButtonIncrement;
