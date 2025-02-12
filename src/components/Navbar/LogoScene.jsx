import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls } from '@react-three/drei';

function HangingLogo() {
  const logoRef = useRef();
  const [isClicked, setIsClicked] = useState(false);

  // Load logo texture
  const logoTexture = useLoader(TextureLoader, '/textures/logo.jpg');

  // Swing animation
  useFrame(() => {
    if (logoRef.current) {
      logoRef.current.rotation.z = 0.05 * Math.sin(Date.now() / 500);
      if (isClicked) {
        logoRef.current.position.z = Math.sin(Date.now() / 200) * 0.2;
      }
    }
  });

  return (
    <mesh
      ref={logoRef}
      onClick={() => setIsClicked(!isClicked)}
      position={[0, 1.5, 0]}
    >
      <boxGeometry args={[7, 4 , 0.5]} />
      <meshStandardMaterial 
        map={logoTexture} 
        transparent={true}
        metalness={0.1}
        roughness={0.5}
      />
    </mesh>
  );
}

export default function LogoScene() {
  return (
    <Canvas camera={{ position: [0, 0, 8] }}>
      <group>
        <mesh position={[0, 3, 0]}>
          <cylinderGeometry args={[0.2, 0.02, 3, 32]} />
          <meshStandardMaterial color={'#000000'} />
        </mesh>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, -5, 5]} intensity={0.5} />
        <HangingLogo />
        <OrbitControls enablePan={false} enableZoom={false} />
      </group>
    </Canvas>
  );
}
