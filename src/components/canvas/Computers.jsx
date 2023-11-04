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
    <Canvas>
      
    </Canvas>
  )

}

export default Computers