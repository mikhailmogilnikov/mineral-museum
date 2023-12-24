'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import { Center, OrbitControls, Resize, useProgress } from '@react-three/drei';
import { motion, useAnimation } from 'framer-motion';

import Model from './Model.jsx';
import ModelPreloader from '@/features/preloaders/ModelPreloader.jsx';
import SettingsBar from './SettingsBar.jsx';

function ThreeModelViewer({ modelPath }) {
  const storedAutoRotate = localStorage.getItem('autoRotate');
  const initialAutoRotate = storedAutoRotate
    ? JSON.parse(storedAutoRotate)
    : false;

  const [autoRotate, setAutoRotate] = useState(initialAutoRotate);
  const [fullscreen, setFullscreen] = useState(false);
  const controlsAnimation = useAnimation();

  const toggleAutoRotate = () => {
    const newAutoRotate = !autoRotate;
    setAutoRotate(newAutoRotate);
    localStorage.setItem('autoRotate', JSON.stringify(newAutoRotate));
  };

  const toggleContainerHeight = () => {
    setFullscreen(!fullscreen);
    const newHeight = fullscreen ? '65vh' : 'calc(100dvh - 4rem + 1px)';
    controlsAnimation.start({ height: newHeight });
  };

  const { progress } = useProgress();

  return (
    <div className="relative">
      <motion.div
        className="w-full h-[65vh] flex justify-center items-center border-b-1 border-black/[0.15] dark:border-y-white/[0.15] cursor-grab"
        animate={controlsAnimation}
      >
        <Suspense fallback={<ModelPreloader progress={progress} />}>
          <Canvas>
            <Resize scale={4.5}>
              <Center>
                <Model modelPath={modelPath} />
              </Center>
            </Resize>

            <OrbitControls
              autoRotate={autoRotate}
              enablePan={false}
              minDistance={2.4}
              maxDistance={20}
            />
          </Canvas>
        </Suspense>
      </motion.div>
      <SettingsBar
        autoRotate={toggleAutoRotate}
        isAutoRotate={autoRotate}
        fullscreen={toggleContainerHeight}
        isFullscreen={fullscreen}
      />
    </div>
  );
}

export default ThreeModelViewer;
