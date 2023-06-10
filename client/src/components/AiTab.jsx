import { useState } from "react";
// import Card from "./UI/Card";
import { textAnimation } from "../utils/animationUtil";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const Tab = () => {
  const [aiTab, setAiTab] = useState(false);
  return (
    <div className="absolute pointer-events-none right-0 z-10  h-screen p-0 xl-p-10 flex flex-col justify-center align-center">
      <div className="flex flex-row gap-1em justify-end pointer-events-auto">
        <AnimatePresence>
          {aiTab && (
            <motion.div
              className="w-[180px] h-[100px] glassmorphism "
              {...textAnimation("right", "card")}
            >
              <textarea
                rows={5}
                placeholder="Ask AI..."
                className="bg-transparent p-4 backdrop-blur-md outline-none border rounded-md w-full"
              />
              <button className="rounded-md border-none cursor-pointer p-4 w-full text-white bg-[dodgerblue]">
                Generate
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        <button
          className="pointer-cursor"
          onClick={() => {
            setAiTab((prev) => !prev);
          }}
        >
          <img width="50%" src="/ai.png" alt="ai" />
        </button>
      </div>
    </div>
  );
};

export default Tab;
