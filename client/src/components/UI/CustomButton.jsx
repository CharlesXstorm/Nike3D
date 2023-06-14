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
      {/* <button
        className="pointer-cursor"
        onClick={() => {
          props.onClick((prev) => !prev);
        }}
      >
        <img width="50%" src={props.src} alt="ai" />
      </button> */}
    </div>
  );
};

export default CustomButton;
