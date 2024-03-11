import "./App.css";
import React, { Suspense, useLayoutEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
import MyRotatingBox from "./components/my-rotating-box";
import { XR, VRButton, ARButton } from "@react-three/xr";
import {
  Center,
  AccumulativeShadows,
  RandomizedLight,
  OrbitControls,
  Environment,
  useGLTF,
} from "@react-three/drei";

function App() {
  return (
    <>
      <VRButton />
      <Canvas flat dpr={[1, 2]} camera={{ fov: 75, position: [0, 0, 18] }}>
        <MyRotatingBox />
        <color attach="background" args={["#e0b7ff"]} />
        <ambientLight args={["#e0b7ff"]} intensity={3} />
        <Center top>
          <Suzi rotation={[-0.63, 0, 0]} scale={2} />
        </Center>
        <Center top position={[-2, 0, 1]}>
          <mesh castShadow>
            <sphereGeometry args={[0.25, 64, 64]} />
            <meshStandardMaterial color="lightblue" />
          </mesh>
        </Center>
        <gridHelper args={[10, 10, 10, 10, 10, 10]} />
        <OrbitControls makeDefault />
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
