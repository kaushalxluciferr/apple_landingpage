import React from 'react'
import {useGLTF,useScroll,ScrollControls, useTexture} from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import * as THREE from 'three'
function Mac() {

    let model=useGLTF('./mac.glb')
   let tex=useTexture('./red.jpg')


let meshes={}
model.scene.traverse((e)=>{
        meshes[e.name]=e;
})
meshes.screen.rotation.x=THREE.MathUtils.degToRad(180)
meshes.matte.material.map=tex;
meshes.matte.material.emissiveIntensity=0;
meshes.matte.material.roughness=1;

const data=useScroll()

useFrame((state,delta)=>{
  meshes.screen.rotation.x=THREE.MathUtils.degToRad(180-(data.offset*90));
  
    
})


  return (
    <group position={[0,-10,-20]}>

    <primitive object={model.scene}/>
    </group>
  )
}

export default Mac
