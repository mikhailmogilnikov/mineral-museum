/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';

function Model({ modelPath }) {
  const { scene } = useGLTF(modelPath);

  return <primitive object={scene} />;
}

export default Model;
