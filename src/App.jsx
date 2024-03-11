import "./App.css";

import { ARButton, Controllers, Hands, VRButton, XR } from "@react-three/xr";
import {
  AccumulativeShadows,
  Center,
  Environment,
  OrbitControls,
  RandomizedLight,
  useGLTF,
} from "@react-three/drei";
import React, { Suspense, useLayoutEffect } from "react";
import { animated, useSpring } from "@react-spring/three";

import { Canvas } from "@react-three/fiber";
import MyRotatingBox from "./components/my-rotating-box";

function App() {
  return (
    <>
      <VRButton />
      <Canvas flat dpr={[1, 2]} camera={{ fov: 75, position: [0, 0, 18] }}>
        <XR>
          <Controllers />
          <Hands />
          <MyRotatingBox />
          <color attach="background" args={["#e0b7ff"]} />
          <ambientLight args={["#ffffff"]} intensity={3} />
          <spotLight intensity={1400} position={[10, 10, 10]} />
          <Center top position={[3, 0, 1]}>
            <Suzi rotation={[-0.63, 0, 0]} scale={1} position={[5, 0, 15]} />
          </Center>
          <Center top position={[-2, 0, 1]}>
            <mesh castShadow>
              <sphereGeometry args={[0.25, 64, 64]} />
              <meshStandardMaterial color="lightblue" />
            </mesh>
          </Center>
          <gridHelper args={[50, 10, 10, 30, 30, 30]} />
          <OrbitControls makeDefault />
        </XR>
      </Canvas>
    </>
  );
}
function Suzi(props) {
  const { scene, materials } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/suzanne-high-poly/model.gltf"
  );
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
    materials.default.color.set("orange");
    materials.default.roughness = 0.2;
    // materials.default.normalMap = new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping)

    materials.default.normalScale.set(0.1, 0.1);
  });
  return <primitive object={scene} {...props} />;
}

export default App;
