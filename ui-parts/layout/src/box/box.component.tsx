import React            from 'react'
import { forwardRef }   from 'react'

import { BoxElement }   from './box.element.js'
import { BoxProps }     from './box.interfaces.js'
import { boxSprinkles } from './box.css.js'

export const Box = forwardRef<HTMLDivElement, BoxProps>(({ children, ...props }, ref) => (
  <BoxElement ref={ref} sprinkles={boxSprinkles as any} {...props}>
    {children}
  </BoxElement>
))

Box.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box',
}
