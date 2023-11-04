import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber'; /*importing empty canvas to place something on  */
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'; /* import 3D models w/ useGLTF*/

import CanvasLoader from '../Loader'; 

const Computers = () => { /* 3d model for computer */
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} /* glare light on screen*//>
      <primitive /* pass the object for the scene*/
        object={computer.screen}
      />
    </mesh>
  )
}

const CompuerCanvas = () => {
  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25  }} /* x axis-20, y axis -3, z-axis-5, field of view (hiw wide)-25 */
      gL={{ preserveDrawingBuffer: true }} /* properly render model  */
    >
      <Suspense fallback={<CanvasLoader />} /* canvas loader while model is loading*/> 
        <OrbitControls /*move model left or right*/ />
      </Suspense>
    </Canvas>
  )

}

export default Computers