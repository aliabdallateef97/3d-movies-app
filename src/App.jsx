import './App.css'
import Mac from './Mac'
import Iphone from './Iphone'
import {Environment} from '@react-three/drei'
import { useEffect, useState,Suspense } from 'react';


function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
    {/* Background Color */}
    <color args={['#695b5b']} attach='background'/>

    {/* Lights */}
    <Environment preset='city'/>

    {/* Models Component */}
    <Suspense fallback={null}>
    {isMobile ? <Iphone /> : <Mac />}
    </Suspense>
    
    
    </>
  )
}

export default App
