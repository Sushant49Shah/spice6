import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Bun({ position, color, lift, withSeeds, isBottom }) {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.x = lift.current;
  });

  return (
    <group position={position} ref={ref} scale={[0.7, 0.7, 0.7]}>
      {/* Bun Hemisphere */}
      <mesh rotation={isBottom ? [Math.PI, 0, 0] : [0, 0, 0]}>
        <sphereGeometry args={[1.4, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {/* White Sesame Seeds */}
      {withSeeds && Array.from({ length: 50 }).map((_, i) => {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 1.1;
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        const y = 0.85; // Seed elevation closer to bun surface
        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
        );
      })}
    </group>
  );
}

function Patty({ position }) {
  return (
    <mesh position={position} scale={[0.7, 0.7, 0.7]}>
      <cylinderGeometry args={[1.2, 1.2, 0.2, 32]} />
      <meshStandardMaterial color="#6B4226" />
    </mesh>
  );
}

function Lettuce({ position }) {
  return (
    <mesh position={position} scale={[0.7, 0.7, 0.7]}>
      <cylinderGeometry args={[1.3, 1.3, 0.05, 32]} />
      <meshStandardMaterial color="#6BBF59" />
    </mesh>
  );
}

function Cheese({ position }) {
  return (
    <mesh position={position} scale={[0.7, 0.7, 0.7]}>
      <boxGeometry args={[1.4, 0.05, 1.4]} />
      <meshStandardMaterial color="#FFD700" />
    </mesh>
  );
}

export default function BurgerIcon() {
  const [open, setOpen] = useState(false);
  const topBunLift = useRef(0);

  const handleClick = () => {
    topBunLift.current = open ? 0 : Math.PI / 4; // Toggle 45-degree rotation on the X-axis
    setOpen(!open);
  };

  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <group onClick={handleClick}>
        <Bun position={[0, 1.2, 0]} color="#FFC107" lift={topBunLift} withSeeds={true} />
        <Cheese position={[0, 0.8, 0]} />
        <Lettuce position={[0, 0.65, 0]} />
        <Patty position={[0, 0.45, 0]} />
        <Bun position={[0, 0.2, 0]} color="#FFC107" lift={{ current: 0 }} withSeeds={false} isBottom={true} />
      </group>
    </Canvas>
  );
}
