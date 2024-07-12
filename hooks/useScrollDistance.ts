// * Hook to detect the scroll distance of the window

import { useState, useEffect } from 'react'

const useScrollDistance = (): number => {
  const [scrollDistance, setScrollDistance] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollDistance(window.scrollY || document.documentElement.scrollTop)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollDistance
}

export { useScrollDistance }
