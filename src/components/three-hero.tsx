"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, Float, Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function HeroMachines() {
  const groupRef = useRef<THREE.Group>(null);
  const craneRef = useRef<THREE.Group>(null);
  const excavatorRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(time * 0.25) * 0.08;
    groupRef.current.position.y = Math.sin(time * 1.2) * 0.08;
    if (craneRef.current) {
      craneRef.current.rotation.z = Math.sin(time * 0.7) * 0.05;
    }
    if (excavatorRef.current) {
      excavatorRef.current.rotation.x = Math.sin(time * 0.8) * 0.03;
    }
  });

  const materials = useMemo(
    () => ({
      steel: new THREE.MeshStandardMaterial({ color: "#0f172a", metalness: 0.9, roughness: 0.2 }),
      yellow: new THREE.MeshStandardMaterial({ color: "#fbbf24", metalness: 0.6, roughness: 0.15 }),
      orange: new THREE.MeshStandardMaterial({ color: "#f97316", metalness: 0.75, roughness: 0.2 }),
      glass: new THREE.MeshPhysicalMaterial({ color: "#dbeafe", transmission: 0.75, thickness: 0.15, roughness: 0.1 }),
    }),
    []
  );

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.25}>
        <mesh position={[0, 0.2, 0]} receiveShadow castShadow>
          <boxGeometry args={[4.4, 0.35, 2.2]} />
          <meshStandardMaterial color="#0b1f3a" metalness={0.8} roughness={0.18} />
        </mesh>
        <mesh position={[0, 0.55, -0.5]} receiveShadow castShadow>
          <boxGeometry args={[2.8, 0.55, 1.9]} />
          <meshStandardMaterial color="#111827" metalness={0.7} roughness={0.22} />
        </mesh>
        <mesh position={[-0.8, 0.9, 0.8]} castShadow>
          <boxGeometry args={[1.2, 1, 1]} />
          <meshStandardMaterial color="#172554" metalness={0.7} roughness={0.25} />
        </mesh>
        <mesh position={[0.7, 0.9, 0.8]} castShadow>
          <boxGeometry args={[1, 0.65, 0.8]} />
          <meshStandardMaterial color="#1e3a8a" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[-1.1, 1.05, 0.8]} castShadow>
          <boxGeometry args={[0.25, 0.25, 0.25]} />
          <meshStandardMaterial color="#fbbf24" emissive="#f59e0b" emissiveIntensity={0.2} />
        </mesh>
      </Float>

      <group ref={craneRef} position={[2.7, 0.45, -0.6]}>
        <mesh position={[0, 0.6, 0]} castShadow>
          <cylinderGeometry args={[0.08, 0.08, 1.4, 16]} />
          <primitive object={materials.steel} />
        </mesh>
        <mesh position={[0.5, 1.15, 0]} castShadow>
          <boxGeometry args={[1.2, 0.12, 0.12]} />
          <primitive object={materials.orange} />
        </mesh>
        <mesh position={[1.1, 0.95, 0]} castShadow>
          <boxGeometry args={[0.9, 0.18, 0.45]} />
          <primitive object={materials.yellow} />
        </mesh>
      </group>

      <group ref={excavatorRef} position={[-2.8, 0.56, 0.7]}>
        <mesh position={[0, 0.2, 0]} castShadow>
          <boxGeometry args={[1.8, 0.25, 1.2]} />
          <primitive object={materials.steel} />
        </mesh>
        <mesh position={[-0.45, 0.6, 0]} castShadow>
          <boxGeometry args={[1.1, 0.28, 0.72]} />
          <primitive object={materials.yellow} />
        </mesh>
        <mesh position={[0.85, 0.85, 0]} castShadow>
          <boxGeometry args={[0.95, 0.14, 0.55]} />
          <primitive object={materials.orange} />
        </mesh>
        <mesh position={[1.35, 0.7, 0]} castShadow>
          <boxGeometry args={[0.48, 0.48, 0.48]} />
          <primitive object={materials.steel} />
        </mesh>
      </group>

      <mesh position={[0, -0.18, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[8, 64]} />
        <meshStandardMaterial color="#0f172a" roughness={0.8} />
      </mesh>

      <mesh position={[0, 0.36, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <ringGeometry args={[3.4, 5.2, 64]} />
        <meshStandardMaterial color="#1e3a8a" roughness={0.7} />
      </mesh>

      <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.1, 0]} opacity={0.45} width={14} height={14} blur={2.4} far={8} />
    </group>
  );
}

export function ThreeHero() {
}
