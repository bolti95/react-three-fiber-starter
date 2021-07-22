import react, { useRef } from "react";
import * as THREE from "three";

export default function Floor() {
  return (
    <mesh
      recieveShadow
      scale={1000}
      position={[0, -60, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color="blue" />
    </mesh>
  );
}
