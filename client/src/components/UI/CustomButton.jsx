/* eslint-disable react/prop-types */
// import React from 'react'

const CustomButton = ({ text, width, onClick }) => {
  return (
    <div className="w-full mt-5 flex justify-center items-center ">
      <button
        onClick={onClick}
        className={`${
          width == "full" ? "w-[80%]" : width === "md" ? "w-[50%]" : "w-content"
        } border p-4 rounded-md text-white `}
        style={{ fontFamily: "montserrat" }}
      >
        {text}
      </button>
    </div>
  );
};

export default CustomButton;
