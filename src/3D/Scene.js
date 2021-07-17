import react from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from "three";


function Scene() {
    const [colorMap] = useLoader(TextureLoader, ['IMG_6337.JPG'])
    return (
        <mesh>
        <ambientLight intensity={0.1} />
        {/* <directionalLight color="blue" position={[0, 0, 5]} /> */}
        <boxGeometry />
        <meshPhongMaterial map={colorMap}/>
      </mesh>
    )

}

export default Scene;