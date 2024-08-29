import type { UseScaleResult }  from './use-scale.interfaces.js'

import { useEffect }            from 'react'
import { useRef }               from 'react'
import { useState }             from 'react'

import { getContentDimensions } from '@atls-ui-parts/dom'

export const useScale = (): UseScaleResult => {
  const ref = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState<number>(1)
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    if (ref?.current?.parentElement) {
      const childrenHeight = ref.current.offsetHeight
      const childrenWidth = ref.current.offsetWidth
      const { width, height } = getContentDimensions(ref.current.parentElement)

      if (childrenWidth >= childrenHeight) {
        setScale(width < childrenWidth ? width / childrenWidth : 1)
      } else {
        setScale(height < childrenHeight ? height / childrenHeight : 1)
      }

      setMounted(true)
    }
  }, [])

  return {
    ref,
    style: { transform: `scale(${scale})`, opacity: mounted ? 1 : 0 },
  }
}
