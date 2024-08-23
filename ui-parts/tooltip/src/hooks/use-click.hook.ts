import { useState } from 'react'

export const useClick = () => {
  const [isClicked, setClicked] = useState(false)

  const close = () => setClicked(false)

  const clickProps = {
    onClick: () => setClicked(!isClicked),
  }

  return [isClicked, close, clickProps] as const
}
