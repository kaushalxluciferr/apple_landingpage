import './App.css'
import {Canvas} from '@react-three/fiber'
import {OrbitControls,ScrollControls,Environment} from '@react-three/drei'
import Mac from './Mac'
function App() {

  return (
   <>
 <div className='header'>
<ul>
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
  <li>Know US</li>
</ul>
 </div>
 <div className="section">
  <h1 >Apple Macbook Pro</h1>
  <p>Our Vision is to make come true what you see the dreams</p>
 </div>
<div className="home">
   
   <Canvas camera={{fov:20,position:[-5,10,120]}}>
    {/* <OrbitControls/> */}
    <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/qwantani_dusk_2_4k.hdr']}/>
    <ScrollControls pages={2}>
    <Mac/>
    </ScrollControls>
   </Canvas>
   </div>
   </>
  )
}

export default App
