import type { ReactNode } from 'react'

import type { BoxProps }  from './box.interfaces.js'

import React              from 'react'

import { BoxElement }     from '@atls-ui-parts/layout'

import { boxSprinkles }   from './box.css.js'

export const Box = ({
  children,
  display = 'flex',
  boxSizing = 'border-box',
  ref,
  ...props
}: BoxProps): ReactNode => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <BoxElement ref={ref} sprinkles={boxSprinkles as any} {...{ display, boxSizing }} {...props}>
    {children}
  </BoxElement>
)
