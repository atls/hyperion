import { useState } from 'react'

export const useContextMenu = (): [
  boolean,
  () => void,
  { onContextMenu: (event: Event) => void },
] => {
  const [isOpened, setIsOpened] = useState<boolean>(false)

  const close = (): void => {
    setIsOpened(false)
  }

  const contextMenuProps = {
    onContextMenu: (event: Event): void => {
      event.preventDefault()
      setIsOpened(true)
    },
  }

  return [isOpened, close, contextMenuProps] as const
}
