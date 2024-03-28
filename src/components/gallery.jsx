import { Canvas } from "@react-three/fiber";
import Reac from "react";

const Gallery = () => {
  console.log("rendering gallery");
  return (
    <mesh>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
    </mesh>
  );
};
export default Gallery;
