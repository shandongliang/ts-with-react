import { useState, useEffect } from 'react'
import axios from 'axios'

const useURLLoader = (url: string, deps: any[] = []) => {
  const [data, setData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(()=>{
    setIsLoading(true)
    axios.get(url).then(result => {
      setData(result.data)
      setIsLoading(false)
    })
  }, deps)
  return [data, isLoading]
}

export default useURLLoader