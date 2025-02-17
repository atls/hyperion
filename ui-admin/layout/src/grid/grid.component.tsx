import type { GridProps } from './grid.interfaces.js'

import { forwardRef }     from 'react'
import React              from 'react'

import { GridElement }    from '@atls-ui-parts/layout'

import { gridSprinkles }  from './grid.css.js'

export const Grid = forwardRef<HTMLDivElement, GridProps>(({ children, ...props }, ref) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <GridElement ref={ref} sprinkles={gridSprinkles as any} {...props}>
    {children}
  </GridElement>
))

Grid.defaultProps = {
  display: 'grid',
  boxSizing: 'border-box',
}
