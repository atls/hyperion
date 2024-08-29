import type { WindowDimensions } from './use-window-size.interfaces.js'

import { useEffect }             from 'react'
import { useState }              from 'react'
import { useCallback }           from 'react'

import { defaultWindowSize }     from './use-window-size.constants.js'

export function useWindowSize(): WindowDimensions {
  const [windowSize, setWindowSize] = useState<WindowDimensions>(defaultWindowSize)

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
    return (): void => {
      window.removeEventListener('resize', fetchWindowDimensionsAndSave)
    }
  }, [fetchWindowDimensionsAndSave])

  return windowSize
}
