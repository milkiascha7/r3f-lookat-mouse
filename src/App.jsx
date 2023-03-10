import { Canvas, useThree, useFrame } from '@react-three/fiber'
import Box from './Box'
import { Stats } from '@react-three/drei'
import { Vector3 } from 'three'

function Rig() {
  const { camera, mouse } = useThree()
  const vec = new Vector3()

  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 0.05)
    camera.lookAt(0, 0, 0)
  })
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <directionalLight position={[0, 0, 1]} />
      {[...Array(7).keys()].map((i) => (
        <group key={i * 9}>
          <Box position={[-5, -4.5 + i * 1.5, 0]} text={'S'} />
          <Box position={[-3, -4.5 + i * 1.5, 0]} text={'B'} />
          <Box position={[-1, -4.5 + i * 1.5, 0]} text={'C'} />
          <Box position={[1, -4.5 + i * 1.5, 0]} text={'O'} />
          <Box position={[3, -4.5 + i * 1.5, 0]} text={'D'} />
          <Box position={[5, -4.5 + i * 1.5, 0]} text={'E'} />
        </group>
      ))}
      <Rig />
      <Stats />
    </Canvas>
  )
}
