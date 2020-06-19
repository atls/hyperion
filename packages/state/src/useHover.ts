import { useState } from 'react'

export const useHover = () => {
  const [hover, setHover] = useState(false)

  return {
    hover,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  }
}
