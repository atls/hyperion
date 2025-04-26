import type { WindowDimensions } from './use-window-size.interfaces.js'

import { useEffect }             from 'react'
import { useState }              from 'react'

import { defaultWindowSize }     from './use-window-size.constants.js'

export function useWindowSize(): WindowDimensions {
  const [windowSize, setWindowSize] = useState<WindowDimensions>(defaultWindowSize)

  useEffect(() => {
    const fetchWindowDimensionsAndSave = (): void => {
      if (typeof window !== 'undefined') {
        setWindowSize({
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
          outerWidth: window.outerWidth,
          outerHeight: window.outerHeight,
        })
      }
    }

    fetchWindowDimensionsAndSave()

    window.addEventListener('resize', fetchWindowDimensionsAndSave)

    return (): void => {
      window.removeEventListener('resize', fetchWindowDimensionsAndSave)
    }
  }, [])

  return windowSize
}
