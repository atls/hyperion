import React       from 'react'
import { useMemo } from 'react'

const createMenuRenderer =
  (getMenuProps) =>
  (Menu) =>
  ({ ...menuProps }) => {
    const props = useMemo(
      () => ({
        ...getMenuProps(),
        ...menuProps,
      }),
      [menuProps]
    )

    return <Menu {...props} />
  }

export { createMenuRenderer }
