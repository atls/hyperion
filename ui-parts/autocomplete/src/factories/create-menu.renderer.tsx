import React from 'react'

const createMenuRenderer = (Menu) =>
  // eslint-disable-next-line
  ({ children, ...props }) => <Menu {...props}>{children}</Menu>

export { createMenuRenderer }
