import type { UseOutsideClickType } from './use-outside-click.interfaces.js'

import { useEffect }                from 'react'
import { useRef }                   from 'react'

export const useOutsideClick: UseOutsideClickType = (action) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        action()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [action])

  return { ref }
}
