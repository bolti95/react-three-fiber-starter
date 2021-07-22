import react, { useRef } from "react";
import * as THREE from "three";

export default function Lighting() {
  return (
    <>
      <directionalLight
        distance={20}
        position={[0, 0, 50]}
        color="red"
        intensity={0.9}
      />
      <directionalLight
        distance={20}
        position={[0, 10, 0]}
        rotation={[0, -5, 0]}
        color="red"
        intensity={10}
      />
      <ambientLight intensity={0.4} />
    </>
  );
}
