import React, { useState, useEffect, useRef, useContext } from 'react'
import { ThemeContext } from '../App'

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0)
  const likeRef = useRef(0)
  const didMountRef = useRef(false)
  const domRef = useRef<HTMLInputElement>(null)
  const theme = useContext(ThemeContext)
  console.log(theme)
  useEffect(() => {
    console.log("document title effect is running")
    document.title = `点击了${like}次`
  },[like])

  useEffect(()=>{
    if(didMountRef.current){
      console.log("this is uodate")
    } else {
      didMountRef.current = true
    }
  })

  useEffect(()=>{
    if(domRef && domRef.current){
      domRef.current.focus()
    }
  })

  function handleAlertClick(){
    setTimeout(() => {
      alert('you click on ' + likeRef.current)
    },3000)
  }

  const style = {
    color: theme.color,
    backgroundColor: theme.background
  }
  return (
    <>
      <input type="text" ref={domRef} />
      <button style={style} onClick={()=>{setLike(like+1);likeRef.current++}}>{like}👍</button>
      <button onClick={handleAlertClick}>alert</button>
    </>
  )
}

export default LikeButton