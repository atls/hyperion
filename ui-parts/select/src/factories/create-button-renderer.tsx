import React       from 'react'
import { useMemo } from 'react'

const createButtonRenderer =
  (getToggleButtonProps) =>
  (Button) =>
  ({ children, ...buttonProps }) => {
    const props = useMemo(
      () => ({
        ...getToggleButtonProps(),
        ...buttonProps,
      }),
      [buttonProps]
    )

    return <Button {...props}>{children}</Button>
  }

export { createButtonRenderer }
