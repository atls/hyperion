import React       from 'react'
import { useMemo } from 'react'

const createLabelRenderer =
  (getLabelProps) =>
  (Label) =>
  ({ children, ...labelProps }) => {
    const props = useMemo(
      () => ({
        ...getLabelProps(),
        ...labelProps,
      }),
      [labelProps]
    )

    return children ? <Label {...props}>{children}</Label> : null
  }

export { createLabelRenderer }
