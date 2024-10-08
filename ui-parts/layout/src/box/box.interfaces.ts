import type { SprinklesFn }    from 'rainbow-sprinkles/createRuntimeFn'
import type { HTMLAttributes } from 'react'

import type { BoxSprinkles }   from './box.css.js'

export interface BaseBoxProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  fill?: boolean
  fullViewportWidth?: boolean
  fullViewportHeight?: boolean
}

export interface BoxElementProps extends BaseBoxProps {
  sprinkles: SprinklesFn<any>
}

export interface BoxProps extends BaseBoxProps, BoxSprinkles {}
