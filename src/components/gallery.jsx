import { Environment } from "@react-three/drei";

import Reac, { Suspense } from "react";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import { Physics } from "@react-three/rapier";
import Bubble from "./three/bubble";
import Pointer from "./three/pointer";

const Gallery = () => {
  console.log("rendering gallery");
  return (
    <Suspense>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <EffectComposer autoClear>
          <Bubble />
          <Bubble scale={2} />
          <Bubble scale={1} />

          <Pointer />

          <N8AO color="red" aoRadius={22} intensity={3} />
        </EffectComposer>
      </mesh>
    </Suspense>
  );
};
export default Gallery;
