import { useState, useEffect } from 'react'

const useMouseTracker = () => {
  const [positions, setPossitions] = useState({x: 0, y: 0})
  useEffect(()=>{
    const updateMouse = (e: MouseEvent) => {
      setPossitions({x: e.clientX, y: e.clientY})
    }
    document.addEventListener('mousemove', updateMouse)
    return () => {
      document.removeEventListener('mousemove', updateMouse)
    }
  },[])
  return positions
}
export default useMouseTracker