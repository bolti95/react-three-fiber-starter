import react, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./3D/Scene";
import './App.css';

function App() {
  
  return (
    <div id="canvas-scene">
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
