import { useState } from 'react'

export const usePinnedState = () => {
  const [pinned, setPinned] = useState<boolean>(false)

  const change = (nextValue: any) => {
    setPinned(typeof nextValue === 'boolean' ? nextValue : !pinned)
  }

  return [pinned, change] as const
}
