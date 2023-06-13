/* eslint-disable react/prop-types */
// import React from 'react'
import { motion } from "framer-motion";
import { textAnimation } from "../../utils/animationUtil";

const Card = ({ children, position, p }) => {
  return (
    <motion.div
      {...textAnimation(position, "card")}
      className={`absolute z-10 ${
        position === "left" ? "left-0" : "right-0"
      } top-20 sm-top-[7em] rounded-md backdrop-blur-md p-${p} pt-10 pb-10 flex flex-col gap-[1em] pointer-events-auto`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
