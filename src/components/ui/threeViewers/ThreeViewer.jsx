'use client';

import {
  useEffect, useRef, useState,
} from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Progress } from '@nextui-org/progress';
import Text from '@/components/primitives/Text.jsx';

function ThreeViewer({ modelPath }) {
  const containerRef = useRef();
  const rotateModel = false;
  const [scene, setScene] = useState(new THREE.Scene());
  const [currentModel, setCurrentModel] = useState(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / (window.innerHeight * 0.65),
    0.1,
    1000,
  );
  const loader = new GLTFLoader();

  const disposeNode = (node) => {
    if (node instanceof THREE.Mesh) {
      node.geometry.dispose();
      node.material.dispose();
    }
  };

  const animate = (controls, renderer, sceneAnim, cameraAnim) => {
    requestAnimationFrame(() => animate(controls, renderer, sceneAnim, cameraAnim));
    controls.update();
    renderer.render(sceneAnim, cameraAnim);
  };

  useEffect(() => {
    loader.load(modelPath, (gltf) => {
      const newModel = gltf.scene;
      newModel.position.set(0, -0, 0);

      if (currentModel) {
        scene.remove(currentModel);
        currentModel.traverse(disposeNode);
      }

      setCurrentModel(newModel);
      scene.add(newModel);

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight / 1.5);
      containerRef.current.appendChild(renderer.domElement);

      const controls = new OrbitControls(camera, renderer.domElement);

      controls.enableZoom = true;
      controls.enablePan = false;
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.autoRotate = rotateModel;
      controls.minDistance = 1;
      controls.maxDistance = 4;

      camera.position.set(0, 0, 1.6);

      const animateControls = () => {
        setIsModelLoaded(true);
        animate(controls, renderer, scene, camera);
      };
      animateControls();

      return () => {
        renderer.dispose();
        controls.dispose();
        scene.traverse(disposeNode);
        scene.remove(currentModel);
      };
    });
  }, [modelPath]);

  useEffect(() => {
    setScene(new THREE.Scene());
  }, [modelPath]);

  return (
    <div
      className="w-full h-[65vh] border-b-1 border-black/[0.15] dark:border-y-white/[0.15] cursor-grab overflow-hidden flex items-center justify-center"
      ref={containerRef}
    >
      {!isModelLoaded && (
        <div className="absolute w-full max-w-[12rem] flex flex-col gap-2 self-center items-center justify-center">
          <Text tag="h5" content="Загрузка модели..." />
          <Progress color="default" size="sm" isIndeterminate aria-label="Загрузка карты" />
        </div>
      )}
    </div>
  );
}

export default ThreeViewer;
