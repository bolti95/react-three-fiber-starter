import react , { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const texture = new THREE.TextureLoader().load("IMG_6337.JPG")
function Scene(props) {
  const mesh = useRef()
  useFrame(() => (
    mesh.current.rotation.x += 0.01,
    mesh.current.rotation.y += 0.01
    ))
    // const texture = useLoader(TextureLoader, "IMG_6337.JPG")
    // const texture2 = useTexture("IMG_6337.JPG")
    return (
        <mesh
        {...props}
        ref={mesh}
        >
        <ambientLight intensity={0.2} />
        <boxGeometry attach="geometry"/>
        <meshStandardMaterial map={texture} attach="material"/>
      </mesh>
    )

}

export default Scene;