import React               from 'react'
import { useMemo }         from 'react'
import { AnimatePresence } from 'framer-motion'

const createMenuRenderer =
  (getMenuProps, renderLayer, isOpen) =>
  (Menu) =>
  ({ ...menuProps }) => {
    const props = useMemo(
      () => ({
        ...getMenuProps(),
        ...menuProps,
      }),
      [menuProps]
    )

    return renderLayer(<AnimatePresence>{isOpen && <Menu {...props} />}</AnimatePresence>)
  }

export { createMenuRenderer }
