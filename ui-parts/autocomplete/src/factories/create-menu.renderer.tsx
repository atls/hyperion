import React, { useMemo } from 'react'

const createMenuRenderer = Menu => ({ getMenuProps, children }) => {
  const props = useMemo(() => getMenuProps({ style: {} }, { suppressRefError: true }), [
    getMenuProps,
  ])

  return <Menu {...props}>{children}</Menu>
}

export { createMenuRenderer }
