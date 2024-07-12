// * Hook to detect if the browser is in dark mode

import { useState, useEffect } from 'react'

const useDarkMode = () => {
  // Define a state to keep track of dark mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if the browser supports matchMedia and if dark mode is enabled
    return (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    )
  })

  useEffect(() => {
    // Define a listener function that updates the state based on the media query
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches)
    }

    // Add the event listener
    mediaQuery.addEventListener('change', handleChange)

    // Clean up the event listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return isDarkMode
}

export { useDarkMode }
