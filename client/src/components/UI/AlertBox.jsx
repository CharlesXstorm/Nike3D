// import React from 'react'

import ProgressBar from "./ProgressBar";
import { motion } from "framer-motion";
import { textAnimation } from "../../utils/animationUtil";

const AlertBox = ({ text, progress, error }) => {
  return (
    <motion.div
      {...textAnimation("default", "spring")}
      className="flex flex-col justify-center items-center gap-5 p-5 absolute w-[220px] h-[120px] rounded-md backdrop-blur-md left-['calc(50% - 110px)'] top-10 border"
    >
      <div className="flex flex-row gap-2">
        <p className="text-white" style={{ fontFamily: "montserrat" }}>
          {text}
        </p>
        <span
          className={`material-symbols-outlined ${
            error ? "text-red-500" : "text-green-500"
          }`}
        >
          {error ? "error" : "check_circle"}
        </span>
      </div>

      {progress && <ProgressBar />}
    </motion.div>
  );
};

export default AlertBox;
