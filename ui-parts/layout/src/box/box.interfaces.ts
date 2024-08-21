import { HTMLAttributes }         from 'react'
import { createRainbowSprinkles } from 'rainbow-sprinkles'

import { BoxSprinkles }           from './box.css.js'

export interface BaseBoxProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  fill?: boolean
  fullViewportWidth?: boolean
  fullViewportHeight?: boolean
}

export interface BoxElementProps extends BaseBoxProps {
  sprinkles: ReturnType<typeof createRainbowSprinkles>
}

export interface BoxProps extends BaseBoxProps, BoxSprinkles {}
