import { useEffect, useState } from 'react'
import { useCheckBrowser } from './useCheckBrowser'

export function useCheckMobile() {
  const isClient = useCheckBrowser()
  const [width, setWidth] = useState(isClient ? window?.innerWidth : 0)
  const breakpoint = 768
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => setWidth(window.innerWidth))
    }
  }, [])
  return isClient ? width < breakpoint : true
}
