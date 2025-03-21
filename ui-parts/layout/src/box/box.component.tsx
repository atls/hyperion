import type { BoxProps } from './box.interfaces.js'

import { forwardRef }    from 'react'
import React             from 'react'

import { BoxElement }    from './box.element.js'
import { boxSprinkles }  from './box.css.js'

export const Box = forwardRef<HTMLDivElement, BoxProps>(({ children, ...props }, ref) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <BoxElement ref={ref} sprinkles={boxSprinkles as any} {...props}>
    {children}
  </BoxElement>
))

Box.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box',
}
