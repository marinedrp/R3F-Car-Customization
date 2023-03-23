/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { shaderMaterial, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { extend } from '@react-three/fiber'
import stripesVertex from '../shaders/stripes.vertex.glsl'
import stripesFragment from '../shaders/stripes.fragment.glsl'

const StripesShaderMaterial = shaderMaterial(
  { },
  stripesVertex,
  stripesFragment
)

extend({ StripesShaderMaterial })

export function Cybertruck(props) {
  const { nodes, materials } = useGLTF("./models/cybertruck.gltf");

  const ref = useRef();

  useEffect(() => {
    materials.lights.toneMapped = false;
    materials.warninglights.toneMapped = false;
    materials.warninglights.color = new THREE.Color(82, 0, 0);
  });
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.interior001.geometry} material={materials.lights} />
      <mesh geometry={nodes.interior001_1.geometry} castShadow>
        <meshStandardMaterial {...materials.body} />
      </mesh>
      <mesh geometry={nodes.interior001_2.geometry}>
        <meshStandardMaterial
          opacity={0.92}
          envMapIntensity={1}
          transparent
          roughness={0.2}
          color={"black"}
        />
      </mesh>
      <mesh
        geometry={nodes.interior001_3.geometry}
        material={materials.glassframes}
        castShadow
      />
      <mesh
        geometry={nodes.interior001_4.geometry}
        material={materials.warninglights}
      />
      <mesh
        geometry={nodes.interior001_5.geometry}
        material={materials.black}
        castShadow
      />
      {/* BODY MESH -> SHADER */}
      <mesh geometry={nodes.interior001_6.geometry}>
        <stripesShaderMaterial color={"red"} opacity={0.2} transparent  />
      </mesh>

      <mesh geometry={nodes.steer.geometry} material={materials.gray} />
      <mesh
        geometry={nodes.tires001.geometry}
        material={materials.tires}
        castShadow
      />
      <mesh
        geometry={nodes.tires001_1.geometry}
        material={materials.rims}
        castShadow
      />
    </group>
  );
}

useGLTF.preload("./models/cybertruck.gltf");
