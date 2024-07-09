import { useState, useEffect, useRef, MutableRefObject } from 'react'

const useScrollVisibility = (): [
  MutableRefObject<HTMLDivElement | null>,
  boolean
] => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      }
      // ,{ threshold: 0.1 }
    )

    const refCurrent = ref.current

    if (refCurrent) {
      observer.observe(refCurrent)
    }

    return () => {
      if (refCurrent) {
        observer.unobserve(refCurrent)
      }
    }
  }, [])

  return [ref, isVisible]
}

export { useScrollVisibility }
