import { RefObject, useEffect } from 'react'

import { UseHoverStateResult }  from './interfaces'
import { useHoverState }        from './use-hover-state'

export const useHover = (node: RefObject<HTMLDivElement>): UseHoverStateResult => {
  const [hovered, setHovered] = useHoverState()

  const onMouseEnter = () => setHovered(true)
  const onMouseLeave = () => setHovered(false)

  useEffect(() => {
    node.current.addEventListener('mouseenter', onMouseEnter)
    node.current.addEventListener('mouseleave', onMouseLeave)

    return () => {
      node.current.removeEventListener('mouseenter', onMouseEnter)
      node.current.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [node])

  return [hovered, setHovered]
}
