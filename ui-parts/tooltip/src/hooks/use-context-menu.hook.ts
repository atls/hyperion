import { useState } from 'react'

const useContextMenu = (): [boolean, () => void, { onContextMenu: (event: any) => void }] => {
  const [isOpened, setOpened] = useState(false)

  const close = () => setOpened(false)

  const contextMenuProps = {
    onContextMenu: (event) => {
      event.preventDefault()
      setOpened(true)
    },
  }

  return [isOpened, close, contextMenuProps]
}

export { useContextMenu }
