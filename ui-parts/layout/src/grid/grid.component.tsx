import type { GridProps } from './grid.interfaces.js'

import { forwardRef }     from 'react'
import React              from 'react'

import { GridElement }    from './grid.element.js'
import { gridSprinkles }  from './grid.css.js'

export const Grid = forwardRef<HTMLDivElement, GridProps>((
  { children, display = 'grid', boxSizing = 'border-box', ...props },
  ref
) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <GridElement ref={ref} sprinkles={gridSprinkles as any} {...{ display, boxSizing }} {...props}>
    {children}
  </GridElement>
))
