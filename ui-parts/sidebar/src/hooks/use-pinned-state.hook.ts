import { useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const usePinnedState = (): [boolean, (nextValue: any) => void] => {
  const [pinned, setPinned] = useState<boolean>(false)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const change = (nextValue: any): void => {
    setPinned(typeof nextValue === 'boolean' ? nextValue : !pinned)
  }

  return [pinned, change] as const
}
