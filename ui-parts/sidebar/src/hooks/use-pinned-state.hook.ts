import { useState } from 'react'

export const usePinnedState = (): [boolean, (nextValue: any) => void] => {
  const [pinned, setPinned] = useState<boolean>(false)

  const change = (nextValue: any): void => {
    setPinned(typeof nextValue === 'boolean' ? nextValue : !pinned)
  }

  return [pinned, change] as const
}
