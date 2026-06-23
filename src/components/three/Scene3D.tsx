import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const Thing = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame(({ mouse }) => {
    meshRef.current.rotation.x = mouse.y * 0.5;
    meshRef.current.rotation.y = mouse.x * 0.5;
  });
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} scale={2.2}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#D4A574"
          speed={2}
          distort={0.4}
          radius={1}
          wireframe
        />
      </mesh>
    </Float>
  );
};

const Scene3D = () => (
  <Canvas
    camera={{ position: [0, 0, 4] }}
    dpr={[1, 2]}
    gl={{ alpha: true, antialias: true }}
    className="w-full h-full absolute inset-0"
      style={{
        pointerEvents: 'none',
        touchAction: 'none',       // вот эта строка спасает от дёрганий
  }}
  >
    <ambientLight intensity={0.5} />
    <Thing />
  </Canvas>
);

export default Scene3D;