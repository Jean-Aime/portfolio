"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera, MeshWobbleMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

const AbstractCore = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
    }
    if (outerRef.current) {
      outerRef.current.rotation.z = -time * 0.1;
      outerRef.current.rotation.y = -time * 0.15;
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere ref={meshRef} args={[1.2, 100, 100]}>
          <MeshDistortMaterial
            color="#0ea5e9"
            attach="material"
            distort={0.4}
            speed={4}
            roughness={0}
            metalness={1}
            emissive="#0284c7"
            emissiveIntensity={0.5}
          />
        </Sphere>
      </Float>

      <mesh ref={outerRef}>
        <torusKnotGeometry args={[2.5, 0.02, 256, 32]} />
        <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={2} transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

const DataParticles = () => {
  const count = 200;
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 20;
      p[i * 3 + 1] = (Math.random() - 0.5) * 20;
      p[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return p;
  }, []);

  const mesh = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      mesh.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.04} 
        color="#0ea5e9" 
        transparent 
        opacity={0.6} 
        sizeAttenuation 
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none opacity-60">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#0ea5e9" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />
        <spotLight position={[0, 5, 10]} angle={0.3} penumbra={1} intensity={2} castShadow />
        
        <AbstractCore />
        <DataParticles />
        
        <Environment preset="city" />
        <fog attach="fog" args={['#020617', 5, 25]} />
      </Canvas>
    </div>
  );
};

export default Scene3D;