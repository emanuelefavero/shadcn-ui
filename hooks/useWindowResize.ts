// * Hook to detect if the window is resized

import { useEffect } from 'react'

const useWindowResize = (onResize: () => void) => {
  useEffect(() => {
    const handleResize = () => {
      onResize()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [onResize])
}

export { useWindowResize }
