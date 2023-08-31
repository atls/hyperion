import { RefObject }           from 'react'
import { useEffect }           from 'react'

import { useHoverState }       from './use-hover-state'
import { UseHoverStateResult } from './interfaces'

export const useHover = (node: RefObject<HTMLDivElement>): UseHoverStateResult => {
  const [hovered, setHovered] = useHoverState()

  useEffect(() => {
    const onMouseEnter = () => setHovered(true)
    const onMouseLeave = () => setHovered(false)

    const { current } = node

    current.addEventListener('mouseenter', onMouseEnter)
    current.addEventListener('mouseleave', onMouseLeave)

    return () => {
      current.removeEventListener('mouseenter', onMouseEnter)
      current.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [node, setHovered])

  return [hovered, setHovered]
}
