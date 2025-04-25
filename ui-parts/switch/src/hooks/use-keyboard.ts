import type { RefObject }            from 'react'
import type { KeyboardEventHandler } from 'react'

import { useEffect }                 from 'react'

export const useKeyboard = (
  node: RefObject<HTMLButtonElement | null>,
  setChecked: (value: boolean) => void
): null => {
  useEffect(() => {
    const onKeyDownHandler: KeyboardEventHandler = ({ key }) => {
      if (key === 'ArrowLeft') {
        setChecked(false)
      } else if (key === 'ArrowRight') {
        setChecked(true)
      }
    }

    const current = node?.current || null

    // @ts-expect-error correct overload
    current?.addEventListener('keydown', onKeyDownHandler)

    return (): void => {
      // @ts-expect-error correct overload
      current?.removeEventListener('keydown', onKeyDownHandler)
    }
  }, [node, setChecked])

  return null
}
