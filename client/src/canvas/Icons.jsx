/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/icons.gltf
*/

import { useState } from "react";
import { Text3D, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";
import { state } from "../store";
import { useSnapshot } from "valtio";
import { motion } from "framer-motion-3d";
import * as THREE from "three";

// import bold from "../";

export function Icons() {
  const { nodes } = useGLTF("/iconss.gltf");
  const snap = useSnapshot(state);
  const [scale, setScale] = useState(1);
  const cart = useRef();
  const heart = useRef();

  // const toggleState = (toggle) => {
  //   switch (toggle) {
  //     case "heartColor":
  //       state.heartColor = snap.heartColor === "black" ? "red" : "black";
  //       break;
  //     default:
  //       return;
  //   }
  // };

  useFrame((state, delta) => {
    // console.log(scale);

    easing.dampC(heart.current.material.color, snap.heartColor, 0.25, delta);
    easing.dampC(cart.current.material.color, snap.cartColor, 0.25, delta);
    easing.dampE(cart.current.scale, [scale, scale, scale], 0.05, delta);
  });
  return (
    <group rotation={[0, -Math.PI / 2, 0]} position={[-1.23, 0.4, 0]}>
      <motion.mesh
        geometry={nodes.heartcart_1.geometry}
        onClick={() => {
          setScale(1.1);
          setTimeout(() => {
            setScale(1);
          }, [50]);
        }}

        // onClick={() => console.log("clicked")}
      >
        <meshStandardMaterial
          attach="material"
          color={"lime"}
          blending={THREE.AdditiveBlending}
          roughness={1}
          opacity={0.2}
          envMapIntensity={2}
          transparent
          depthWrite={false}
        />
      </motion.mesh>
      <motion.mesh
        ref={cart}
        geometry={nodes.heartcart_3.geometry}
        onClick={() => {
          setScale(1.1);
          setTimeout(() => {
            setScale(1);
          }, [50]);
        }}
      >
        <meshStandardMaterial />
      </motion.mesh>

      <motion.mesh
        ref={heart}
        geometry={nodes.heartcart_4.geometry}
        whileTap={{ scale: 1.1 }}
        // onUpdate={alert("click")}
        // onAnimationComplete={alert("click")}
        // onTapStart={toggleState("heartColor")}
        onTap={() => {
          snap.heartColor === "black"
            ? (state.heartColor = "red")
            : (state.heartColor = "black");
        }}
      >
        <meshStandardMaterial />
      </motion.mesh>
      <Text3D
        size={0.12}
        scale-z={0.2}
        curveSegments={32}
        bevelEnabled
        bevelSize={0.01}
        bevelThickness={0.06}
        rotation-x={[-Math.PI / 2]}
        rotation-y={[-Math.PI / 2]}
        position-z={-0.9}
        position-y={-0.8}
        font={"../../fonts/inter_Bold.json"}
      >
        N25,000
        {/* <meshNormalMaterial /> */}
        <meshPhysicalMaterial color={"orange"} />
      </Text3D>
    </group>
  );
}

useGLTF.preload("/iconss.gltf");
