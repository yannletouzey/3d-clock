import { DirectionalLightHelper } from 'three'
import { Canvas, useLoader, useThree, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useEffect, useState, useRef } from 'react'
import { OrbitControls, useHelper } from '@react-three/drei';


export default function App() {

  const lightRef = useRef()

  const [second, setSecond] = useState(new Date().getSeconds())
  const [minute, setMinute] = useState(new Date().getMinutes())
  const [hour, setHour] = useState(new Date().getHours())

  const [secondPath, setSecondPath] = useState((Math.PI * 2) / 60 * second)
  const [minutePath, setMinutePath] = useState((Math.PI * 2) / 60 * minute)
  const [hourPath, setHourPath] = useState((Math.PI * 2) / 12 * hour)
  const clockGLTF = useLoader(GLTFLoader, './clock.glb')


  useEffect(() => {
    const interval = setInterval(() => {
      setSecond(new Date().getSeconds())
      setMinute(new Date().getMinutes())
      setHour(new Date().getHours())
    }, 1000)
    setSecondPath(((Math.PI * 2) / 60 * second) + Math.PI)
    setMinutePath(((Math.PI * 2) / 60 * minute) + Math.PI)
    setHourPath(((Math.PI * 2) / 12 * (hour + minute / 60)) + Math.PI)
    return () => clearInterval(interval)
  }, [second, minute, hour])

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 2, 3]} ref={lightRef}/>
      <primitive object={clockGLTF.nodes.Center} />
      <primitive object={clockGLTF.nodes.Second} rotation={[0, 0, -secondPath]} />
      <primitive object={clockGLTF.nodes.Minute} rotation={[0, 0, -minutePath]} />
      <primitive object={clockGLTF.nodes.Hour} rotation={[0, 0, -hourPath]} />
      <primitive object={clockGLTF.nodes.one} />
      <primitive object={clockGLTF.nodes.two} />
      <primitive object={clockGLTF.nodes.three} />
      <primitive object={clockGLTF.nodes.four} />
      <primitive object={clockGLTF.nodes.five} />
      <primitive object={clockGLTF.nodes.six} />
      <primitive object={clockGLTF.nodes.seven} />
      <primitive object={clockGLTF.nodes.eight} />
      <primitive object={clockGLTF.nodes.nine} />
      <primitive object={clockGLTF.nodes.ten} />
      <primitive object={clockGLTF.nodes.eleven} />
      <primitive object={clockGLTF.nodes.twelve} />
      <OrbitControls />
    </Canvas>
  )
}

