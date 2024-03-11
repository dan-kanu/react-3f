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
    >
      {/* <boxBufferGeometry /> */}
      <spotLight intensity={0.8} position={[0, 10, 0]} color="white" />

      <boxGeometry args={[1, 1, 2]} />
      <meshNormalMaterial />
    </mesh>
  );
}

export default MyRotatingBox;
