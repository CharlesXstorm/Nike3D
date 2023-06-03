/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/Nikegltf.glb
*/

import { useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Decal, Html, useGLTF } from "@react-three/drei";
import { easing } from "maath";
import Tab from "../components/Tab";
import * as THREE from "three";

export function Model() {
  const { nodes, materials } = useGLTF("/Nike3D.glb");

  // const logoTexture = useTexture("/threejs.png");

  // const fabric = useTexture({
  //   map: "/Nikebody/body_Base_Color.jpg",
  //   normalMap: "/Nikebody/body_Normal_DirectX.jpg",
  //   roughnessMap: "/Nikebody/body_Roughness.jpg",
  //   aoMap: "/Nikebody/body_Mixed_AO.jpg",
  //   metalnessMap: "/Nikebody/body_Metallic.jpg",
  // });

  // fabric.map.wrapS = fabric.map.wrapT = THREE.RepeatWrapping;
  // fabric.map.repeat.set(1, 1);
  // const soleMat = useTexture({
  //   map: "/Nikesole/1001_Base_Color.jpg",
  //   normalMap: "/Nikesole/1001_Normal_DirectX.jpg",
  //   roughnessMap: "/Nikesole/1001_Roughness.jpg",
  //   aoMap: "/Nikesole/1001_Mixed_AO.jpg",
  // });

  // const [colors] = useState("red");

  // useFrame(({ delta }) => {
  //   easing.dampC(materials.soleText.color, colors, 0.25, delta);
  // });

  return (
    <group rotation={[-Math.PI / 2, Math.PI, Math.PI / 2]}>
      <mesh
        geometry={nodes.sneaker_1.geometry}
        material={materials.bodyText}
        castShadow
        receiveShadow
      />

      {/* <Decal
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={1}
          map={logoTexture}
          map-anisotropy={16}
          depthTest={false}
          depthWrite={false}
        />
      </mesh> */}
      <mesh
        geometry={nodes.sneaker_2.geometry}
        material={materials.soleText}
        castShadow
        receiveShadow
      />
      <mesh position={[0, -0.5, -1.2]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[0.5, 1, 0.05]} />
        <meshStandardMaterial
          attach="material"
          color={"lime"}
          blending={THREE.AdditiveBlending}
          roughness={0.2}
          opacity={0.8}
          envMapIntensity={2}
          transparent
        />
        {/* <Html
          scale={5}
          rotation={[0, Math.PI / 2, 0]}
          position={[0, -0.5, 1.5]}
          transform
          occlude
        >
          <Tab />
        </Html> */}
      </mesh>

      {/* <mesh
          geometry={nodes.NikeMidPoly_3.geometry}
          material={materials.part2}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.NikeMidPoly_4.geometry}
          material={materials.part5}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.NikeMidPoly_5.geometry}
          material={materials.part10}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.NikeMidPoly_6.geometry}
          material={materials.part6}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.NikeMidPoly_7.geometry}
          material={materials.part7}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.NikeMidPoly_8.geometry}
          material={materials.part3}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.NikeMidPoly_9.geometry}
          material={materials.part8}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.NikeMidPoly_10.geometry}
          material={materials.part9}
          castShadow
          receiveShadow
        /> */}
    </group>
  );
}

useGLTF.preload("/Nike3D.glb");

export default Model;
