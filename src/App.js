import react, {Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./3D/Scene";
import './App.css';

function App() {
  
  return (
    <div id="canvas-scene">
       <Canvas camera={{ position: [0, 1, 10], fov: 30 }} >
            {/* nothing to wait for whilist loading */}
          <Scene />

      </Canvas>
    </div>
  );
}

export default App;
