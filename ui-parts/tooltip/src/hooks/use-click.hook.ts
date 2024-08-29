import { useState } from 'react'

export const useClick = (): [boolean, () => void, { onClick: () => void }] => {
  const [isClicked, setIsClicked] = useState<boolean>(false)

  const close = (): void => {
    setIsClicked(false)
  }

  const clickProps = {
    onClick: (): void => {
      setIsClicked(!isClicked)
    },
  }

  return [isClicked, close, clickProps] as const
}
