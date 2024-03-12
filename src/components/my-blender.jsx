import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React from "react";
import { useFrame } from "@react-three/fiber";

function MyBlender() {
  const gltf = useLoader(GLTFLoader, "/model1.gltf");
  const myMesh = React.useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = a;
    myMesh.current.rotation.y = a;
  });
  return (
    <Suspense fallback={null}>
      <primitive ref={myMesh} object={gltf.scene} />;
    </Suspense>
  );
}

export default MyBlender;
