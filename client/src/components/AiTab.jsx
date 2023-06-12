import { useState, useEffect } from "react";
// import Card from "./UI/Card";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { state } from "../store";
import { useSnapshot } from "valtio";
import axios from "axios";

import { opacityAnimation, textAnimation } from "../utils/animationUtil";

const Tab = () => {
  const [aiTab, setAiTab] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [eve, setEve] = useState("Hi, I'm Eve..");
  const snap = useSnapshot(state);
  const list = [
    "Hi, I'm Eve.. ",
    "your AI design assistant..",
    "I can create designs..",
    "just ask me..",
    "..and I'll create it..",
    "click me to ask.",
  ];
  let cnt = 0;

  useEffect(() => {
    speech();

    // interval();

    return;
  }, []);

  const speech = () => {
    setTimeout(() => {
      if (cnt >= list.length) {
        return;
      }
      setEve(list[cnt]);
      // console.log(list[cnt]);
      cnt++;
      speech();
    }, [2800]);
  };

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
    <div className="absolute pointer-events-none right-0 z-10  h-screen p-0 xl-p-10 flex justify-start items-center align-center">
      <div
        // className={`flex ${
        //   window.innerWidth < 1025 && !aiTab ? "flex-col" : "flex-row"
        // } gap-1em justify-end items-end align-center pointer-events-auto w-[100%] border-2 border-solid border-red-500`}
        className={`flex flex-row gap-1em justify-center items-center pointer-events-auto w-[100%]`}
        style={{ transition: "all 1s linear" }}
      >
        <AnimatePresence>
          {aiTab && (
            <motion.div
              // className="w-[180px] h-[60px] glassmorphism "
              className="flex flex-col justify-end items-end"
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
                className="bg-transparent text-white p-4 backdrop-blur-md outline-none border rounded-md w-[180px]"
              />
              <button
                onClick={askAI}
                className="rounded-md border-none cursor-pointer p-4 w-[180px] text-white bg-[dodgerblue]"
              >
                {isGenerating ? "Asking Eve..." : error ? error : "Ask Eve"}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div
          className={`flex ${
            window.innerWidth < 1025 && !aiTab ? "flex-col" : "flex-row"
          } justify-center items-center`}
        >
          <AnimatePresence>
            {!aiTab && (
              <motion.div
                {...opacityAnimation}
                className="self-start w-[120px] p-4 backdrop-blur-md rounded-s-xl"
              >
                <p className="text-white text-center">{eve} </p>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex self-end flex-col">
            <button
              className="self-center w-[80px] pointer-cursor rounded-s-xl p-2 backdrop-blur-md border"
              onClick={() => {
                setAiTab((prev) => !prev);
              }}
              onMouseOut={() =>
                setTimeout(() => {
                  speech();
                }, [1500])
              }
            >
              <img width="80%" src="/ai.png" alt="ai" />
            </button>
            <button
              className="self-center w-[80px] pointer-cursor rounded-s-xl p-2 backdrop-blur-md"
              onClick={() => {
                state.decalVisibility[snap.index] =
                  !state.decalVisibility[snap.index];
              }}
            >
              <img width="50%" src="/reload.png" alt="ai" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
