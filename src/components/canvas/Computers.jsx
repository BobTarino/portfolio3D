import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber"; /*importing empty canvas to place something on  */
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"; /* import 3D models w/ useGLTF*/

import CanvasLoader from '../Loader'; 

const Computers = ({ isMobile }) => { /* 3d model for computer */
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight /*main lighting source */
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={10000}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive /* pass the object for the scene*/
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  // this useEffect changes the 'isMobile' variable
  useEffect(() => {
    //listener for changes to the screen size; check if we're on mobile device
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    //set initial value of 'isMobile' state variable
    setIsMobile(mediaQuery.matches);
    //define callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    //add callback function as listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    //remove listener when component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])
  
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25  }} /* x axis-20, y axis -3, z-axis-5, field of view (hiw wide)-25 */
      gl={{ preserveDrawingBuffer: true }} /* properly render model  */
    >
      <Suspense fallback={<CanvasLoader />} /* canvas loader while model is loading*/> 
        <OrbitControls /*move model left or right*/
          enableZoom={false}
          /* can only rotate model on a specific axis; more streamlined effect*/
          maxPolarAngle={Math.PI/ 2}
          minPolarAngle={Math.PI/ 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )

}

export default ComputerCanvas