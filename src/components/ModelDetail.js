import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { PresentationControls, ContactShadows } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useParams } from 'react-router-dom';

function ModelGltf(props) {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, `${props.modelId}.gltf`);
  
  return (
    <group ref={ref} {...props} dispose={null}>
      <primitive object={gltf.scene} />
    </group>
  );
}
function ModelDetail() {
  const { modelId } = useParams();
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight color="white" position={[0, 0, 0]} />
      <fog attach="fog" args={['#101010', 0, 10]} />
      <spotLight position={[10, 20, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />
      <PresentationControls
        global
      >
        <ModelGltf modelId={modelId} position={[0,-1,0]} scale={5}/>
      </PresentationControls>
      <ContactShadows rotation-x={Math.PI / 2} position={[0, -1.4, 0]} opacity={0.75} width={10} height={10} blur={2.6} far={2} />
    </Canvas>
  );
}

export default ModelDetail;
