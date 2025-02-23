import type { SprinklesFn }    from 'rainbow-sprinkles'
import type { HTMLAttributes } from 'react'

import type { BoxSprinkles }   from './box.css.js'

export interface BaseBoxProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  fill?: boolean
  fullViewportWidth?: boolean
  fullViewportHeight?: boolean
}

export interface BoxElementProps extends BaseBoxProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sprinkles: SprinklesFn<any>
}

export interface BoxProps extends BaseBoxProps, BoxSprinkles {}
