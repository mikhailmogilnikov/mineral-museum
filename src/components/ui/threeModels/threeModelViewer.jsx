/* eslint-disable react/no-unknown-property */

'use client';

import { Canvas } from '@react-three/fiber';

function ThreeModelViewer() {
  return (
    <div className="w-full h-[60vh] sm:h-[70vh] border-b-1 border-black/[0.15] dark:border-y-white/[0.15]">
      <Canvas
        camera={{
          fov: 90,
          position: [0, 0, 2],
        }}
      >
        <mesh position={[0, 0, -2]}>
          <ambientLight intensity={0.1} />
          <directionalLight position={[1, 1, 3]} intensity={0.8} />
          <sphereGeometry args={[2, 32]} />
          <meshStandardMaterial color={0x00ff00} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default ThreeModelViewer;
