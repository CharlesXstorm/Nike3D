/* eslint-disable react/prop-types */
// import React from 'react'

const CustomButton = (props) => {
  return (
    <>
      <button
        className="pointer-cursor"
        onClick={() => {
          props.onClick((prev) => !prev);
        }}
      >
        <img width="50%" src="/ai.png" alt="ai" />
      </button>
    </>
  );
};

export default CustomButton;
