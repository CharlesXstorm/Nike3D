// import React from 'react'
import style from "./ProgressBar.module.css";

const ProgressBar = () => {
  return (
    <div className="container relative rounded-lg overflow-hidden w-[80%] h-[1em] border">
      <div
        className={`${style.item} absolute left-0 w-[2%] h-[1em] bg-green-500 `}
      ></div>
    </div>
  );
};

export default ProgressBar;
