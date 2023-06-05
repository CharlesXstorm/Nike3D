import Canvas from "./canvas";
import Header from "./components/Header";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function App() {
  const [dvWidth, setDvWidth] = useState(1024);
  const [ref, inView, entry] = useInView({
    delay: 50000,
    trackVisibility: true,
  });

  // console.log(inView, entry);

  useEffect(() => {
    setDvWidth(window.innerWidth);
  }, []);

  return (
    <>
      <div className="fixed w-screen h-screen">
        <Home />
        <Nav />
        <Header />
        <div ref={ref} className="fixed w-full h-full">
          <Canvas dvWidth={dvWidth} />
        </div>
      </div>
    </>
  );
}

export default App;
