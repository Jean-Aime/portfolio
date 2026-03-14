"use client";

import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const InteractiveSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useFrame((state) => {
    const { x, y } = state.mouse;
    if (sphereRef.current) {
      // Smoothly follow mouse
      sphereRef.current.position.x = THREE.MathUtils.lerp(sphereRef.current.position.x, x * 1.5, 0.1);
      sphereRef.current.position.y = THREE.MathUtils.lerp(sphereRef.current.position.y, y * 1.5, 0.1);
      
      // Constant rotation
      sphereRef.current.rotation.x += 0.005;
      sphereRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={sphereRef} args={[1, 100, 100]} scale={1.8}>
        <MeshDistortMaterial
          color="#13b6ec"
          attach="material"
          distort={0.5}
          speed={3}
          roughness={0.1}
          metalness={0.9}
          emissive="#0ea5e9"
          emissiveIntensity={0.2}
        />
      </Sphere>
    </Float>
  );
};

const Particles = () => {
  const count = 100;
  const mesh = useRef<THREE.Points>(null);
  
  const particlesPosition = React.useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#13b6ec" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#13b6ec" />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        
        <InteractiveSphere />
        <Particles />
        
        <fog attach="fog" args={['#020617', 5, 20]} />
      </Canvas>
    </div>
  );
};

export default Scene3D;