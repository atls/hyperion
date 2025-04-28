import type { MouseEvent }     from 'react'

import type { HoverProps }     from './use-hover.interfaces.js'
import type { Timeout }        from './use-hover.interfaces.js'
import type { UseHoverProps }  from './use-hover.interfaces.js'
import type { UseHoverReturn } from './use-hover.interfaces.js'

import { useState }            from 'react'
import { useRef }              from 'react'
import { useEffect }           from 'react'

export const useHover = ({
  delayEnter = 0,
  delayLeave = 0,
  hideOnScroll = true,
}: UseHoverProps = {}): UseHoverReturn => {
  const [show, setShow] = useState(false)

  const enterTimeout = useRef<Timeout | null>(null)
  const exitTimeout = useRef<Timeout | null>(null)

  const hasTouchMoved = useRef<boolean>(false)

  const removeAllTimeouts = (): void => {
    if (enterTimeout.current) clearTimeout(enterTimeout.current)
    if (exitTimeout.current) clearTimeout(exitTimeout.current)
    enterTimeout.current = null
    exitTimeout.current = null
  }

  const onMouseEnter = (): void => {
    if (exitTimeout.current) {
      removeAllTimeouts()
    }

    if (show || enterTimeout.current) return

    enterTimeout.current = setTimeout(() => {
      setShow(true)
      enterTimeout.current = null
    }, delayEnter)
  }

  const onMouseLeave = (_: MouseEvent | null, immediate?: boolean): void => {
    if (enterTimeout.current) {
      removeAllTimeouts()
    }

    if (!show) return

    if (immediate) {
      setShow(false)
      removeAllTimeouts()
      return
    }

    if (exitTimeout.current) return

    exitTimeout.current = setTimeout(() => {
      setShow(false)
      exitTimeout.current = null
    }, delayLeave)
  }

  const close = (): void => {
    onMouseLeave(null, true)
  }

  useEffect(() => {
    const onScroll = (): void => {
      if (show && hideOnScroll) {
        removeAllTimeouts()
        setShow(false)
      }
    }

    window.addEventListener('scroll', onScroll, true)

    return (): void => {
      window.removeEventListener('scroll', onScroll, true)
    }
  }, [show, hideOnScroll, removeAllTimeouts])

  useEffect(
    () => (): void => {
      removeAllTimeouts()
    },
    [removeAllTimeouts]
  )

  const hoverProps: HoverProps = {
    onMouseEnter,
    onMouseLeave,
    onTouchStart: () => {
      hasTouchMoved.current = false
    },
    onTouchMove: () => {
      hasTouchMoved.current = true
    },
    onTouchEnd: () => {
      if (!hasTouchMoved.current && !show) {
        setShow(true)
      }

      hasTouchMoved.current = false
    },
  }

  return [show, hoverProps, close] as const
}
