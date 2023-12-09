/* eslint-disable react/no-unknown-property */

'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Fluorite } from '@/models/Fluorite.jsx';

function ThreeModelViewer() {
  return (
    <div className="w-full h-[60vh] sm:h-[70vh] border-b-1 border-black/[0.15] dark:border-y-white/[0.15]">
      <Suspense fallback={null}>
        <Canvas
          camera={{
            fov: 90,
            position: [0, 0, 0],
          }}
        >
          <ambientLight intensity={0.1} />
          <directionalLight position={[1, 1, 3]} intensity={0.8} />
          <OrbitControls />
          <mesh position={[0, 0, -2]}>
            <Fluorite />
          </mesh>
        </Canvas>
      </Suspense>
    </div>
  );
}

export default ThreeModelViewer;
