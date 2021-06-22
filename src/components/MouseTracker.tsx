import React, { useState, useEffect } from 'react'

const MosuerTracker: React.FC = () => {
  const [positions, setPossitions] = useState({x: 0, y: 0})
  useEffect(()=>{
    console.log("add enent", positions.x)
    const updateMouse = (e: MouseEvent) => {
      setPossitions({x: e.clientX, y: e.clientY})
    }
    document.addEventListener('click', updateMouse)
    return () => {
      console.log("remove event", positions.x)
      document.removeEventListener('click', updateMouse)
    }
  }, []) //第二个参数，存在在数组的参数变化才会执行useEffect,空数组表示只会在挂载和卸载时执行
  console.log("before render", positions.x)
  return (
    <p>X:{positions.x}, Y:{positions.y}</p>
  )
}
export default MosuerTracker