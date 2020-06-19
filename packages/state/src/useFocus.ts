import { useState } from 'react'

export const useFocus = () => {
  const [focus, setFocus] = useState(false)

  return {
    focus,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
  }
}
