import { useCallback }          from 'react'
import { useState }             from 'react'

import { UsePinnedStateResult } from './interfaces'

export const usePinnedState = (): UsePinnedStateResult => {
  const [pinned, setPinned] = useState<boolean>(false)

  const change = useCallback(
    (nextValue?: boolean | any): void => {
      const value = nextValue === true || nextValue === false ? nextValue : !pinned

      setPinned(value)
    },
    [pinned]
  )

  return [pinned, change]
}
