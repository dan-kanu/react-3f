import { useFrame } from "@react-three/fiber";
import React, { useState } from "react";

function MyRotatingBox() {
  const myMesh = React.useRef();
  const [active, setActive] = useState(false);

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = a;
    myMesh.current.rotation.y = a;
  });

  return (
    <mesh
      scale={active ? 1.5 : 3.1}
      onClick={() => setActive(!active)}
      ref={myMesh}
      position={[10, 0, 0]}
    >
      {/* <boxBufferGeometry /> */}
      <spotLight intensity={0.98} position={[0, 10, 0]} color="white" />

      <boxGeometry args={[1, 1, 2]} position={[2, 2, 0]} />
      <meshNormalMaterial />
    </mesh>
  );
}

export default MyRotatingBox;
