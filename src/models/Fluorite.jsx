/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unknown-property */
/* eslint-disable import/prefer-default-export */
import { useGLTF } from '@react-three/drei';

export function Fluorite(props) {
  const { nodes, materials } = useGLTF('/fluorite/scene.gltf');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_3.geometry}
        material={materials.Fluorite}
      />
    </group>
  );
}

useGLTF.preload('/fluorite/scene.gltf');
