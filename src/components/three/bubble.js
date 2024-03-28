import React, { useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { RigidBody, BallCollider, CylinderCollider } from "@react-three/rapier";

const baubleMaterial = new THREE.MeshLambertMaterial({
  color: "#c0a0a0",
  emissive: "red",
});
const capMaterial = new THREE.MeshStandardMaterial({
  metalness: 0.75,
  roughness: 0.15,
  color: "#8a492f",
  emissive: "#600000",
  envMapIntensity: 20,
});
const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

const Bubble = ({
  vec = new THREE.Vector3(),
  scale = 1,
  r = THREE.MathUtils.randFloatSpread,
}) => {
  // const { nodes } = useGLTF("/static/bubble.glb"); // Load the glb file directly

  const api = useRef();

  useFrame((state, delta) => {
    delta = Math.min(0.1, delta);
    api.current?.applyImpulse(
      vec
        .copy(api.current.translation())
        .normalize()
        .multiply({
          x: -50 * delta * scale,
          y: -150 * delta * scale,
          z: -50 * delta * scale,
        })
    );
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
      dispose={null}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={baubleMaterial}
      />
      <mesh
        castShadow
        scale={2.5 * scale}
        position={[0, 0, -1.8 * scale]}
        // geometry={nodes?.Mesh_1?.geometry}
        material={capMaterial}
      />
    </RigidBody>
  );
};

export default Bubble;
