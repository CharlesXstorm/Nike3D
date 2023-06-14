import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useSnapshot } from "valtio";
import { AnimatePresence } from "framer-motion";

import { state } from "./store";
import { modelList } from "./utils/models";
import Canvas from "./canvas";
import Header from "./components/Header";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Tab from "./components/AiTab";
import Loader from "./components/UI/Loader";

function App() {
  const [dvWidth, setDvWidth] = useState(1024);
  const [models] = useState([...modelList]);
  const [loaded, setLoaded] = useState(false);
  const [done, setDone] = useState(false);

  const snap = useSnapshot(state);

  useEffect(() => {
    setDvWidth(window.innerWidth);
    window.addEventListener("load", () => {
      setTimeout(() => {
        setLoaded(true);
      }, [1500]);
    });
  }, []);

  return (
    <>
      <div
        style={{
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
        <Header cart={snap.cart} />
        <div className="fixed w-full h-full">
          <Canvas dvWidth={dvWidth} />
        </div>

        {!done &&
          createPortal(
            <Loader loaded={loaded} setDone={setDone} />,
            document.getElementById("loader")
          )}
      </div>
    </>
  );
}

export default App;
