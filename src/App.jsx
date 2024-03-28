import "./App.css";
import { ARButton, Controllers, Hands, VRButton, XR } from "@react-three/xr";
import {
  AccumulativeShadows,
  Center,
  Environment,
  OrbitControls,
  RandomizedLight,
  useGLTF,
  SpotLight,
} from "@react-three/drei";
import React, { Suspense, useLayoutEffect } from "react";
import { Canvas } from "@react-three/fiber";
import MyBlender from "./components/my-blender";
import Gallery from "./components/gallery";

function App() {
  return (
    <>
      <VRButton />
      <Canvas
        frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
        
        dpr={[1, 2]}
        camera={{ fov: 75, position: [0, 0, 18] }}
        shadows
      >
        <Environment preset="sunset" />

        <XR>
          <Controllers />
          <Hands />

          <Center position={[0, 1, -1]}>
            <MyBlender />
          </Center>

          <SpotLight
            intensity={544} // Adjust intensity as needed
            position={[1, 5, 1]} // Adjust position
            angle={Math.PI / 7} // Set the angle of the spotlight
            penumbra={0.5} // Set the penumbra for soft edges
            castShadow // Enable shadow casting
            color={"#FFF450"} // Set the color of the spotlight
            distance={9} // Set the distance of the spotlight
            // target={[10, 0, 0]} // Set the target of the spotlight
          />

          <Center>
            <mesh castShadow scale={[10, 10, 10]}>
              <boxGeometry args={[10, 10, 10]} />
              <meshStandardMaterial color="red" />
            </mesh>
          </Center>

          <Center top position={[-2, 0, 1]}>
            <mesh castShadow>
              <sphereGeometry args={[0.25, 64, 64]} />
              <meshStandardMaterial color="lightblue" />
            </mesh>
          </Center>

          {/* <gridHelper args={[50, 10, 10, 30, 30, 30]} /> */}
          <OrbitControls makeDefault />
          <Hands />
        </XR>
        <Gallery />
      </Canvas>
    </>
  );
}

export default App;
