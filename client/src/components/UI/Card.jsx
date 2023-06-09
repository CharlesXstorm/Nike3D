/* eslint-disable react/prop-types */
// import React from 'react'
import { motion } from "framer-motion";
import { textAnimation } from "../../utils/animationUtil";

const Card = ({ children, position }) => {
  return (
    <motion.div
      {...textAnimation("left", "card")}
      className={`absolute z-10 ${
        position === "left" ? "left-0" : "right-0"
      } top-20 sm-top-[7em] rounded-md backdrop-blur-md p-20 pt-10 pb-10 flex flex-col gap-[1em]`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
