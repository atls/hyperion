import React       from 'react'
import { useMemo } from 'react'

export const createLabelRenderer =
  (Label) =>
  ({ getLabelProps, label, ...labelProps }) => {
    const props = useMemo(
      () => ({
        ...getLabelProps(),
        ...labelProps,
      }),
      [getLabelProps, labelProps]
    )

    return label ? <Label {...props}>{label}</Label> : null
  }
