import React       from 'react'
import { useMemo } from 'react'

const createMenuRenderer = (Menu) =>
  // eslint-disable-next-line
  ({ getMenuProps, children }) => {
    const props = useMemo(
      () => getMenuProps({ style: {} }, { suppressRefError: true }),
      [getMenuProps]
    )

    return <Menu {...props}>{children}</Menu>
  }

export { createMenuRenderer }
