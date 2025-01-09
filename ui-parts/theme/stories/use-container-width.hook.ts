import type { RefObject } from 'react'

import { useState }       from 'react'
import { useEffect }      from 'react'

export const useContainerWidth = (ref: RefObject<HTMLElement>): number => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const updateWidth = (): void => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth)
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)

    return (): void => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [ref])

  return width
}
