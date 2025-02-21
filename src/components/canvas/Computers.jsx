import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import useIsMobile from "@hooks/useIsMobile";
import { useForceRerender } from "@hooks";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
    
    return (
      <mesh>
        <hemisphereLight intensity={0.15} groundColor='black' />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={512}
        />
        <pointLight intensity={1} />
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.5 : 0.75}
          position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
    );
};


const ComputersCanvas = () => {
  const isMobile = useIsMobile(500);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]} // Reduce pixel density on mobile
      camera={{ position: [20, 3, 5], fov: 30 }} // Increase FOV for better mobile rendering
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance",preserveDrawingBuffer: true }} // Optimize WebGL
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enableDamping={true} // Improve smoothness
          dampingFactor={0.1}
          rotateSpeed={0.5} // Prevent laggy rotation
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
