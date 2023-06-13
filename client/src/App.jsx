import Canvas from "./canvas";
import Header from "./components/Header";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
// import { useInView } from "react-intersection-observer";
import { useSnapshot } from "valtio";
import { AnimatePresence } from "framer-motion";

import { modelList } from "./utils/models";
import { state } from "./store";
import Techs from "./components/Techs";
import Tab from "./components/AiTab";

function App() {
  const [dvWidth, setDvWidth] = useState(1024);
  const [models] = useState([...modelList]);
  // const [ref, inView, entry] = useInView({
  //   delay: 50000,
  //   trackVisibility: true,
  // });

  const snap = useSnapshot(state);

  // console.log(snap.cart);

  // console.log(models[0]);

  useEffect(() => {
    setDvWidth(window.innerWidth);
    window.addEventListener("load", () => {
      setTimeout(() => {
        console.log("loaded");
      }, [1000]);
    });
  }, []);

  return (
    <>
      <div
        style={{
          // backgroundImage: "linear-gradient(45deg,black,white 20%)",
          backgroundImage: "url('/backdrop.jpg')",
        }}
        className="fixed bg-cover w-screen h-screen overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {models.map(
            (item, index) =>
              snap.index === index && (
                <Home key={item.url} desc={item.desc} text={item.text} />
              )
          )}{" "}
        </AnimatePresence>
        <Tab />
        <Nav />
        <Header />
        <div className="fixed w-full h-full">
          <Canvas dvWidth={dvWidth} />
        </div>
      </div>
    </>
  );
}

export default App;
