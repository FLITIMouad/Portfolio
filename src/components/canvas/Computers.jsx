import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { useForceUpdate, useIsMobile } from "@hooks";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./mouad_pc/pcMouad.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={isMobile ? 256 : 512} // Optimize shadows for mobile
      />
      <pointLight intensity={0.8} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.3 : 0.75} // Adjust scale for mobile
        position={isMobile ? [0, -2.5, -0.8] : [0, -3.25, -1.5]} // Shift up for mobile
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const isMobile = useIsMobile(750);
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    setTimeout(() => forceUpdate(), 200);
  }, []);

  return (
    <Canvas
      key={Math.random()}
      frameloop="demand"
      shadows
      dpr={[1, 1.5]} // Balanced DPI for mobile
      camera={{
        position: [20, 3, 5],
        fov: isMobile ? 35 : 30, // Wider FOV for mobile
      }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        preserveDrawingBuffer: true,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enableDamping={true} // Improve smoothness
          dampingFactor={0.1}
          rotateSpeed={0.5} // Prevent laggy rotation
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={isMobile} // Allow touch drag on mobile
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
