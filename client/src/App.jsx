import Canvas from "./canvas";
import Header from "./components/Header";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";

function App() {
  const [dvWidth, setDvWidth] = useState(1024);

  useEffect(() => {
    setDvWidth(window.innerWidth);
  }, []);

  return (
    <>
      <div className="fixed w-screen h-screen">
        <Home />
        <Nav />
        <Header />
        <Canvas dvWidth={dvWidth} />
      </div>
    </>
  );
}

export default App;
