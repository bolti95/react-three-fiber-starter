import react, { useRef } from "react";
import Floor from "./Floor";
import Lighting from "./Lighting";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Stars, Sky } from "@react-three/drei";

const texture = new THREE.TextureLoader().load("IMG_6337.JPG");
export default function Scene(props) {
  const mesh = useRef();
  useFrame(
    () => ((mesh.current.rotation.y += 0.01), (mesh.current.rotation.x += 0.01))
  );
  return (
    <>
      <Lighting />
      <Stars
        radius={30}
        depth={50}
        count={5000}
        factor={40}
        saturation={20}
        fade
      />
      {/* <Sky
        distance={400}
        sunPosition={[0, 2, 0]}
        inclination={10}
        azimuth={1.105}
        {...props}
      /> */}
      <fog attach="fog" args={['#cc7b92', 40, 390]} />
      <Floor />
      <mesh {...props} ref={mesh}>
        <boxBufferGeometry attach="geometry" />
        <meshStandardMaterial map={texture} attach="material" />
      </mesh>
    </>
  );
}