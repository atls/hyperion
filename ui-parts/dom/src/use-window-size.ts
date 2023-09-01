import { useEffect }   from 'react'
import { useState }    from 'react'
import { useCallback } from 'react'

interface WindowDimensions {
  innerWidth: number
  innerHeight: number
  outerWidth: number
  outerHeight: number
}

const initialValue: WindowDimensions = {
  innerWidth: 0,
  innerHeight: 0,
  outerWidth: 0,
  outerHeight: 0,
}

export function useWindowSize(): WindowDimensions {
  const [windowSize, setWindowSize] = useState<WindowDimensions>(initialValue)

  const isClient = typeof window !== 'undefined'

  const fetchWindowDimensionsAndSave = useCallback(() => {
    if (isClient) {
      setWindowSize({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        outerWidth: window.outerWidth,
        outerHeight: window.outerHeight,
      })
    }
  }, [isClient])

  useEffect(() => {
    fetchWindowDimensionsAndSave()
  }, [fetchWindowDimensionsAndSave])

  useEffect(() => {
    window.addEventListener('resize', fetchWindowDimensionsAndSave)
    return () => window.removeEventListener('resize', fetchWindowDimensionsAndSave)
  }, [fetchWindowDimensionsAndSave])

  return windowSize
}
