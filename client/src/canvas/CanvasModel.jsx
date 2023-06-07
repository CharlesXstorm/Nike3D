/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Center,
  ContactShadows,
  OrbitControls,
  SoftShadows,
  Float,
} from "@react-three/drei";
import Selector from "./Selector";
import ShadowCatcher from "./ShadowCatcher";
import * as THREE from "three";
import Background from "./Background";
import Models from "./Models";

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      className="w-full h-full z-6"
      // camera={{ position: [0.5, 8, 1], fov: 20 }}
      // camera={{ position: [0, 2, 10], fov: 20 }}
      camera={{ position: [0, 2, 10], fov: 20 }}
    >
      {/* <Environment preset="city" /> */}
      {/* <color
        attach={"background"}
        args={["#0047ab"]}
      /> */}
      <Environment
        preset="city"
        resolution={256}
        // background
        blur={0.8}
        intensity={0.5}
      />
      {/* <gridHelper args={[20, 20, 0x000000, "teal"]} />
      <primitive object={new THREE.AxesHelper(5)} /> */}
      {/* <fog attach="fog" args={["#101010", 10, 20]} /> */}

      <ambientLight intensity={0.1} />
      <directionalLight
        // shadow-mapSize={1024}
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

      <ContactShadows
        resolution={1024}
        // position={[0, -0.101, 0]}
        position={[0, -0.08, 0]}
        opacity={1}
        scale={10}
        blur={1}
        far={0.9}
      />

      {/* <ShadowCatcher /> */}

      {/* <Center> */}
      <Suspense fallback={null}>
        <Selector>
          <Float speed={4} floatingRange={[0.04, 0.1]}>
            <Models />
          </Float>
        </Selector>
      </Suspense>
      {/* <Background /> */}
      {/* {true && (
        <OrbitControls
         
          maxPolarAngle={1.5}
          minPolarAngle={1}
          maxAzimuthAngle={0.6}
          minAzimuthAngle={-1}
          enablePan={false}
          enableZoom={false}
          rotateSpeed={1}
         
        />
      )} */}
      {/* </Center> */}
      {/* <Environment preset="city" /> */}
    </Canvas>
  );
};

export default CanvasModel;
