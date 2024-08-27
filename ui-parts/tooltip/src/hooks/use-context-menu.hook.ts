import { useState } from 'react'

export const useContextMenu = () => {
  const [isOpened, setOpened] = useState(false)

  const close = () => setOpened(false)

  const contextMenuProps = {
    onContextMenu: (event: Event) => {
      event.preventDefault()
      setOpened(true)
    },
  }

  return [isOpened, close, contextMenuProps] as const
}
