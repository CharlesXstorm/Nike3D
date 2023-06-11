import { useState } from "react";
// import Card from "./UI/Card";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { state } from "../store";
import { useSnapshot } from "valtio";
import axios from "axios";

import { textAnimation } from "../utils/animationUtil";

const Tab = () => {
  const [aiTab, setAiTab] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const snap = useSnapshot(state);

  const askAI = async () => {
    try {
      if (!prompt) {
        setError("Enter a prompt");
        return;
      }
      setIsGenerating(true);

      const response = await axios.post("http://localhost:8080/api/v1/dalle", {
        prompt,
      });

      // console.log(response.data);
      state.decalTextures[
        snap.index
      ] = `data:image/png;base64,${response.data.photo}`;
      state.decalVisibility[snap.index] = true;

      setPrompt("");
      setAiTab(false);
    } catch (error) {
      setError("something wrong");
      console.log(error);
    } finally {
      setIsGenerating(false);
    }
  };

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
                value={prompt}
                onChange={(e) => {
                  setError(null);
                  setPrompt(e.currentTarget.value);
                }}
                placeholder="Please enter a prompt"
                className="bg-transparent text-white p-4 backdrop-blur-md outline-none border rounded-md w-full"
              />
              <button
                onClick={askAI}
                className="rounded-md border-none cursor-pointer p-4 w-full text-white bg-[dodgerblue]"
              >
                {isGenerating ? "Asking AI..." : error ? error : "Generate"}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          className="pointer-cursor rounded-s-xl p-2 backdrop-blur-md border"
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
