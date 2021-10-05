import { useCallback, useState } from 'react'

import { UseHoverStateResult }   from './interfaces'

export const useHoverState = (): UseHoverStateResult => {
  const [hovered, setHovered] = useState<boolean>(false)

  const change = useCallback(
    (nextValue?: boolean | any): void => {
      const value = nextValue === true || nextValue === false ? nextValue : !hovered

      setHovered(value)
    },
    [hovered]
  )

  return [hovered, change]
}
