import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";

function Burger() {
  const upperBunRef = useRef();
  const [isLifted, setIsLifted] = useState(false);

  const bunTexture = useTexture("/textures/bun.jpeg");
  const pattyTexture = useTexture("/textures/patty.jpeg");
  const lettuceTexture = useTexture("/textures/lettuce.jpeg");

  useFrame(() => {
    if (upperBunRef.current) {
      upperBunRef.current.rotation.x = isLifted ? Math.PI / 4 : 0;
    }
  });

  return (
    <group onClick={() => setIsLifted(!isLifted)}>
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[1.1, 1, 0.4, 32]} />
        <meshStandardMaterial map={bunTexture} />
      </mesh>

      <mesh position={[0, -0.2, 0]}>
        <cylinderGeometry args={[0.9, 0.9, 0.2, 32]} />
        <meshStandardMaterial map={pattyTexture} />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.95, 0.95, 0.1, 32]} />
        <meshStandardMaterial map={lettuceTexture} />
      </mesh>

      <mesh ref={upperBunRef} position={[0, 0.3, 0]}>
        <cylinderGeometry args={[1.1, 1, 0.4, 32]} />
        <meshStandardMaterial map={bunTexture} />
      </mesh>
    </group>
  );
}

export default function BurgerScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <Burger />
      <OrbitControls enablePan={false} enableZoom={false} />
    </Canvas>
  );
}
