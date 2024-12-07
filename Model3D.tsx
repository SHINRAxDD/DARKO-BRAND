import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cylinder, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';

export function TShirtModel({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (groupRef.current) {
      // Initial animation
      gsap.from(groupRef.current.position, {
        y: -10,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        delay: 2.5 // Start after loading screen
      });
      
      gsap.from(groupRef.current.rotation, {
        y: Math.PI * 2,
        duration: 2,
        ease: "power2.out",
        delay: 2.5
      });
    }
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;
    
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      (mousePosition.x * Math.PI) / 3,
      0.1
    );
    
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      (mousePosition.y * Math.PI) / 6,
      0.1
    );
    
    // Add subtle floating animation
    groupRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.1;
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* T-Shirt body with improved materials */}
      <RoundedBox args={[2, 2.5, 0.2]} radius={0.1} smoothness={4}>
        <meshPhysicalMaterial
          color="#000000"
          roughness={0.2}
          metalness={0.1}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
        />
      </RoundedBox>
      
      {/* Collar with improved material */}
      <Cylinder args={[0.4, 0.4, 0.2, 32]} position={[0, 1, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <meshPhysicalMaterial
          color="#0a0a0a"
          roughness={0.3}
          metalness={0.2}
          clearcoat={0.5}
        />
      </Cylinder>
      
      {/* Sleeves with improved materials */}
      <RoundedBox args={[0.7, 1, 0.2]} radius={0.1} position={[-1.2, 0.5, 0]} rotation={[0, 0, -0.3]}>
        <meshPhysicalMaterial
          color="#000000"
          roughness={0.2}
          metalness={0.1}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
        />
      </RoundedBox>
      <RoundedBox args={[0.7, 1, 0.2]} radius={0.1} position={[1.2, 0.5, 0]} rotation={[0, 0, 0.3]}>
        <meshPhysicalMaterial
          color="#000000"
          roughness={0.2}
          metalness={0.1}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
        />
      </RoundedBox>
    </group>
  );
}