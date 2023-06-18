/* eslint-disable react/no-unknown-property */
// import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, Float } from "@react-three/drei";
import Selector from "./Selector";
import Models from "./Models";

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      className="w-full h-full z-6"
      camera={{ position: [0, 2, 10], fov: 20 }}
    >
      <Environment preset="city" resolution={256} blur={0.8} intensity={0.5} />

      <ambientLight intensity={0.1} />
      <directionalLight
        castShadow
        intensity={0.5}
        position={[0, 1, 2]}
        color={"orange"}
      />

      <ContactShadows
        resolution={1024}
        position={[0, -0.08, 0]}
        opacity={1}
        scale={10}
        blur={1}
        far={0.9}
      />

      {/* <Suspense fallback={null}> */}
      <Selector>
        <Float speed={4} floatingRange={[0.04, 0.1]}>
          <Models />
        </Float>
      </Selector>
      {/* </Suspense> */}
    </Canvas>
  );
};

export default CanvasModel;
