import type { BoxProps } from './box.interfaces.js'

import { forwardRef }    from 'react'
import React             from 'react'

import { BoxElement }    from '@atls-ui-parts/layout'

import { boxSprinkles }  from './box.css.js'

export const Box = forwardRef<HTMLDivElement, BoxProps>((
  { children, display = 'flex', boxSizing = 'border-box', ...props },
  ref
) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <BoxElement ref={ref} sprinkles={boxSprinkles as any} {...{ display, boxSizing }} {...props}>
    {children}
  </BoxElement>
))
