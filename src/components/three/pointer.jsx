import React from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { BallCollider } from "@react-three/rapier";
import { useRef } from "react";

const Pointer = ({ vec = new THREE.Vector3() }) => {
  const ref = useRef();
  useFrame(({ mouse, viewport }) => {
    vec.lerp(
      {
        x: (mouse.x * viewport.width) / 2,
        y: (mouse.y * viewport.height) / 2,
        z: 0,
      },
      0.2
    );
    ref.current?.setNextKinematicTranslation(vec);
  });
  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
};

export default Pointer;
