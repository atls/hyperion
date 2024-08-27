import { KeyboardEventHandler } from 'react'
import { RefObject }            from 'react'
import { useEffect }            from 'react'

export const useKeyboard = (node: RefObject<HTMLButtonElement>, setChecked: (value: boolean) => void) => {
  useEffect(() => {
    const onKeyDownHandler: KeyboardEventHandler = ({ key }) => {
      if (key === 'ArrowLeft') {
        setChecked(false)
      } else if (key === 'ArrowRight') {
        setChecked(true)
      }
    }

    const current = node?.current || null

    // @ts-expect-error overload
    current?.addEventListener('keydown', onKeyDownHandler)

    return () => {
      // @ts-expect-error overload
      current?.removeEventListener('keydown', onKeyDownHandler)
    }
  }, [node, setChecked])

  return null
}
