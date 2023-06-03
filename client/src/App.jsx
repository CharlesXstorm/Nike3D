import Canvas from "./canvas";
import Header from "./components/Header";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="fixed w-screen h-screen">
        <Home />
        <Nav />
        <Header />
        <Canvas />
      </div>
    </>
  );
}

export default App;
