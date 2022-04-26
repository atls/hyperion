import { RefObject } from 'react'
import { useEffect } from 'react'

export const useKeyboard = (node: RefObject<HTMLButtonElement>, setChecked) => {
  useEffect(() => {
    const onKeyDownHandler = ({ keyCode }) => {
      if (keyCode === 37) {
        setChecked(false)
      } else if (keyCode === 39) {
        setChecked(true)
      }
    }

    const current = node?.current || null

    current?.addEventListener('keydown', onKeyDownHandler)

    return () => {
      current?.removeEventListener('keydown', onKeyDownHandler)
    }
  }, [node, setChecked])

  return null
}
