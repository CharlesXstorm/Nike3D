/* eslint-disable react/no-unknown-property */
// import React from 'react'
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Selector from "./Selector";
import Shoe from "./Shoe";
import ShadowCatcher from "./ShadowCatcher";

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      className="w-full h-full z-6"
      // camera={{ position: [0.5, 8, 1], fov: 20 }}
      camera={{ position: [0, 2, 10], fov: 20 }}
    >
      {/* <Environment preset="city" /> */}
      {/* <color
        attach={"background"}
        args={["#0047ab"]}
      /> */}
      <Environment preset="city" intensity={0.5} />
      {/* <fog attach="fog" args={["#101010", 10, 20]} /> */}
      {/* <OrbitControls
        maxPolarAngle={1.5}
        minPolarAngle={1}
        maxAzimuthAngle={-1.5}
        rotateSpeed={0.5}
        enablePan={false}
        autoRotate={true}
      /> */}
      <ambientLight intensity={0.1} />
      <directionalLight
        shadow-mapSize={1024}
        castShadow
        intensity={0.5}
        position={[0, 1, 2]}
        color={"orange"}
      />
      {/* <directionalLight
        shadow-mapSize={1024}
        castShadow
        intensity={0.6}
        position={[-2, 1, 2]}
        color={"blue"}
      /> */}

      {/* <ContactShadows
        resolution={512}
        position={[0, -0.101, 0]}
        opacity={1}
        scale={10}
        blur={1}
        far={0.1}
      /> */}

      <Center>
        <Selector>
          {/* <Float floatingRange={[0.06, 0.09]}> </Float>  */}
          <Shoe />

          {/* <ShadowCatcher /> */}
        </Selector>
      </Center>
      {/* <Environment preset="city" /> */}
    </Canvas>
  );
};

export default CanvasModel;
