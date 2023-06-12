/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/Nikegltf.glb
*/
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { useState, useEffect } from "react";
import { state } from "../store";
import { useSnapshot } from "valtio";
import * as THREE from "three";
// import { useInView } from "react-intersection-observer";

import { Icons } from "./Icons";
import { img } from "../../public/img";

const ModelItem = ({ id, url, price, data }) => {
  // const { nodes, materials } = useGLTF("/gltf/NikeFiber2/NikeFiber.gltf");
  const { nodes, materials } = useGLTF(url);
  const snap = useSnapshot(state);

  const mesh = Object.keys(nodes).slice(2);
  const material = Object.keys(materials);
  const color = snap.isClicked[id] ? "red" : "black";

  const decalTexture = useTexture(snap.decalTextures[id]);

  // console.log(snap.favourite.length);

  // const decalTexture = useTexture(
  //   snap.decalTextures
  //     ? `data:image/png;base64,${snap.decalTextures[id]}`
  //     : "/threejs.png"
  // );

  // console.log(decalTexture);

  decalTexture.wrapS = THREE.RepeatWrapping;
  decalTexture.wrapT = THREE.RepeatWrapping;
  decalTexture.repeat.set(3, 3);
  // const decalTexture = "";

  return (
    <group rotation={[-Math.PI / 2, Math.PI, Math.PI / 2]}>
      {/* {mesh.map((item, index) => (
        <mesh
          key={index}
          geometry={nodes[item].geometry}
          material={materials[material[index]]}
        />
      ))}

      <Icons color={color} id={id} price={price} /> */}
      {mesh.map((item, index) =>
        index === 0 || material[1] === "runnerTex2" ? (
          <mesh
            key={index}
            geometry={nodes[item].geometry}
            material={materials[material[index]]}
            castShadow
            receiveShadow
            dispose={null}
          >
            {snap.decalVisibility[snap.index] && (
              <Decal
                position={[-0.25, -0.1, -0.4]}
                scale={3.1}
                map={decalTexture}
                depthTest
                depthWrite={false}
              />
            )}
          </mesh>
        ) : (
          <mesh
            key={index}
            geometry={nodes[item].geometry}
            material={materials[material[index]]}
          />
        )
      )}

      <Icons color={color} id={id} price={price} data={data} />
    </group>
  );
};

useGLTF.preload("/gltf/NikeFiber2/NikeFiber.gltf");

export default ModelItem;
