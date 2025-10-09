import type { ReactNode } from 'react'

import type { GridProps } from './grid.interfaces.js'

import { GridElement }    from './grid.element.js'
import { gridSprinkles }  from './grid.css.js'

export const Grid = ({
  children,
  display = 'grid',
  boxSizing = 'border-box',
  ref,
  ...props
}: GridProps): ReactNode => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <GridElement ref={ref} sprinkles={gridSprinkles as any} {...{ display, boxSizing }} {...props}>
    {children}
  </GridElement>
)
