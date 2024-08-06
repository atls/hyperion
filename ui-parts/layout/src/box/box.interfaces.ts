import { HTMLAttributes } from 'react'

import { BoxSprinkles }   from './box.css.js'

export interface BoxProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>, BoxSprinkles {
  fill?: boolean
  fullViewportWidth?: boolean
  fullViewportHeight?: boolean
}
