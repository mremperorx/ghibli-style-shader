import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Scene } from "./Scene";
import { Ground } from "./Ground";

export function FiberContainer(){
    return(
        <Canvas camera={{position: [13.4666, 2.0365, 5.5556165], fov: 40}} shadows>
          <Scene />
          <Ground />
          <OrbitControls  minDistance={1} maxDistance={200} />
        </Canvas>
    )
}