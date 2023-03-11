import { useState } from 'react'
import { Canvas } from "@react-three/fiber"
import './App.css'
import CompFiber from './components/CompFiber'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
        <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 9] }}>
          <pointLight position={[10, 10, 10]} />
          <ambientLight intensity={0.05} />
          <CompFiber position={[0, 0, 0]} />
        </Canvas>
    </div>
  )
}

export default App
