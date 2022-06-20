import { useState } from 'react'

const useClick = (): [boolean, () => void, { onClick: () => any }] => {
  const [isClicked, setClicked] = useState(false)

  const close = () => setClicked(false)

  const clickProps = {
    onClick: () => setClicked(!isClicked),
  }

  return [isClicked, close, clickProps]
}

export { useClick }
