import { RefObject, useEffect } from 'react'

export const useKeyboard = (node: RefObject<HTMLButtonElement>, setChecked) => {
  useEffect(() => {
    const onKeyDownHandler = ({ keyCode }) => {
      if (keyCode === 37) {
        setChecked(false)
      } else if (keyCode === 39) {
        setChecked(true)
      }
    }

    node.current.addEventListener('keydown', onKeyDownHandler)

    return () => {
      node.current.removeEventListener('keydown', onKeyDownHandler)
    }
  }, [node])

  return null
}
